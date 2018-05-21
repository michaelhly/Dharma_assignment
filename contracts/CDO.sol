pragma solidity 0.4.18;

// Internal dependencies
import "./DebtRegistry.sol";
import "./TermsContract.sol";

// External dependencies
import { ERC721BasicToken } from "zeppelin-solidity/contracts/token/ERC721/ERC721BasicToken.sol";
import "zeppelin-solidity/contracts/token/ERC721/ERC721Receiver.sol";
import "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol";


contract TrancheToken is ERC721Token {
    /// mapping from tokenId's to CDO contract instances
    mapping(uint256=>address) internal cdos;

    uint256 internal _tokenIdCounter;

    function TrancheToken()
        public
        ERC721Token("CDO Tranche Token", "CTT")
    {
    }

    function create(address cdo)
        public
        returns (uint256) // tokenId
    {
        super._mint(msg.sender, _tokenIdCounter);
        cdos[_tokenIdCounter] = cdo;
        _tokenIdCounter++;
    }
}


/**
 * @title A generator of Collateralized Debt Obligation agreements
 * @author F. Eugene Aumson (feuGeneA@github)
 * @notice Deploys a unique CDO contract, with caller having been granted sole
 *     permission call that contract's `finalize()` method.
 */
contract CDOFactory {
    function create(DebtRegistry debtRegistry)
        public
        returns (address)
    {
        return new CDO(debtRegistry);
    }
}


/**
 * @title A Collateralized Debt Obligation agreement
 * @author F. Eugene Aumson (feuGeneA@github)
 * @notice A Collateralized Debt Obligation agreement with 6 senior tranche
 *     shares and 4 mezzanine tranche shares, where the senior tranche is paid
 *     out first until it's been made whole for 60% of the total principal +
 *     interest, and the mezzanine tranche is paid out second with the
 *     remainder of the principal + interest.  Deployed via CDOFactory
 *     contract.  Caller of CDOFactory.create() has sole permission to add
 *     underlying `DebtToken`s and to finalize the contract.  will be have sole
 *     permission to call CDO.finalize().
 */
contract CDO is ERC721Receiver {
    TrancheToken internal trancheToken;

    address public admin; /// only one permissioned to call `finalize()`

    bool public finalized; /// whether the agreement has been finalized

    DebtRegistry public debtRegistry;

    uint256[] public underlyingDebts; /// references to `DebtToken` `tokenId`s

    uint public expectedRepayment;
    uint public repaid; /// how much has been repaid

    // mapping of tranche token ID to repayment entitlements
    mapping(uint256 => uint) internal entitlements;

    uint256[6] internal seniors; // tranche token identifiers
    uint256[4] internal mezzanine; // tranche token identifiers

    event EntitlementUpdated(uint256 trancheTokenId, uint amount);

    function CDO(address _debtRegistry)
        public
    {
        admin = msg.sender;

        debtRegistry = DebtRegistry(_debtRegistry);

        for (uint i=0; i < seniors.length; i++) {
            uint256 senior = trancheToken.create(this);
            entitlements[senior] = 0;
            seniors[i] = senior;
        }

        for (uint j=0; j < mezzanine.length; j++) {
            uint256 mez = trancheToken.create(this);
            entitlements[mez] = 0;
            mezzanine[j] = mez;
        }
    }

    /**
     * Receive debt repayment
     */
    function ()
        public
        payable
    {
        uint toPay = msg.value;

        uint expectedSeniorEntitlement = (expectedRepayment*6/10)-repaid;

        if (expectedSeniorEntitlement > 0) {
            // senior tranche is entitled to some amount of this repayment

            uint seniorAllotment = expectedSeniorEntitlement;
            if (seniorAllotment > toPay) {
                seniorAllotment = toPay;
            }

            for (uint i=0; i < seniors.length; i++) {
                // TODO: consider whether truncation is a potential problem in
                // the division here
                entitlements[seniors[i]] += seniorAllotment/seniors.length;
                EntitlementUpdated(seniors[i], entitlements[seniors[i]]);
            }

            toPay -= seniorAllotment;
        }

        if (toPay > 0) {
            // repay mezzanine tranche
            for (uint j=0; j < mezzanine.length; j++) {
                // TODO: consider whether truncation is a potential problem in
                // the division here
                entitlements[mezzanine[j]] += toPay/mezzanine.length;
                EntitlementUpdated(mezzanine[j], entitlements[mezzanine[j]]);
            }
        }

        repaid += msg.value;
    }

    function withdraw(uint256 trancheTokenId, address _to)
        public
    {
        require(trancheToken.ownerOf(trancheTokenId) == msg.sender);
        require(entitlements[trancheTokenId] > 0);

        uint entitlement = entitlements[trancheTokenId];
        entitlements[trancheTokenId] = 0;
        _to.transfer(entitlement);
        EntitlementUpdated(trancheTokenId, 0);
    }

    /**
     * Receive `DebtToken`s, the underlying debts of this CDO.
     */
    function onERC721Received(
        address _from,
        uint256 _tokenId,
        bytes
    )
        public
        returns(bytes4)
    {
        require(!finalized);
        require(_from == admin);
        // require that token is a DebtToken ?

        TermsContract termsContract =
            TermsContract(debtRegistry.getTermsContract(bytes32(_tokenId)));

        // TODO: determine whether getExpectedRepaymentValue is really
        // appropriate here, given that it's not a constant function.
        expectedRepayment +=
            termsContract.getExpectedRepaymentValue(
                bytes32(_tokenId),
                termsContract.getTermEndTimestamp(bytes32(_tokenId)));

        underlyingDebts.push(_tokenId);

        return ERC721Receiver.ERC721_RECEIVED;
    }

    /**
     * @author F. Eugene Aumson (feuGeneA@github)
     * @notice Precondition: transfer to this contract the `DebtToken`s which
     *     will serve as the underlying debts for this CDO.  This method will
     *     create the tranche tokens, transfer them to the caller, and return
     *     their `tokenId`s in `senior` and `mezzanine`.
     */
    function finalize()
        public
        returns (
            uint256[6] _senior,
            uint256[4] _mezzanine)
    {
        // TODO: consider anything else that might need to be done here.
        finalized = true;
        return (seniors, mezzanine);
    }
}

export const BasicToken = 
{
  "contractName": "BasicToken",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b6104008061001e6000396000f300606060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806318160ddd1461005c57806370a0823114610085578063a9059cbb146100d2575b600080fd5b341561006757600080fd5b61006f61012c565b6040518082815260200191505060405180910390f35b341561009057600080fd5b6100bc600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610136565b6040518082815260200191505060405180910390f35b34156100dd57600080fd5b610112600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061017e565b604051808215151515815260200191505060405180910390f35b6000600154905090565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156101bb57600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561020857600080fd5b610259826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461039d90919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506102ec826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546103b690919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60008282111515156103ab57fe5b818303905092915050565b60008082840190508381101515156103ca57fe5b80915050929150505600a165627a7a7230582057c587c2e7e020568205be871cf9bfe29127587e0812350b876875a8430134c60029",
  "deployedBytecode": "0x606060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806318160ddd1461005c57806370a0823114610085578063a9059cbb146100d2575b600080fd5b341561006757600080fd5b61006f61012c565b6040518082815260200191505060405180910390f35b341561009057600080fd5b6100bc600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610136565b6040518082815260200191505060405180910390f35b34156100dd57600080fd5b610112600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061017e565b604051808215151515815260200191505060405180910390f35b6000600154905090565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156101bb57600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561020857600080fd5b610259826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461039d90919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506102ec826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546103b690919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60008282111515156103ab57fe5b818303905092915050565b60008082840190508381101515156103ca57fe5b80915050929150505600a165627a7a7230582057c587c2e7e020568205be871cf9bfe29127587e0812350b876875a8430134c60029",
  "sourceMap": "180:1119:32:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "180:1119:32:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;371:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1189:107;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;608:379;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;371:83;415:7;437:12;;430:19;;371:83;:::o;1189:107::-;1245:15;1275:8;:16;1284:6;1275:16;;;;;;;;;;;;;;;;1268:23;;1189:107;;;:::o;608:379::-;671:4;706:1;691:17;;:3;:17;;;;683:26;;;;;;;;733:8;:20;742:10;733:20;;;;;;;;;;;;;;;;723:6;:30;;715:39;;;;;;;;847:32;872:6;847:8;:20;856:10;847:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;824:8;:20;833:10;824:20;;;;;;;;;;;;;;;:55;;;;901:25;919:6;901:8;:13;910:3;901:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;885:8;:13;894:3;885:13;;;;;;;;;;;;;;;:41;;;;953:3;932:33;;941:10;932:33;;;958:6;932:33;;;;;;;;;;;;;;;;;;978:4;971:11;;608:379;;;;:::o;835:110:30:-;893:7;920:1;915;:6;;908:14;;;;;;939:1;935;:5;928:12;;835:110;;;;:::o;1007:129::-;1065:7;1080:9;1096:1;1092;:5;1080:17;;1115:1;1110;:6;;1103:14;;;;;;1130:1;1123:8;;1007:129;;;;;:::o",
  "source": "pragma solidity ^0.4.18;\n\n\nimport \"./ERC20Basic.sol\";\nimport \"../../math/SafeMath.sol\";\n\n\n/**\n * @title Basic token\n * @dev Basic version of StandardToken, with no allowances.\n */\ncontract BasicToken is ERC20Basic {\n  using SafeMath for uint256;\n\n  mapping(address => uint256) balances;\n\n  uint256 totalSupply_;\n\n  /**\n  * @dev total number of tokens in existence\n  */\n  function totalSupply() public view returns (uint256) {\n    return totalSupply_;\n  }\n\n  /**\n  * @dev transfer token for a specified address\n  * @param _to The address to transfer to.\n  * @param _value The amount to be transferred.\n  */\n  function transfer(address _to, uint256 _value) public returns (bool) {\n    require(_to != address(0));\n    require(_value <= balances[msg.sender]);\n\n    // SafeMath.sub will throw if there is not enough balance.\n    balances[msg.sender] = balances[msg.sender].sub(_value);\n    balances[_to] = balances[_to].add(_value);\n    Transfer(msg.sender, _to, _value);\n    return true;\n  }\n\n  /**\n  * @dev Gets the balance of the specified address.\n  * @param _owner The address to query the the balance of.\n  * @return An uint256 representing the amount owned by the passed address.\n  */\n  function balanceOf(address _owner) public view returns (uint256 balance) {\n    return balances[_owner];\n  }\n\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC20/BasicToken.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/token/ERC20/BasicToken.sol",
      "exportedSymbols": {
        "BasicToken": [
          8488
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".18"
          ]
        },
        "id": 8394,
        "name": "PragmaDirective",
        "src": "0:24:32"
      },
      {
        "attributes": {
          "SourceUnit": 8564,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
          "file": "./ERC20Basic.sol",
          "scope": 8489,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 8395,
        "name": "ImportDirective",
        "src": "27:26:32"
      },
      {
        "attributes": {
          "SourceUnit": 8337,
          "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "file": "../../math/SafeMath.sol",
          "scope": 8489,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 8396,
        "name": "ImportDirective",
        "src": "54:33:32"
      },
      {
        "attributes": {
          "contractDependencies": [
            8563
          ],
          "contractKind": "contract",
          "documentation": "@title Basic token\n@dev Basic version of StandardToken, with no allowances.",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            8488,
            8563
          ],
          "name": "BasicToken",
          "scope": 8489
        },
        "children": [
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "ERC20Basic",
                  "referencedDeclaration": 8563,
                  "type": "contract ERC20Basic"
                },
                "id": 8397,
                "name": "UserDefinedTypeName",
                "src": "203:10:32"
              }
            ],
            "id": 8398,
            "name": "InheritanceSpecifier",
            "src": "203:10:32"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "SafeMath",
                  "referencedDeclaration": 8336,
                  "type": "library SafeMath"
                },
                "id": 8399,
                "name": "UserDefinedTypeName",
                "src": "224:8:32"
              },
              {
                "attributes": {
                  "name": "uint256",
                  "type": "uint256"
                },
                "id": 8400,
                "name": "ElementaryTypeName",
                "src": "237:7:32"
              }
            ],
            "id": 8401,
            "name": "UsingForDirective",
            "src": "218:27:32"
          },
          {
            "attributes": {
              "constant": false,
              "name": "balances",
              "scope": 8488,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => uint256)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(address => uint256)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 8402,
                    "name": "ElementaryTypeName",
                    "src": "257:7:32"
                  },
                  {
                    "attributes": {
                      "name": "uint256",
                      "type": "uint256"
                    },
                    "id": 8403,
                    "name": "ElementaryTypeName",
                    "src": "268:7:32"
                  }
                ],
                "id": 8404,
                "name": "Mapping",
                "src": "249:27:32"
              }
            ],
            "id": 8405,
            "name": "VariableDeclaration",
            "src": "249:36:32"
          },
          {
            "attributes": {
              "constant": false,
              "name": "totalSupply_",
              "scope": 8488,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint256",
                  "type": "uint256"
                },
                "id": 8406,
                "name": "ElementaryTypeName",
                "src": "290:7:32"
              }
            ],
            "id": 8407,
            "name": "VariableDeclaration",
            "src": "290:20:32"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "totalSupply",
              "payable": false,
              "scope": 8488,
              "stateMutability": "view",
              "superFunction": 8538,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 8408,
                "name": "ParameterList",
                "src": "391:2:32"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8415,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 8409,
                        "name": "ElementaryTypeName",
                        "src": "415:7:32"
                      }
                    ],
                    "id": 8410,
                    "name": "VariableDeclaration",
                    "src": "415:7:32"
                  }
                ],
                "id": 8411,
                "name": "ParameterList",
                "src": "414:9:32"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 8411
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 8407,
                          "type": "uint256",
                          "value": "totalSupply_"
                        },
                        "id": 8412,
                        "name": "Identifier",
                        "src": "437:12:32"
                      }
                    ],
                    "id": 8413,
                    "name": "Return",
                    "src": "430:19:32"
                  }
                ],
                "id": 8414,
                "name": "Block",
                "src": "424:30:32"
              }
            ],
            "id": 8415,
            "name": "FunctionDefinition",
            "src": "371:83:32"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "transfer",
              "payable": false,
              "scope": 8488,
              "stateMutability": "nonpayable",
              "superFunction": 8554,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 8475,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 8416,
                        "name": "ElementaryTypeName",
                        "src": "626:7:32"
                      }
                    ],
                    "id": 8417,
                    "name": "VariableDeclaration",
                    "src": "626:11:32"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_value",
                      "scope": 8475,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 8418,
                        "name": "ElementaryTypeName",
                        "src": "639:7:32"
                      }
                    ],
                    "id": 8419,
                    "name": "VariableDeclaration",
                    "src": "639:14:32"
                  }
                ],
                "id": 8420,
                "name": "ParameterList",
                "src": "625:29:32"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8475,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 8421,
                        "name": "ElementaryTypeName",
                        "src": "671:4:32"
                      }
                    ],
                    "id": 8422,
                    "name": "VariableDeclaration",
                    "src": "671:4:32"
                  }
                ],
                "id": 8423,
                "name": "ParameterList",
                "src": "670:6:32"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10077,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 8424,
                            "name": "Identifier",
                            "src": "683:7:32"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8417,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 8425,
                                "name": "Identifier",
                                "src": "691:3:32"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 8426,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "698:7:32"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 8427,
                                    "name": "Literal",
                                    "src": "706:1:32"
                                  }
                                ],
                                "id": 8428,
                                "name": "FunctionCall",
                                "src": "698:10:32"
                              }
                            ],
                            "id": 8429,
                            "name": "BinaryOperation",
                            "src": "691:17:32"
                          }
                        ],
                        "id": 8430,
                        "name": "FunctionCall",
                        "src": "683:26:32"
                      }
                    ],
                    "id": 8431,
                    "name": "ExpressionStatement",
                    "src": "683:26:32"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 10077,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 8432,
                            "name": "Identifier",
                            "src": "715:7:32"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8419,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 8433,
                                "name": "Identifier",
                                "src": "723:6:32"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 8405,
                                      "type": "mapping(address => uint256)",
                                      "value": "balances"
                                    },
                                    "id": 8434,
                                    "name": "Identifier",
                                    "src": "733:8:32"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "referencedDeclaration": null,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 10074,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 8435,
                                        "name": "Identifier",
                                        "src": "742:3:32"
                                      }
                                    ],
                                    "id": 8436,
                                    "name": "MemberAccess",
                                    "src": "742:10:32"
                                  }
                                ],
                                "id": 8437,
                                "name": "IndexAccess",
                                "src": "733:20:32"
                              }
                            ],
                            "id": 8438,
                            "name": "BinaryOperation",
                            "src": "723:30:32"
                          }
                        ],
                        "id": 8439,
                        "name": "FunctionCall",
                        "src": "715:39:32"
                      }
                    ],
                    "id": 8440,
                    "name": "ExpressionStatement",
                    "src": "715:39:32"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8405,
                                  "type": "mapping(address => uint256)",
                                  "value": "balances"
                                },
                                "id": 8441,
                                "name": "Identifier",
                                "src": "824:8:32"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 10074,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 8442,
                                    "name": "Identifier",
                                    "src": "833:3:32"
                                  }
                                ],
                                "id": 8443,
                                "name": "MemberAccess",
                                "src": "833:10:32"
                              }
                            ],
                            "id": 8444,
                            "name": "IndexAccess",
                            "src": "824:20:32"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sub",
                                  "referencedDeclaration": 8311,
                                  "type": "function (uint256,uint256) pure returns (uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 8405,
                                          "type": "mapping(address => uint256)",
                                          "value": "balances"
                                        },
                                        "id": 8445,
                                        "name": "Identifier",
                                        "src": "847:8:32"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "sender",
                                          "referencedDeclaration": null,
                                          "type": "address"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 10074,
                                              "type": "msg",
                                              "value": "msg"
                                            },
                                            "id": 8446,
                                            "name": "Identifier",
                                            "src": "856:3:32"
                                          }
                                        ],
                                        "id": 8447,
                                        "name": "MemberAccess",
                                        "src": "856:10:32"
                                      }
                                    ],
                                    "id": 8448,
                                    "name": "IndexAccess",
                                    "src": "847:20:32"
                                  }
                                ],
                                "id": 8449,
                                "name": "MemberAccess",
                                "src": "847:24:32"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8419,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 8450,
                                "name": "Identifier",
                                "src": "872:6:32"
                              }
                            ],
                            "id": 8451,
                            "name": "FunctionCall",
                            "src": "847:32:32"
                          }
                        ],
                        "id": 8452,
                        "name": "Assignment",
                        "src": "824:55:32"
                      }
                    ],
                    "id": 8453,
                    "name": "ExpressionStatement",
                    "src": "824:55:32"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8405,
                                  "type": "mapping(address => uint256)",
                                  "value": "balances"
                                },
                                "id": 8454,
                                "name": "Identifier",
                                "src": "885:8:32"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8417,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 8455,
                                "name": "Identifier",
                                "src": "894:3:32"
                              }
                            ],
                            "id": 8456,
                            "name": "IndexAccess",
                            "src": "885:13:32"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "add",
                                  "referencedDeclaration": 8335,
                                  "type": "function (uint256,uint256) pure returns (uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 8405,
                                          "type": "mapping(address => uint256)",
                                          "value": "balances"
                                        },
                                        "id": 8457,
                                        "name": "Identifier",
                                        "src": "901:8:32"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 8417,
                                          "type": "address",
                                          "value": "_to"
                                        },
                                        "id": 8458,
                                        "name": "Identifier",
                                        "src": "910:3:32"
                                      }
                                    ],
                                    "id": 8459,
                                    "name": "IndexAccess",
                                    "src": "901:13:32"
                                  }
                                ],
                                "id": 8460,
                                "name": "MemberAccess",
                                "src": "901:17:32"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8419,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 8461,
                                "name": "Identifier",
                                "src": "919:6:32"
                              }
                            ],
                            "id": 8462,
                            "name": "FunctionCall",
                            "src": "901:25:32"
                          }
                        ],
                        "id": 8463,
                        "name": "Assignment",
                        "src": "885:41:32"
                      }
                    ],
                    "id": 8464,
                    "name": "ExpressionStatement",
                    "src": "885:41:32"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8562,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 8465,
                            "name": "Identifier",
                            "src": "932:8:32"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10074,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 8466,
                                "name": "Identifier",
                                "src": "941:3:32"
                              }
                            ],
                            "id": 8467,
                            "name": "MemberAccess",
                            "src": "941:10:32"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8417,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 8468,
                            "name": "Identifier",
                            "src": "953:3:32"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8419,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 8469,
                            "name": "Identifier",
                            "src": "958:6:32"
                          }
                        ],
                        "id": 8470,
                        "name": "FunctionCall",
                        "src": "932:33:32"
                      }
                    ],
                    "id": 8471,
                    "name": "ExpressionStatement",
                    "src": "932:33:32"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 8423
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "74727565",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "true"
                        },
                        "id": 8472,
                        "name": "Literal",
                        "src": "978:4:32"
                      }
                    ],
                    "id": 8473,
                    "name": "Return",
                    "src": "971:11:32"
                  }
                ],
                "id": 8474,
                "name": "Block",
                "src": "677:310:32"
              }
            ],
            "id": 8475,
            "name": "FunctionDefinition",
            "src": "608:379:32"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "balanceOf",
              "payable": false,
              "scope": 8488,
              "stateMutability": "view",
              "superFunction": 8545,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 8487,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 8476,
                        "name": "ElementaryTypeName",
                        "src": "1208:7:32"
                      }
                    ],
                    "id": 8477,
                    "name": "VariableDeclaration",
                    "src": "1208:14:32"
                  }
                ],
                "id": 8478,
                "name": "ParameterList",
                "src": "1207:16:32"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "balance",
                      "scope": 8487,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 8479,
                        "name": "ElementaryTypeName",
                        "src": "1245:7:32"
                      }
                    ],
                    "id": 8480,
                    "name": "VariableDeclaration",
                    "src": "1245:15:32"
                  }
                ],
                "id": 8481,
                "name": "ParameterList",
                "src": "1244:17:32"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 8481
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8405,
                              "type": "mapping(address => uint256)",
                              "value": "balances"
                            },
                            "id": 8482,
                            "name": "Identifier",
                            "src": "1275:8:32"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8477,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 8483,
                            "name": "Identifier",
                            "src": "1284:6:32"
                          }
                        ],
                        "id": 8484,
                        "name": "IndexAccess",
                        "src": "1275:16:32"
                      }
                    ],
                    "id": 8485,
                    "name": "Return",
                    "src": "1268:23:32"
                  }
                ],
                "id": 8486,
                "name": "Block",
                "src": "1262:34:32"
              }
            ],
            "id": 8487,
            "name": "FunctionDefinition",
            "src": "1189:107:32"
          }
        ],
        "id": 8488,
        "name": "ContractDefinition",
        "src": "180:1119:32"
      }
    ],
    "id": 8489,
    "name": "SourceUnit",
    "src": "0:1300:32"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-05-01T21:37:41.253Z"
}
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, BigNumberish, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../common';
import type { GenerateNft, GenerateNftInterface } from '../GenerateNft';

const _abi = [
  {
    inputs: [
      {
        internalType: 'string',
        name: 'ipfsGateway',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'ipfsHash',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'assetsJson',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'numElements',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'generateImage',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'getDataUri',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'image',
            type: 'string',
          },
          {
            internalType: 'string[]',
            name: 'atributes',
            type: 'string[]',
          },
        ],
        internalType: 'struct GenerateNft.TokenImage',
        name: 'tokenImage',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getNames',
    outputs: [
      {
        internalType: 'string[]',
        name: '',
        type: 'string[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405260006005553480156200001657600080fd5b5060405162003832380380620038328339810160408190526200003991620016e0565b83516200004e90600390602087019062001583565b5082516200006490600490602086019062001583565b506200007182826200007b565b50505050620018e6565b60008060606200009785856200025060201b620004d71760201c565b91945090925090506001805b8251811015620002475760006200010788858481518110620000c957620000c9620018ba565b602002602001015160200151868581518110620000ea57620000ea620018ba565b60200260200101516060015162000b3c60201b62000d0e1760201c565b8051909150156200015857600180548082018255600091909152815162000156917fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60190602084019062001583565b505b83516200016783600162001779565b101562000220576000620001c589866200018386600162001779565b81518110620001965762000196620018ba565b60200260200101516020015187866001620001b2919062001779565b81518110620000ea57620000ea620018ba565b90506000806000620001e484600462000c1c60201b62000ddb1760201c565b60408051606081018252938452602080850193845284820192835260008c81529081905220925183559051600183015551600290910155505050505b826200022c816200184d565b935050508060056200023f919062001779565b9050620000a3565b50505050505050565b6000606060008085905060006200028160405180606001604052806000815260200160008152602001600081525090565b6200028c8762000d2d565b602082015190965090915060009081620002d66040805160c08101909152806000815260006020820181905260408201819052606082018190526080820181905260a09091015290565b86518551101562000b2457600087866000015181518110620002fc57620002fc620018ba565b01602001516001600160f81b0319169050607b60f81b8114806200032d5750605b60f81b6001600160f81b03198216145b156200043a57836200033f816200184d565b94506200034f9050868b62000e03565b909750915086620003715750600399506000975062000b359650505050505050565b856040015160001914620003ba5789866040015181518110620003985762000398620018ba565b602002602001015160a0018051809190620003b3906200186b565b60ff169052505b607b60f81b6001600160f81b0319821614620003d8576002620003db565b60015b82906004811115620003f157620003f1620018a4565b90816004811115620004075762000407620018a4565b9052508551602080840191909152600160408401819052908701516200042e9190620017b6565b60408701525062000b0d565b607d60f81b6001600160f81b031982161480620004645750605d60f81b6001600160f81b03198216145b1562000680576000607d60f81b6001600160f81b03198316146200048a5760026200048d565b60015b9050600060018860200151620004a49190620017b6565b94505b8b8581518110620004bc57620004bc620018ba565b6020026020010151935083604001518015620004da57508360800151155b156200059a57816004811115620004f557620004f5620018a4565b845160048111156200050b576200050b620018a4565b146200052a575060019b506000995062000b3598505050505050505050565b600019604089015287516200054190600162001779565b8c8681518110620005565762000556620018ba565b6020026020010151606001818152505060018c86815181106200057d576200057d620018ba565b6020908102919091010151901515608090910152506001620005af565b84620005a681620017f6565b955050620004a7565b80620005ce575060019b506000995062000b3598505050505050505050565b841562000630578b8581518110620005ea57620005ea620018ba565b60200260200101519350836040015180156200060857508360800151155b156200061b576040880185905262000630565b846200062781620017f6565b955050620005ce565b8462000677578b85815181106200064b576200064b620018ba565b60200260200101519350836040015180156200066957508360800151155b156200067757604088018590525b50505062000b0d565b601160f91b6001600160f81b0319821614156200072157620006a4868b8a62000ef4565b94508415620006c257509298506000965062000b3595505050505050565b83620006ce816200184d565b9450508560400151600019146200071a5789866040015181518110620006f857620006f8620018ba565b602002602001015160a001805180919062000713906200186b565b60ff169052505b5062000b0d565b600160fd1b6001600160f81b0319821614806200074b5750601160f81b6001600160f81b03198216145b80620007645750600960f91b6001600160f81b03198216145b806200077d5750600560fa1b6001600160f81b03198216145b156200078a575062000b0d565b601d60f91b6001600160f81b031982161415620007b457600186602001516200042e9190620017b6565b600b60fa1b6001600160f81b0319821614156200096f578560400151600019141580156200081b575060028a876040015181518110620007f857620007f8620018ba565b6020026020010151600001516004811115620008185762000818620018a4565b14155b801562000861575060018a8760400151815181106200083e576200083e620018ba565b60200260200101516000015160048111156200085e576200085e620018a4565b14155b156200071a57600186602001516200087a9190620017b6565b92505b60028a8481518110620008945762000894620018ba565b6020026020010151600001516004811115620008b457620008b4620018a4565b1480620008f5575060018a8481518110620008d357620008d3620018ba565b6020026020010151600001516004811115620008f357620008f3620018a4565b145b156200095a57898381518110620009105762000910620018ba565b6020026020010151604001518015620009475750898381518110620009395762000939620018ba565b602002602001015160800151155b156200095a57604086018390526200071a565b826200096681620017f6565b9350506200087d565b600360fc1b6001600160f81b03198216108015906200099c5750603960f81b6001600160f81b0319821611155b80620009b55750602d60f81b6001600160f81b03198216145b80620009ce5750603360f91b6001600160f81b03198216145b80620009e75750601d60fa1b6001600160f81b03198216145b8062000a005750603760f91b6001600160f81b03198216145b1562000ac15785604001516000191462000ab4578986604001518151811062000a2d5762000a2d620018ba565b602002602001015191506001600481111562000a4d5762000a4d620018a4565b8251600481111562000a635762000a63620018a4565b148062000a97575060038251600481111562000a835762000a83620018a4565b14801562000a97575060a082015160ff1615155b1562000ab45750600199506000975062000b359650505050505050565b620006a4868b8a62001205565b600160fd1b6001600160f81b031982161080159062000aee5750603f60f91b6001600160f81b0319821611155b1562000b0b5750600199506000975062000b359650505050505050565b505b84518562000b1b826200184d565b905250620002d6565b505050506020015160009550925050505b9250925092565b606083600062000b4d8585620017b6565b6001600160401b0381111562000b675762000b67620018d0565b6040519080825280601f01601f19166020018201604052801562000b92576020820181803683370190505b509050845b8481101562000c105782818151811062000bb55762000bb5620018ba565b01602001516001600160f81b0319168262000bd18884620017b6565b8151811062000be45762000be4620018ba565b60200101906001600160f81b031916908160001a9053508062000c07816200184d565b91505062000b97565b509150505b9392505050565b6000806000806000606062000c3d88886200025060201b620004d71760201c565b80945081935082955050505062000c9b62000c8a898360018151811062000c685762000c68620018ba565b60200260200101516020015184600181518110620000ea57620000ea620018ba565b620013e660201b62000ecc1760201c565b955062000cde62000c8a898360028151811062000cbc5762000cbc620018ba565b60200260200101516020015184600281518110620000ea57620000ea620018ba565b945062000d2162000c8a898360038151811062000cff5762000cff620018ba565b60200260200101516020015184600381518110620000ea57620000ea620018ba565b93505050509250925092565b62000d5260405180606001604052806000815260200160008152602001600081525090565b606060006040518060600160405280600081526020016000815260200160001981525090506000846001600160401b0381111562000d945762000d94620018d0565b60405190808252806020026020018201604052801562000df657816020015b6040805160c08101825260008082526020808301829052928201819052606082018190526080820181905260a0820152825260001990920191018162000db35790505b5091959194509092505050565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101829052825184602001511062000e79576000836001855162000e549190620017b6565b8151811062000e675762000e67620018ba565b60200260200101519150915062000eed565b6040805160c08101825260008082526020808301829052928201819052606082018190526080820181905260a082015290850151845182918691811062000ec45762000ec4620018ba565b602002602001018190525084602001805180919062000ee3906200184d565b9052506001925090505b9250929050565b82516000908162000f356040805160c08101909152806000815260006020820181905260408201819052606082018190526080820181905260a09091015290565b86518762000f43826200184d565b9052505b845187511015620011f75760008588600001518151811062000f6d5762000f6d620018ba565b01602001516001600160f81b0319169050601160f91b81141562000fda5762000f97888862000e03565b90935091508262000fb057505050845250600362000c15565b62000fcc82600362000fc487600162001779565b8b51620013fa565b600094505050505062000c15565b605c60f882901c14801562000ffd57508551885162000ffb90600162001779565b105b15620011de5787518862001011826200184d565b9052508751865187919081106200102c576200102c620018ba565b6020910101516001600160f81b031916601160f91b148062001079575085886000015181518110620010625762001062620018ba565b6020910101516001600160f81b031916602f60f81b145b80620010b0575085886000015181518110620010995762001099620018ba565b6020910101516001600160f81b031916601760fa1b145b80620010e7575085886000015181518110620010d057620010d0620018ba565b6020910101516001600160f81b031916603360f91b145b806200111e575085886000015181518110620011075762001107620018ba565b6020910101516001600160f81b031916603960f91b145b80620011555750858860000151815181106200113e576200113e620018ba565b6020910101516001600160f81b031916603760f91b145b806200118c575085886000015181518110620011755762001175620018ba565b6020910101516001600160f81b031916603160f91b145b80620011c3575085886000015181518110620011ac57620011ac620018ba565b6020910101516001600160f81b031916601d60fa1b145b15620011d05750620011e0565b505050845250600162000c15565b505b865187620011ee826200184d565b90525062000f47565b505084525060029392505050565b825160009081908180620012496040805160c08101909152806000815260006020820181905260408201819052606082018190526080820181905260a09091015290565b8651895110156200137057868960000151815181106200126d576200126d620018ba565b01602001516001600160f81b0319169250600160fd1b8314806200129e5750600960f81b6001600160f81b03198416145b80620012b75750600560f91b6001600160f81b03198416145b80620012d05750600d60f81b6001600160f81b03198416145b80620012e95750600b60fa1b6001600160f81b03198416145b80620013025750607d60f81b6001600160f81b03198416145b806200131b5750605d60f81b6001600160f81b03198416145b156200132b576001945062001370565b602060f884901c1080620013435750607f60f884901c115b1562001359575050508552506001905062000c15565b88518962001367826200184d565b90525062001249565b8462001386575050508552506002905062000c15565b62001392898962000e03565b909250905081620013ad575050508552506003905062000c15565b620013c6816004868c60000151620013fa60201b60201c565b885189620013d482620017f6565b90525060009998505050505050505050565b6000620013f4828262001452565b92915050565b83836004811115620014105762001410620018a4565b90816004811115620014265762001426620018a4565b90525060208401919091526001604084018190526060840191909152608083015250600060a090910152565b6000828180805b83518160ff16101562001578576030848260ff1681518110620014805762001480620018ba565b016020015160f81c10801590620014b757506039848260ff1681518110620014ac57620014ac620018ba565b016020015160f81c11155b1562001534578115620014e05785620014d05762001578565b85620014dc81620017f6565b9650505b620014ed600a8462001794565b92506030848260ff1681518110620015095762001509620018ba565b01602001516200151d919060f81c620017d0565b6200152c9060ff168462001779565b925062001563565b838160ff16815181106200154c576200154c620018ba565b60209101015160f81c602e14156200156357600191505b806200156f816200186b565b91505062001459565b509095945050505050565b828054620015919062001810565b90600052602060002090601f016020900481019282620015b5576000855562001600565b82601f10620015d057805160ff191683800117855562001600565b8280016001018555821562001600579182015b8281111562001600578251825591602001919060010190620015e3565b506200160e92915062001612565b5090565b5b808211156200160e576000815560010162001613565b600082601f8301126200163b57600080fd5b81516001600160401b0380821115620016585762001658620018d0565b604051601f8301601f19908116603f01168101908282118183101715620016835762001683620018d0565b81604052838152602092508683858801011115620016a057600080fd5b600091505b83821015620016c45785820183015181830184015290820190620016a5565b83821115620016d65760008385830101525b9695505050505050565b60008060008060808587031215620016f757600080fd5b84516001600160401b03808211156200170f57600080fd5b6200171d8883890162001629565b955060208701519150808211156200173457600080fd5b620017428883890162001629565b945060408701519150808211156200175957600080fd5b50620017688782880162001629565b606096909601519497939650505050565b600082198211156200178f576200178f6200188e565b500190565b6000816000190483118215151615620017b157620017b16200188e565b500290565b600082821015620017cb57620017cb6200188e565b500390565b600060ff821660ff841680821015620017ed57620017ed6200188e565b90039392505050565b6000816200180857620018086200188e565b506000190190565b600181811c908216806200182557607f821691505b602082108114156200184757634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156200186457620018646200188e565b5060010190565b600060ff821660ff8114156200188557620018856200188e565b60010192915050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b611f3c80620018f66000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80636139955214610046578063a75525761461006f578063cd838f0f14610084575b600080fd5b61005961005436600461194a565b610099565b6040516100669190611c85565b60405180910390f35b610077610235565b6040516100669190611c72565b61008c6103fe565b6040516100669190611c10565b60408051808201909152606080825260208201526000828152600260205260409081902081518083019092528054829082906100d490611dd4565b80601f016020809104026020016040519081016040528092919081815260200182805461010090611dd4565b801561014d5780601f106101225761010080835404028352916020019161014d565b820191906000526020600020905b81548152906001019060200180831161013057829003601f168201915b5050505050815260200160018201805480602002602001604051908101604052809291908181526020016000905b8282101561022757838290600052602060002001805461019a90611dd4565b80601f01602080910402602001604051908101604052809291908181526020018280546101c690611dd4565b80156102135780601f106101e857610100808354040283529160200191610213565b820191906000526020600020905b8154815290600101906020018083116101f657829003601f168201915b50505050508152602001906001019061017b565b505050915250909392505050565b6001805460609160009161024891611d08565b67ffffffffffffffff81111561026057610260611eb0565b60405190808252806020026020018201604052801561029357816020015b606081526020019060019003908161027e5790505b50905060015b600180546102a691611d08565b8110156103c4576000818152602081815260408083208151606081018352815480825260018301548286015260029092015481840152600554925190949391926103189242923392910192835260609190911b6bffffffffffffffffffffffff19166020830152603482015260540190565b6040516020818303038152906040528051906020012060001c61033b9190611e44565b905060036004600161034d8187611d53565b8154811061035d5761035d611e9a565b9060005260206000200161037084610edf565b6040516020016103839493929190611ae5565b6040516020818303038152906040528484815181106103a4576103a4611e9a565b6020026020010181905250505080806103bc90611e09565b915050610299565b5060006103f76103d383610fe5565b6040516020016103e39190611b36565b604051602081830303815290604052611049565b9392505050565b60606001805480602002602001604051908101604052809291908181526020016000905b828210156104ce57838290600052602060002001805461044190611dd4565b80601f016020809104026020016040519081016040528092919081815260200182805461046d90611dd4565b80156104ba5780601f1061048f576101008083540402835291602001916104ba565b820191906000526020600020905b81548152906001019060200180831161049d57829003601f168201915b505050505081526020019060010190610422565b50505050905090565b60006060600080859050600061050760405180606001604052806000815260200160008152602001600081525090565b6105108761119d565b6020820151909650909150600090816105596040805160c08101909152806000815260006020820181905260408201819052606082018190526080820181905260a09091015290565b865185511015610cf65760008786600001518151811061057b5761057b611e9a565b01602001516001600160f81b0319169050607b60f81b8114806105ab5750605b60f81b6001600160f81b03198216145b1561069f57836105ba81611e09565b9450506105c7868b61126e565b9097509150866105e757506003995060009750610d079650505050505050565b85604001516000191461062a578986604001518151811061060a5761060a611e9a565b602002602001015160a001805180919061062390611e24565b60ff169052505b607b60f81b6001600160f81b0319821614610646576002610649565b60015b8290600481111561065c5761065c611e84565b9081600481111561066f5761066f611e84565b9052508551602080840191909152600160408401819052908701516106949190611d53565b604087015250610ce2565b607d60f81b6001600160f81b0319821614806106c85750605d60f81b6001600160f81b03198216145b156108b3576000607d60f81b6001600160f81b03198316146106eb5760026106ee565b60015b90506000600188602001516107039190611d53565b94505b8b858151811061071857610718611e9a565b602002602001015193508360400151801561073557508360800151155b156107e35781600481111561074c5761074c611e84565b8451600481111561075f5761075f611e84565b1461077c575060019b5060009950610d0798505050505050505050565b60001960408901528751610791906001611d08565b8c86815181106107a3576107a3611e9a565b6020026020010151606001818152505060018c86815181106107c7576107c7611e9a565b60209081029190910101519015156080909101525060016107f5565b846107ed81611dbd565b955050610706565b80610812575060019b5060009950610d0798505050505050505050565b841561086a578b858151811061082a5761082a611e9a565b602002602001015193508360400151801561084757508360800151155b15610858576040880185905261086a565b8461086281611dbd565b955050610812565b846108ab578b858151811061088157610881611e9a565b602002602001015193508360400151801561089e57508360800151155b156108ab57604088018590525b505050610ce2565b601160f91b6001600160f81b031982161415610946576108d4868b8a611353565b945084156108f0575092985060009650610d0795505050505050565b836108fa81611e09565b945050856040015160001914610940578986604001518151811061092057610920611e9a565b602002602001015160a001805180919061093990611e24565b60ff169052505b50610ce2565b600160fd1b6001600160f81b03198216148061096f5750601160f81b6001600160f81b03198216145b806109875750600960f91b6001600160f81b03198216145b8061099f5750600560fa1b6001600160f81b03198216145b156109aa5750610ce2565b601d60f91b6001600160f81b0319821614156109d157600186602001516106949190611d53565b600b60fa1b6001600160f81b031982161415610b6057856040015160001914158015610a30575060028a876040015181518110610a1057610a10611e9a565b6020026020010151600001516004811115610a2d57610a2d611e84565b14155b8015610a6f575060018a876040015181518110610a4f57610a4f611e9a565b6020026020010151600001516004811115610a6c57610a6c611e84565b14155b156109405760018660200151610a859190611d53565b92505b60028a8481518110610a9c57610a9c611e9a565b6020026020010151600001516004811115610ab957610ab9611e84565b1480610af3575060018a8481518110610ad457610ad4611e9a565b6020026020010151600001516004811115610af157610af1611e84565b145b15610b4e57898381518110610b0a57610b0a611e9a565b6020026020010151604001518015610b3d5750898381518110610b2f57610b2f611e9a565b602002602001015160800151155b15610b4e5760408601839052610940565b82610b5881611dbd565b935050610a88565b600360fc1b6001600160f81b0319821610801590610b8c5750603960f81b6001600160f81b0319821611155b80610ba45750602d60f81b6001600160f81b03198216145b80610bbc5750603360f91b6001600160f81b03198216145b80610bd45750601d60fa1b6001600160f81b03198216145b80610bec5750603760f91b6001600160f81b03198216145b15610c9957856040015160001914610c8e5789866040015181518110610c1457610c14611e9a565b6020026020010151915060016004811115610c3157610c31611e84565b82516004811115610c4457610c44611e84565b1480610c735750600382516004811115610c6057610c60611e84565b148015610c73575060a082015160ff1615155b15610c8e57506001995060009750610d079650505050505050565b6108d4868b8a611628565b600160fd1b6001600160f81b0319821610801590610cc55750603f60f91b6001600160f81b0319821611155b15610ce057506001995060009750610d079650505050505050565b505b845185610cee82611e09565b905250610559565b505050506020015160009550925050505b9250925092565b6060836000610d1d8585611d53565b67ffffffffffffffff811115610d3557610d35611eb0565b6040519080825280601f01601f191660200182016040528015610d5f576020820181803683370190505b509050845b84811015610dd157828181518110610d7e57610d7e611e9a565b01602001516001600160f81b03191682610d988884611d53565b81518110610da857610da8611e9a565b60200101906001600160f81b031916908160001a90535080610dc981611e09565b915050610d64565b5095945050505050565b60008060008060006060610def88886104d7565b809450819350829550505050610e4a610e458983600181518110610e1557610e15611e9a565b60200260200101516020015184600181518110610e3457610e34611e9a565b602002602001015160600151610d0e565b610ecc565b9550610e85610e458983600281518110610e6657610e66611e9a565b60200260200101516020015184600281518110610e3457610e34611e9a565b9450610ec0610e458983600381518110610ea157610ea1611e9a565b60200260200101516020015184600381518110610e3457610e34611e9a565b93505050509250925092565b6000610ed98260006117e6565b92915050565b606081610f035750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610f2d5780610f1781611e09565b9150610f269050600a83611d20565b9150610f07565b60008167ffffffffffffffff811115610f4857610f48611eb0565b6040519080825280601f01601f191660200182016040528015610f72576020820181803683370190505b5090505b8415610fdd57610f87600183611d53565b9150610f94600a86611e44565b610f9f906030611d08565b60f81b818381518110610fb457610fb4611e9a565b60200101906001600160f81b031916908160001a905350610fd6600a86611d20565b9450610f76565b949350505050565b606060005b8251811015611043578183828151811061100657611006611e9a565b602002602001015160405160200161101f929190611a29565b6040516020818303038152906040529150808061103b90611e09565b915050610fea565b50919050565b606081516000141561106957505060408051602081019091526000815290565b6000604051806060016040528060408152602001611ec760409139905060006003845160026110989190611d08565b6110a29190611d20565b6110ad906004611d34565b67ffffffffffffffff8111156110c5576110c5611eb0565b6040519080825280601f01601f1916602001820160405280156110ef576020820181803683370190505b509050600182016020820185865187015b8082101561115b576003820191508151603f8160121c168501518453600184019350603f81600c1c168501518453600184019350603f8160061c168501518453600184019350603f8116850151845350600183019250611100565b5050600386510660018114611177576002811461118a57611192565b603d6001830353603d6002830353611192565b603d60018303535b509195945050505050565b6111c160405180606001604052806000815260200160008152602001600081525090565b6060600060405180606001604052806000815260200160008152602001600019815250905060008467ffffffffffffffff81111561120157611201611eb0565b60405190808252806020026020018201604052801561126157816020015b6040805160c08101825260008082526020808301829052928201819052606082018190526080820181905260a0820152825260001990920191018161121f5790505b5091959194509092505050565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905282518460200151106112dd57600083600185516112bc9190611d53565b815181106112cc576112cc611e9a565b60200260200101519150915061134c565b6040805160c08101825260008082526020808301829052928201819052606082018190526080820181905260a082015290850151845182918691811061132557611325611e9a565b602002602001018190525084602001805180919061134290611e09565b9052506001925090505b9250929050565b8251600090816113936040805160c08101909152806000815260006020820181905260408201819052606082018190526080820181905260a09091015290565b86518761139f82611e09565b9052505b84518751101561161a576000858860000151815181106113c5576113c5611e9a565b01602001516001600160f81b0319169050601160f91b811415611428576113ec888861126e565b9093509150826114035750505084525060036103f7565b61141b826003611414876001611d08565b8b516118f8565b60009450505050506103f7565b605c60f882901c148015611448575085518851611446906001611d08565b105b156116045787518861145982611e09565b90525087518651879190811061147157611471611e9a565b6020910101516001600160f81b031916601160f91b14806114ba5750858860000151815181106114a3576114a3611e9a565b6020910101516001600160f81b031916602f60f81b145b806114ed5750858860000151815181106114d6576114d6611e9a565b6020910101516001600160f81b031916601760fa1b145b8061152057508588600001518151811061150957611509611e9a565b6020910101516001600160f81b031916603360f91b145b8061155357508588600001518151811061153c5761153c611e9a565b6020910101516001600160f81b031916603960f91b145b8061158657508588600001518151811061156f5761156f611e9a565b6020910101516001600160f81b031916603760f91b145b806115b95750858860000151815181106115a2576115a2611e9a565b6020910101516001600160f81b031916603160f91b145b806115ec5750858860000151815181106115d5576115d5611e9a565b6020910101516001600160f81b031916601d60fa1b145b156115f75750611606565b50505084525060016103f7565b505b86518761161282611e09565b9052506113a3565b505084525060029392505050565b82516000908190818061166b6040805160c08101909152806000815260006020820181905260408201819052606082018190526080820181905260a09091015290565b865189511015611780578689600001518151811061168b5761168b611e9a565b01602001516001600160f81b0319169250600160fd1b8314806116bb5750600960f81b6001600160f81b03198416145b806116d35750600560f91b6001600160f81b03198416145b806116eb5750600d60f81b6001600160f81b03198416145b806117035750600b60fa1b6001600160f81b03198416145b8061171b5750607d60f81b6001600160f81b03198416145b806117335750605d60f81b6001600160f81b03198416145b156117415760019450611780565b602060f884901c10806117585750607f60f884901c115b1561176c57505050855250600190506103f7565b88518961177882611e09565b90525061166b565b8461179457505050855250600290506103f7565b61179e898961126e565b9092509050816117b757505050855250600390506103f7565b6117c8816004868c600001516118f8565b8851896117d482611dbd565b90525060009998505050505050505050565b6000828180805b83518160ff1610156118ed576030848260ff168151811061181057611810611e9a565b016020015160f81c1080159061184357506039848260ff168151811061183857611838611e9a565b016020015160f81c11155b156118b05781156118665785611858576118ed565b8561186281611dbd565b9650505b611871600a84611d34565b92506030848260ff168151811061188a5761188a611e9a565b016020015161189c919060f81c611d6a565b6118a99060ff1684611d08565b92506118db565b838160ff16815181106118c5576118c5611e9a565b60209101015160f81c602e14156118db57600191505b806118e581611e24565b9150506117ed565b509095945050505050565b8383600481111561190b5761190b611e84565b9081600481111561191e5761191e611e84565b90525060208401919091526001604084018190526060840191909152608083015250600060a090910152565b60006020828403121561195c57600080fd5b5035919050565b6000815180845261197b816020860160208601611d8d565b601f01601f19169290920160200192915050565b8054600090600181811c90808316806119a957607f831692505b60208084108214156119cb57634e487b7160e01b600052602260045260246000fd5b8180156119df57600181146119f057611a1d565b60ff19861689528489019650611a1d565b60008881526020902060005b86811015611a155781548b8201529085019083016119fc565b505084890196505b50505050505092915050565b60008351611a3b818460208801611d8d565b80830190507f3c696d61676520783d223530252220793d22353025222077696474683d22313081526918181110343932b31e9160b11b60208201528351611a8981602a840160208801611d8d565b7f22207374796c653d227472616e73666f726d3a207472616e736c617465282d35602a92909101918201527f303070782c202d35303070782922202f3e000000000000000000000000000000604a820152605b01949350505050565b6000611afa611af4838861198f565b8661198f565b602f60f81b808252611b0f600183018761198f565b9150808252508351611b28816001840160208801611d8d565b016001019695505050505050565b7f3c7376672069643d22746f6b656e222077696474683d2231303030222068656981527f6768743d2231303030222076696577426f783d2230203020313038302031303860208201527f30222066696c6c3d226e6f6e652220786d6c6e733d22687474703a2f2f77777760408201527f2e77332e6f72672f323030302f737667223e3c672069643d22706c616365686f606082015265363232b9111f60d11b608082015260008251611bef816086850160208701611d8d565b691e17b39f1e17b9bb339f60b11b6086939091019283015250609001919050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b82811015611c6557603f19888603018452611c53858351611963565b94509285019290850190600101611c37565b5092979650505050505050565b6020815260006103f76020830184611963565b600060208083528351604082850152611ca16060850182611963565b82860151601f198683038101604088015281518084529293509084019183850190600581901b8501860160005b82811015611cfa5784878303018452611ce8828751611963565b95880195938801939150600101611cce565b509998505050505050505050565b60008219821115611d1b57611d1b611e58565b500190565b600082611d2f57611d2f611e6e565b500490565b6000816000190483118215151615611d4e57611d4e611e58565b500290565b600082821015611d6557611d65611e58565b500390565b600060ff821660ff841680821015611d8457611d84611e58565b90039392505050565b60005b83811015611da8578181015183820152602001611d90565b83811115611db7576000848401525b50505050565b600081611dcc57611dcc611e58565b506000190190565b600181811c90821680611de857607f821691505b6020821081141561104357634e487b7160e01b600052602260045260246000fd5b6000600019821415611e1d57611e1d611e58565b5060010190565b600060ff821660ff811415611e3b57611e3b611e58565b60010192915050565b600082611e5357611e53611e6e565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa2646970667358221220b1840272111d639d081685621c81ea134b111035c2fb77493f9d121dfc750c2164736f6c63430008060033';

type GenerateNftConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GenerateNftConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GenerateNft__factory extends ContractFactory {
  constructor(...args: GenerateNftConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    ipfsGateway: PromiseOrValue<string>,
    ipfsHash: PromiseOrValue<string>,
    assetsJson: PromiseOrValue<string>,
    numElements: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<GenerateNft> {
    return super.deploy(
      ipfsGateway,
      ipfsHash,
      assetsJson,
      numElements,
      overrides || {},
    ) as Promise<GenerateNft>;
  }
  override getDeployTransaction(
    ipfsGateway: PromiseOrValue<string>,
    ipfsHash: PromiseOrValue<string>,
    assetsJson: PromiseOrValue<string>,
    numElements: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(
      ipfsGateway,
      ipfsHash,
      assetsJson,
      numElements,
      overrides || {},
    );
  }
  override attach(address: string): GenerateNft {
    return super.attach(address) as GenerateNft;
  }
  override connect(signer: Signer): GenerateNft__factory {
    return super.connect(signer) as GenerateNft__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GenerateNftInterface {
    return new utils.Interface(_abi) as GenerateNftInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): GenerateNft {
    return new Contract(address, _abi, signerOrProvider) as GenerateNft;
  }
}

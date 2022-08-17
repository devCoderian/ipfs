import bip39 from 'bip39';
import pkg from 'ethereumjs-wallet';
const { hdkey } = pkg;

const mnemonic = 'build slide isolate banner logic purity deputy fiscal coin plate hint wrong';

(async () => {
    const seed = await bip39.mnemonicToSeed(mnemonic);
    const rootKey = hdkey.fromMasterSeed(seed);
    const hardenedKey = rootKey.derivePath("m/44'/60'/0'/0"); //이더리움 개인키 경로

    for(let i =0; i<10; i++){
        const childKey = hardenedKey.deriveChild(i); //값을 조정하여 자식키 생성
        const wallet = childKey.getWallet(); //주소와 개인키를 하나의 쌍으로 가진 객체 가져오기
        const address = wallet.getAddress(); //주소 가져오기
        const privateKey = wallet.getPrivateKey(); //개인키 가져오기 
        console.log(`${i} address: ${address.toString('hex')}`);
        console.log(`${i} privateKey ${privateKey .toString('hex')}`)
    }
})();

/*
childkey 변수에 같은 정보를 전달하면 항상 같은 자식키를 생성한다.
*/

/*
0 address: 56b22c4b5e23e528ec18fd398f87725874204254
1 address: dac102541e8ef1f52452411ce656961a8ddb2fcc
2 address: ac5cef7c0505920fd03433d3814d9751b9f63bff
3 address: 675fdf7642ed5f2ae42797a206dbe80867d9ff20
4 address: aa61d5c239d5fea4122e762b33062fafbcc0d74d
5 address: 488192518d0ed8c7c97c99c46ab71d03aa577081
6 address: 90e4b0a12db9093431f20d3680e1cfbbef89b782
7 address: f29c30410d4fc394e78f15ba55c5713f8dd60171
8 address: 8378893873cf601c39c1f583fa531659803891ab
9 address: 47e34909f91d09167607e7b24c1a9b5cb432fa9a
*/


/*                                                                           hn@hnui-MacBookPro ~ % ganache-cli
Ganache CLI v6.12.2 (ganache-core: 2.13.2)

Available Accounts
==================
(0) 0x56b22C4B5e23E528ec18Fd398f87725874204254 (100 ETH)
(1) 0xdAc102541E8ef1F52452411ce656961A8ddb2FCc (100 ETH)
(2) 0xAC5CeF7C0505920Fd03433D3814d9751B9F63bfF (100 ETH)
(3) 0x675FdF7642Ed5F2aE42797a206DBe80867D9ff20 (100 ETH)
(4) 0xAa61D5C239D5FeA4122e762B33062FaFbcc0d74d (100 ETH)
(5) 0x488192518d0ED8C7c97c99C46AB71d03Aa577081 (100 ETH)
(6) 0x90e4b0A12Db9093431f20d3680E1cfbbeF89B782 (100 ETH)
(7) 0xF29C30410d4FC394E78f15bA55c5713f8DD60171 (100 ETH)
(8) 0x8378893873cF601C39c1F583Fa531659803891aB (100 ETH)
(9) 0x47e34909F91d09167607e7b24c1a9b5cb432Fa9a (100 ETH)

Private Keys
==================
(0) 0xc8d7e69427cdbefe3ef105f89118fa554f3c6a3390609d7936e9c6ee82abb398
(1) 0x9c7d5d99bb6e2fcda95310e697f63444c37df862a6daf3725e05db8b8e5fdb94
(2) 0x8f2e25e73c58c7f3a493b2cfca1c365342f3aca3419bbb0c73c3e9be9a3c82d8
(3) 0xe78485397b2299b9560f2462ce6b952890c7331cf93fbaae3bd6ca4ef32b76e0
(4) 0x75c9e6c176657d5c663e92dacb83076f743e4db2cf0d6279ce446de497d98c11
(5) 0xf73410651a9328418020f4e83c18ffb6cd4072033e94e5c5d9de7a960915ce99
(6) 0x652848c3f640fe0c92b10bfd7299a43f2a44318ef8a2fc5334f82b37b2b47ac7
(7) 0x2f5ce8e7b6ee008dd280a20d1e5305068b9bbb38b866f05e8ec607831bea7d3b
(8) 0x1a4f1b5b18dad796e17f0f6951584cca06841b1b3bde32ed5ff011926033d5cf
(9) 0x51117718f421c1e26e75e303915419ef0110106c0d007376cd85e3c4cdbd3ca4

HD Wallet
==================
Mnemonic:      build slide isolate banner logic purity deputy fiscal coin plate hint wrong
Base HD Path:  m/44'/60'/0'/0/{account_index}

*/
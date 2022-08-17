import bip39 from 'bip39';
import pkg from 'ethereumjs-wallet';
const { hdkey } = pkg;

const mnemonic = 'build slide isolate banner logic purity deputy fiscal coin plate hint wrong';

(async () => {
    const seed = await bip39.mnemonicToSeed(mnemonic);
    const rootKey = hdkey.fromMasterSeed(seed);
    const hardenedKey = rootKey.derivePath("m/44'/60'/0'/0"); //이더리움 개인키 경로
    const childKey = hardenedKey.deriveChild(0); //값을 조정하여 자식키 생성
    const wallet = childKey.getWallet(); //주소와 개인키를 하나의 쌍으로 가진 객체 가져오기
    const address = wallet.getAddress(); //주소 가져오기
    const privateKey = wallet.getPrivateKey(); //개인키 가져오기
    console.log(address);
    console.log(address.toString('hex'));
    console.log(privateKey.toString('hex'));
})();

/*
childkey 변수에 같은 정보를 전달하면 항상 같은 자식키를 생성한다.
*/

/*
<Buffer e8 ae ee 46 12 f8 61 cd 5b 81 d4 ec d0 75 fe 5b 26 54 8c 0b>
e8aeee4612f861cd5b81d4ecd075fe5b26548c0b
*/
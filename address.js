// const Web3 = require('web3');
import Web3 from 'web3';
let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

//개인키와 주소 생성
let createdAddress = web3.eth.accounts.create();
console.log('createdAddress', createdAddress);
/*
createdAddress {
  address: '0x4Da956a20f2a17871427CdBDc5457054ef95cCBf',
  privateKey: '0x17a195266b51c1825b3d53dbbd4cfa8118ebeec3338337b13c8f3b346616d3c5',
  signTransaction: [Function: signTransaction], //트랜잭션 객체를 전달하면 해당 정보를 개인키로 서명 
  sign: [Function: sign],//sign()함수는 데이터를 개인키로 서명
  encrypt: [Function: encrypt] //비밀번호를 인자로 전달받아 ketsore 파일을 생성한다.
}
*/

//개인키 -> 키스토어 파일
let password = 'keystorePassword';
let keystore = createdAddress.encrypt(password);
console.log('keystore', keystore);
/*
 {
  version: 3,
  id: '78de0439-6589-4c1e-aba8-6cfe429c39c0',
  address: 'c59fa83aadacaece99ff5cb1d813dd596fd4dff1',
  crypto: {
    ciphertext: 'a29307d3e250e641155d231175230995d31e0a6c7922672b013c6b22911feebd',
    cipherparams: { iv: 'f559d0eaefc35bdc2a4693d66569a698' },
    cipher: 'aes-128-ctr',
    kdf: 'scrypt',
    kdfparams: {
      dklen: 32,
      salt: '492eba10f3c4f7144543384b1ce48e9c654249e517cfa06599ab7826e6807301',
      n: 8192,
      r: 8,
      p: 1
    },
    mac: '7edb8160409c34cfe63802a932c642399f7c30bfdce0ee50a78d1404f901b08b'
  }
}
*/

//키스토어 파일 복구
let pri = web3.eth.accounts.decrypt(keystore, password);
console.log('pri', pri); //키스토어 파일 복구 가능 => 다시 개인키와 주소로 복구 가능.


/*
pri {
    address: '0xC59fA83aadacAeCe99Ff5cb1d813dd596fD4dFF1',
    privateKey: '0x165e2d4e12ad3d2f6767ea60d61de369e4b0d645f01c0e6a129638cfacad0edf',
    signTransaction: [Function: signTransaction],
    sign: [Function: sign],
    encrypt: [Function: encrypt]
  }
*/
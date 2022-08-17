const IPFS = require('ipfs-api');
const fs = require('fs');

//IPFS 노드 정보
//IPFS 데몬을 실행한 결과에서 'API Server'정보를 입력
const ipfs = new IPFS({
	host: 'localhost',
  port: 5001,
	protocol: 'http'
});

const file = fs.readFileSync('./ipfsTest.txt');
const fileBuffer = new Buffer.from(file);

ipfs.files.add(fileBuffer, (err, f) => {
	console.log(f);
});


// createdAddress {
// 	address: '0x8827e9F5d8b54a62BC1F544A7C6cd042e6f71241',
// 	privateKey: '0xfec26979481c1fb52033e26fecc1d336c550ef460a5ba4dc7714a9c2d1871fcc',
// 	signTransaction: [Function: signTransaction],
// 	sign: [Function: sign],
// 	encrypt: [Function: encrypt]
//   }
//   keystore {
// 	version: 3,
// 	id: '0ca792f2-418a-4eef-be79-c1d500efd1d0',
// 	address: '8827e9f5d8b54a62bc1f544a7c6cd042e6f71241',
// 	crypto: {
// 	  ciphertext: '0df3ba54fea04a9df24edc3b1f35bce5c6af7430e7b395f5a5a0d135c4022231',
// 	  cipherparams: { iv: 'c0d771a20b412d6378c98cbc3713d6ed' },
// 	  cipher: 'aes-128-ctr',
// 	  kdf: 'scrypt',
// 	  kdfparams: {
// 		dklen: 32,
// 		salt: '3f5ce5d43b719459c70269c54ec0f77b82f318f30f9af2d07b494c9c725fac5e',
// 		n: 8192,
// 		r: 8,
// 		p: 1
// 	  },
// 	  mac: 'b29204a44a534b4458c543a506c94bba1690f9d9cdf0c232676f3846d69336ea'
// 	}
//   }
//   pri {
// 	address: '0x8827e9F5d8b54a62BC1F544A7C6cd042e6f71241',
// 	privateKey: '0xfec26979481c1fb52033e26fecc1d336c550ef460a5ba4dc7714a9c2d1871fcc',
// 	signTransaction: [Function: signTransaction],
// 	sign: [Function: sign],
// 	encrypt: [Function: encrypt]
//   }
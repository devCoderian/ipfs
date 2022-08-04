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
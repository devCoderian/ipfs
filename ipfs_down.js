import IpfsAPI from 'ipfs-api';

//IPFS 노드 정보
//IPFS 데몬을 실행한 결과에서 'API Server'정보를 입력
const ipfs = new IpfsAPI({
	host: 'localhost',
  port: 5001,
	protocol: 'http'
});

const hash = 'QmRPx2AA5fc4gUFrqAC4uWt98aTdfBXg2mmHXBbG8Q8j5y';


ipfs.files.get(hash, (err, f) => {
	console.log(f[0].content.toString());
});
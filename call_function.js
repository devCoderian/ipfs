import Web3 from 'web3';

let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
// console.log(web3);

async function main(){
    const CA = '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4'//  배포한 스마트 컨트랙트 주소
	const from = '0xAa61D5C239D5FeA4122e762B33062FaFbcc0d74d' //가나슈 CLI로 생성한 주소
	const pk = '0x75c9e6c176657d5c663e92dacb83076f743e4db2cf0d6279ce446de497d98c11'; //from에 대응하는 개인키
	const ABI =
    [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_text",
                    "type": "string"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "a",
                    "type": "uint256"
                }
            ],
            "name": "errorOccur",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "say",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_text",
                    "type": "string"
                }
            ],
            "name": "setText",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "text",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
//리믹스 또는 트러플로 만든 결과 파일

    //스마트 컨트랙트 객체 생성
    let Contract = new web3.eth.Contract(ABI, CA);

    //스마트 컨트랙트에 정의한 함수 실행
    let bytedata = await Contract.methods.setText("test").encodeABI();
    console.log(bytedata);


	const tx = {
		from,
		to: CA,
		gas: 1000000, //gas만 이더값으로 전송
		gasPrice: 21000000000,
		value: 100000000, //원하는 이더 전송 수량
	};

    // gas gasPrice string
	const account = web3.eth.accounts.privateKeyToAccount(pk); //개인키로 account 객체로 복구
	const signedTx = await account.signTransaction(tx); //개인키로 트랜잭션 서명
	const sentTx = await web3.eth.sendSignedTransaction( //sendSignedTransaction 함수는 서명된 트랜잭션을 노드에 전달한다.
		signedTx.raw || signedTx.rawTransaction
	); //서명된 트랜잭션 이더리움 노드로 전송
	console.log(sentTx);
};

main();

// 0x5d3a1f9d000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000047465737400000000000000000000000000000000000000000000000000000000
// {
//   transactionHash: '0x1836b1c3d1921beb130144a294522bc35fd6cf33f4ab88b946711547fc2c51c0',
//   transactionIndex: 0,
//   blockHash: '0xba479df63244b99d5a30db065e375d8c51300b7392715cb1dd6cc553c68fb0b1',
//   blockNumber: 4,
//   from: '0x56b22c4b5e23e528ec18fd398f87725874204254',
//   to: '0x5b38da6a701c568545dcfcb03fcb875f56beddc4',
//   gasUsed: 21000,
//   cumulativeGasUsed: 21000,
//   contractAddress: null,
//   logs: [],
//   status: true,
//   logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
// }

//가스값 string type이어도 결과 이하 동일

/*
0x5d3a1f9d000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000047465737400000000000000000000000000000000000000000000000000000000
{
  transactionHash: '0xf176ba64dd510e73cb4de7d9ea493a24377102a15526b9116c1e0c123173c292',
  transactionIndex: 0,
  blockHash: '0x4c5aed9a623fefac56e64d0adbe7eb7dd5cf817be14157d894633a3ed27cf04a',
  blockNumber: 6,
  from: '0x56b22c4b5e23e528ec18fd398f87725874204254',
  to: '0x5b38da6a701c568545dcfcb03fcb875f56beddc4',
  gasUsed: 21000,
  cumulativeGasUsed: 21000,
  contractAddress: null,
  logs: [],
  status: true,
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
}
*/
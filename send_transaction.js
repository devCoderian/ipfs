import Web3 from 'web3';

let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
// console.log(web3);
async function main(){
	const from = '0x56b22C4B5e23E528ec18Fd398f87725874204254' //가나슈 CLI로 생성한 주소
	const pk = '0xc8d7e69427cdbefe3ef105f89118fa554f3c6a3390609d7936e9c6ee82abb398'; //from에 대응하는 개인키
	const to = '0x8A232F2Fc1E65ee0ab02B0C44188896602F6CdCa'; //송금주소
	const tx = {
		from,
		to,
		gas: 21000,
		gasPrice: '21000000000',
		value: '100000000', //원하는 이더 전송 수량
	};

	const account = web3.eth.accounts.privateKeyToAccount(pk); //개인키로 account 객체로 복구
	const signedTx = await account.signTransaction(tx); //개인키로 트랜잭션 서명
	const sentTx = await web3.eth.sendSignedTransaction( //sendSignedTransaction 함수는 서명된 트랜잭션을 노드에 전달한다.
		signedTx.raw || signedTx.rawTransaction
	); //서명된 트랜잭션 이더리움 노드로 전송
	console.log(sentTx);
};

main();
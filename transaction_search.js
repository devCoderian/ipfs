//트랜잭션 해시로 트랜잭션 정보 조회
import Web3 from 'web3';
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

async function main(){
    let hash = '0xf333839b98b0797a37d7579f9fbd463a7bbcaa515fde66f8b68a54f19c548115'; //% node data_search.js 에서 발생한 트랜잭션 해시 넣기
    let tx = await web3.eth.getTransaction(hash);
    console.log(tx); 
}

main();

/*
hn@hnui-MacBookPro ipfsTest % node transaction_search.js 
{
  hash: '0xf333839b98b0797a37d7579f9fbd463a7bbcaa515fde66f8b68a54f19c548115',
  nonce: 5,
  blockHash: '0xdc354e3ce5288c42a21f1715bd0c3bf0c610e67f44aebd3902b60280cd8cfe32',
  blockNumber: 12,
  transactionIndex: 0,
  from: '0xAa61D5C239D5FeA4122e762B33062FaFbcc0d74d',
  to: '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4',
  value: '100000000',
  gas: 1000000,
  gasPrice: '21000000000',
  input: '0x',
  v: '0xa96',
  r: '0x95b041e91774b2227360b94a0eef28a9c5edc8c3da8a482eb1a9f417cc9bd1e3',
  s: '0x261da31a2673644e882a3a249ba175820f1a6d385b427cddd499f67be17d6418'
}
*/
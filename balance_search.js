// 이더 보유량 조회
import Web3 from "web3";
let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

async function main(){
    let balance = await web3.eth.getBalance('0xAa61D5C239D5FeA4122e762B33062FaFbcc0d74d');
    console.log(balance);
}

main();
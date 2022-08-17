import Web3 from 'web3';
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
let PK = "0x165e2d4e12ad3d2f6767ea60d61de369e4b0d645f01c0e6a129638cfacad0edf";
let account = web3.eth.accounts.privateKeyToAccount(PK);
console.log(account);

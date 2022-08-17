import Web3 from 'web3';
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

async function main(){
    const CA = "0x4ffedbab1d21d32d355b068976f2290971a7e225" //배포한 주소
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
    const Contract = new web3.eth.Contract(ABI, CA);

    let data = await Contract.methods.say().call();
    console.log(data);
}

main(); 
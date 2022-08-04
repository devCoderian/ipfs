// var ipfsHttpClient = require('ipfs-http-client');
// const fs = require('fs');
// // const ipfs = create('http://localhost:5001')

// const ipfs = IpfsHttpClient.create('http://localhost:5001');

// async function main(){
//     const file = fs.readFileSync('./ipfsTest.txt');
//     // let rst = await ipfs.add(file);
//     const check = await ipfs.add(file);
//     console.log(check);
// }

// main();
import { create } from 'ipfs-http-client';
import fs from 'fs'
// const client = create()
const client = create(new URL('http://127.0.0.1:5001'));
const file = fs.readFileSync('./ipfsTest.txt');
const { cid } = await client.add(file);
console.log(cid);
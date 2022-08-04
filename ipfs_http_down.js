import { create } from 'ipfs-http-client';
// const client = create()
const client = create(new URL('http://127.0.0.1:5001'));

async function main(){
    const chunks = [];
    const path = 'QmRPx2AA5fc4gUFrqAC4uWt98aTdfBXg2mmHXBbG8Q8j5y';
    for await ( const chunk of client.cat(path)){
        chunks.push(chunk);
    }
    console.log(chunks);
    console.log(chunks.toString())
}

main()
console.log('Request data . . .')
const p = new Promise((resolve, reject)=>{
    
    setTimeout(()=>{ // imitation of async request
        console.log('Prepearing data . . .')
        const backendData = {
            server: 'pentagon',
            port: 666,
            status: 'working',
        }
        resolve(backendData);
    },2000)
    
});

p.then((data)=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            data.modifeid = true; // modifeing some data
            resolve(data) // reject(data) to test reject error
        },2000);
    });
      
}).then(clientData => {
    clientData.fromPromise = true;
    console.log('Data recieved', clientData)
    return clientData;
}).then(data=>{
    console.log('Data recieved 2', data)
})
.catch(err => console.error('Error', err)) // error
.finally(()=> console.log('Finally')) // fire anyway when promise done


const sleep = ms => {
    return new Promise( resolve => {
        setTimeout(()=> resolve(), ms)
    })
}

// sleep(2000).then(()=> console.log('after 2 sec'));
// sleep(3000).then(()=> console.log('after 3 sec'));

Promise.all([sleep(2000), sleep(5000)]).then(()=>{
    console.log('All promises') // fire after all  promises from array done
})

Promise.race([sleep(2000), sleep(5000)]).then(()=>{
    console.log('Race promises') // fire after first  promise from array done
})
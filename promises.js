const p = new Promise((resolve, reject)=>{
    console.log('Prepearing data . . .')
    setTimeout(()=>{
        
        const backendData = {
            server: 'pentagon',
            port: 666,
            status: 'working',
        }
        resolve(backendData);
    },2000)
    
});

p.then((data)=>{
    console.log('Resolved data')
    console.log(data)
})
console.log('Start1')
console.log('Start2')



setTimeout(()=>{
    console.log('after 2 sec')
},2000);

console.log('end')

function after5sec(){
    console.log('after 5 sec')
}

setTimeout(after5sec, 5000)
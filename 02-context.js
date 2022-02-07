let hello= ()=>{
    console.log('Hello', this)
}

const person = {
    name: 'Sam',
    age: 45,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function (job, phone){
        console.group(`${this.name } info:`);
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd();
    },
}

const lena = {
    name: 'Olena',
    age: 16
}

person.logInfo.bind(lena, 'Teacher', '9-99-999-99-99')()
person.logInfo.call(lena, 'Teacher', '9-99-999-99-99')
person.logInfo.apply(lena, ['Teacher', '9-99-999-99-99'])

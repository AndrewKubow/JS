const person = {
    name: "Adolf",
    age: 123,
    greet: ()=> {
        console.log('ZH!')
    }
}

Object.prototype.sayYay = ()=> {
    console.log('Yaay');
}

const lena = Object.create(person);
lena.name = 'Olena';

const str = "I am string";
const str1 =  new String("I am string");

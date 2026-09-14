function greet(name:string):string{
    return `hello ${name}`;
}
let name:string="thushar";
console.log(greet(name));

let a=Math.random()>0.5?10:'5';

let userName:string='thshetty';
let apiStatus:'pending'| 'success' | 'error'='pending';

let orders=['28','54','95','68'];

let currentOrder :string |undefined;

for(let order of orders){
    if(order === '54'){
        currentOrder=order
    }
}
console.log(currentOrder);

function getChai(kind:string| number){
    if(typeof kind === 'string'){
        return `hello ${kind}`;//kind.all string methods
    }
    return kind //kind. all number methods...
}

class Dog{
    eat(){
        return 'Dog is eating'
    }
}
class Cat{
    eat(){
        return 'cat is eating'
    }
}

function eating(animal : Dog | Cat){
    if(animal instanceof Dog){
        return animal.eat(); // u have narrowed down the type
    }
}

let res:any="42";

let NumLength:number=(res as string).length;

type Book={
    title:string,
}

let bookString='{"title":"The Great Gatsby"}';

let book=JSON.parse(bookString) as Book;

console.log(book.title);
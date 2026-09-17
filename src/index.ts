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

let value:any;

value="thushar"
value=[1,2,3];
value=2.5;
value.toUpperCase();

let newValue:unknown;

newValue="thushar"
newValue=[1,2,3];
newValue=2.5;
if(typeof newValue === 'string'){
newValue.toUpperCase();
}

const data:unknown="thejijDhwsdclknjs";
const strData:string=data as string;

interface Cupsize{
    size:"small" |"large"
}

class chai implements Cupsize{
    size: "small" | "large"="small"
}

type person1={height:number}
type person2={weight:number}

type person=person1 & person2;

const thushar:person={
    height:5.8,
    weight:70
}

type user={
    username:string,
    bio?:string
}
const u1:user={
    username:"thushar"
}
const u2:user={username:"thushar",bio:"I am a software engineer"}


type config={
    readonly appName:string,
    version:number
}
const config1:config={
    appName:"MyApp",
    version:1.0
}
//config1.appName="NewApp"; // Error: Cannot assign to 'appName' because it is a read-only property.
config1.version=2.0; // Allowed: 'version' is not read-only


let tea:{
    name:string,
    price:number,
    isHot:boolean
    ingredients:string[]
}={
    name:"Green Tea",
    price:2.5,
    isHot:true,
    ingredients:["Green tea leaves","Water"]//only string array is allowed
}

type  Personn={name:string};

const p1={name:"thushar",age:25};
const ps:Personn=p1; // allowed because p1 has at least the properties of Personn 


type chai1={
    name:string,
    price:number,
    isHot:boolean
}
const updateChai=(updates:Partial<chai1>)=>{
    //updates can have any subset of properties of chai1    
    console.log(updates);
    }

updateChai({name:"Black Tea"});


type chaiOrder={
    name?:string,
    price?:number,
}
const placeOrder=(order:Required<chaiOrder>)=>{
    //order must have all properties of chaiOrder
    console.log(order);
}

placeOrder({name:"Black Tea",price:3.0});

//pick

type chaiDetails={
    name:string,
    price:number,
    isHot:boolean,
    ingredients:string[]
}
//pick allows you to create a new type by selecting specific properties from an existing type 
type chaiSummary=Pick<chaiDetails,"name"|"price">;

const summary:chaiSummary={
    name:"Green Tea",
    price:2.5
}

function justFunction(name:string):string{
    return `Hello ${name}`;
}

//Array
const names:string[]=["thushar"];

const rating:Array<number>=[1,2.5];

type chaiii={
    name:string;
    price:number
}
const menu:chaiii[]=[
    {name:"thushar",price:25}
]

const cities:readonly string[]=["Mumbai"];
//not possible beacuse it is reaconly
// cities.push("pune")

const table:number[][]=[[1,2,3],[4,5,6]];

let userInfo:[string,number,boolean?];

userInfo=["thushar",10];

const chaiItems:[name:string,price:number]=["thi",20]

enum CHAITYPE{
    MASALA = "MASALA",
    GINGER = "GINGER"
}

console.log(CHAITYPE.MASALA);
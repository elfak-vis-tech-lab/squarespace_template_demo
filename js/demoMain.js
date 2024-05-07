console.log("Hello world");
// komentari
/*
multiline
komentari
*/


// TIPOVI PODATAKA
var a=5.4;
console.log(typeof(a));
console.log("Hello",'hello',typeof('a'));
/**
 * number
 * string
 * boolean
 * (symbol)
 * undefined
 * object
 */

// var
console.log(b);
var b=5;
console.log(b);

// let
// console.log(c); // ERROR
let c=7;
console.log(c);
c=8;
console.log(c);


// const
const d=9;
console.log(d);
// d=10; //ERROR

console.clear()

// Aritmetički operatori
console.log(
    a+b
)

// Operacije nad operandima različitih tipova
a=3;
b='5';
console.log(a+b);
console.log(a-b);
console.log(a+ +b);
console.log(parseInt(a)+parseInt(b));

console.clear();

// Dvostruki i trostruki operatori poređenja
// == !=  // izbegavati
// console.log(0==0);
// console.log(0=='0');
// console.log(0=='');
// console.log(''=='0');

console.log(0 === 0);
console.log(0 === '0');
console.log(0 === '');
console.log('' === '0');

console.clear();

// FUNKCIJE
function negate(a){
    return -a;
}
console.log(negate(5));

const negate2 = function (a){
    return -a;
}
console.log(negate2(6));

const negate3=(a)=>{
    return -a;
}

const negate4=a=>-a;
console.log(negate4(8));

const add=(a,b)=>a+b;
console.log(add(4,5));

function specialAdd(a,b,transform){
    return transform(a)+transform(b);
}
console.log(specialAdd(4,5,negate))

console.clear();

// PETLJE
let num=0;
while(num<5){
    num++;
    console.log(num);
}

for(let i=7;i<11;i++){
    console.log(i);
}
// console.log(i) // ERROR

console.clear();

// NIZOVI
const arr1=[1,2,3,4,5,4,3,2];
console.log(arr1);
console.log(arr1[4]);
console.log(arr1.length);

function average(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}
console.log(average(arr1));

// map
const arr2 = arr1.map(negate);
console.log(arr2);
console.log(arr1);
console.log(arr1.map(
    x=>x+2
))


// filter
const isGreaterThan3=(x)=>{
    if(x>3)
        return true;
    else
        return false;
}
console.log(arr1.filter(isGreaterThan3))

console.log(arr1.filter(x=>x>3))

console.clear();

// objekti
const person={
    name:'Petar',
    age:25,
    'address':"jkbjr"
}
console.log(person.name);
console.log(person['name']);

// console.log(arr1.map(isGreaterThan3))
// console.log(arr1.filter(negate))
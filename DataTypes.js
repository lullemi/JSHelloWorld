
// Snipplet DataTypes

let data;

//data = true;

//Beispiel Boolean

if (data) {
        console.log("Wert ist wahr");
    } else {
        console.log("Wert ist falsch");
    }


// Beispiel null
    let n = null;

console.log("Null ist " + n);

// Beispiel undefined
let a;

console.log(a+3);

// Beispiel Number

let wert1=3;
let wert2=4;
let wert3=5/4.5;

console.log(wert1);
wert1--;
console.log(wert1);
wert1++;
wert1++;
console.log(wert1);
wert1+=5;
console.log(wert1);

console.log(wert1+wert2);
console.log(wert3++);
console.log(wert3);
console.log(++wert3);


// Beispiel Symbol

let sym1 = Symbol('foo');
let sym2 = Symbol('foo');
console.log(sym1);
console.log(sym1 === sym2);
console.log(String(sym1) === String(sym2));

//Beispiel Object

let myHorse = new Object();
myHorse.colour = 'schwarz';
myHorse.name = 'Fury';

console.log("Mein Pferd ist " + myHorse.colour);
console.log("Mein Pferd heisst " + myHorse.name);


let w1 = "1";
let w2 = 1;

console.log(wert1 == wert2);
console.log(wert1===wert2);





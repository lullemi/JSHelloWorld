let isOK = true;

if(!isOK){
    console.log("richtig");
} else {
    console.log("falsch");
}

let age =5;

if(age >=18){
    console.log("Erwachsener");
} else if(age >=14){
    console.log("Teenager");
} else {
    console.log("Kind");
}

if(age<18 && age>2){
    console.log("das ist richtig");
}

if(age>18 || age >2){
    console.log("das ist auch wahr");
}

// jetzt mit tenary-Operator -> abgekürzte Schreibweise
//  Bedingung ? Ausdruck1: Ausdruck2
age = 5;

age>18 ? console.log("wieder wahr") : console.log("doch falsch");
console.log((age>18) ? "Wahr" : "falsch");

// und noch eine neue abgekürzte Schreibweise

// A C H T U N G    S C H R E I B W E I S E

//KEIN SEMICOLON INNERHALB DES AUSDRUCKS. ANWEISUNGEN WERDEN DURCH KOMMA GETRENNT

let erwachsen;

age>18 ? (
    console.log("endlich über 18"),
    erwachsen=true
) : (
    console.log("doch noch nicht erwachsen"),
    erwachsen=false
)

// und noch eine Steigerung

let first = false,
    second = false,
    access = first ? "kein Zutritt" : second ? "auch kein Zutritt" : "Zutritt erlaubt";

console.log(access);
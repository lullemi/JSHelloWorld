let myName = "Gaby";

console.log(addiere(1,3));



function addiere (a,b){
    let myName = "Tina";
    console.log(myName);
    
    //innerfunction - closures
    function rechneQuadrat(x){
        console.log("in der Funktion rechneQuadrat");
        return x*x;
    }
return rechneQuadrat(a)+rechneQuadrat(b);
}

console.log(addiere(2,3));


console.log(myName);
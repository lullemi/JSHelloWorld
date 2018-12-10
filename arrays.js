//Arrays

let wochentage = ["Montag", "Dienstag", "Mittwoch","Donnerstag", "Freitag"];

ausgabeSchleife(wochentage);

wochentage[1] = "Sonntag";

ausgabeSchleife(wochentage);

function ausgabeSchleife (parm1) {
    for(let i=0;i<=(parm1.length-1);i++)
    {
        console.log(parm1[i])
    };
}

let teams = [["Schalke",33], ["Dortmund",45], ["Leverkusen",24]];

//Ausgabe Schalke
console.log(teams[0][0]);
//Ausgabe 45
console.log(teams[1][1]);
//Ausgabe Leverkusen
console.log(teams[2][0]);

console.log(teams);

teams[2][0] = "Bielefeld";

console.log(teams);

wochentage.push("Samstag");
wochentage.push("Sonntag");
console.log(wochentage);
wochentage.pop();
console.log(wochentage);
// wochentage.join(" "); DIESE ZEILE FUNKTIONIERT SO NICHT
console.log(wochentage.join(" "));

let outputHtml = document.getElementById('treno');


// chiediamo quqnti km vuole perdorrere 

let km = prompt("che numero di km vuoi percorrere")

// chiediamo età

let age = prompt("Inserisci la tua data di nascita")

console.log (km)

console.log (age)


// il prezzo del biglietto è definito in base ai km (0.21 € al km)



let tariffa = 0.21;
let prezzo = km * 0.21;

prezzo = prezzo.toFixed(2);

console.log (prezzo)


// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.



if (age < 18) {
    console.log("prezzo non scontato: " + prezzo);
    prezzo = prezzo - ((prezzo/100)*20);
    console.log("prezzo scontato20%: " + prezzo);
    outputHtml.innerHTML += `<br/> sconto 20% i minorenni, il prezzo è ${prezzo}`;

    
} else if (age > 65) {
    prezzo = prezzo - ((prezzo/100)*40)
    console.log("prezzo scontato40%: " + prezzo);
    outputHtml.innerHTML += `<br/> sconto 40% per gli over 65, il prezzo è: ${prezzo}`
} else {
    outputHtml.innerHTML += `<br/> prezzo intero, prezzo: ${prezzo}`
}

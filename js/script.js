let outputHtml = document.getElementById('treno');


// chiediamo quqnti km vuole perdorrere 

let km = prompt("che numero di km vuoi percorrere")

// chiediamo età

let age = prompt("Inserisci la tua data di nascita")

console.log (km)

console.log (age)


// il prezzo del biglietto è definito in base ai km (0.21 € al km)



let tariffa = 0.21;
let prezzo = 100 * 0.21;


console.log (prezzo)


// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.



if (age < 18) {
    outputHtml.innerHTML += `<br/> sconto 20% i minorenni`
} else if (age > 65) {
    outputHtml.innerHTML += `<br/> sconto 40% per gli over 65`
} else {
    outputHtml.innerHTML += `<br/> prezzo intero`
}

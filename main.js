
// Prompt di richiesta dati
let Name = prompt ('Digita il tuo nome');
let Surname = prompt ('Digita il tuo cognome');
let Color = prompt('Digita il tuo colore preferito');
let InputNumber = prompt ('Digita un numero');

// Creazione variabile con numero random
let RandomNumber = Math.random() *100;
RandomNumber = Math.floor(RandomNumber);
console.log(RandomNumber);

// Creazione numero per password
let FinalNumber = RandomNumber + Number(InputNumber);

// Creazione variabile password
let Password = Name + Surname + Color + String(FinalNumber);

// Stampa password nella console
console.log(Password);

// Stampa password nella pagina
document.getElementById('psw').innerHTML = Password;

// Prompt di richiesta dati
let Name = prompt ('Digita il tuo nome');
let Surname = prompt ('Digita il tuo cognome');
let Color = prompt('Digita il tuo colore preferito');

// Creazione variabile password
let Password = Name + Surname + Color + '23';

// Stampa password nella console
console.log(Password);

// Stampa password nella pagina
document.getElementById('psw').innerHTML = Password;
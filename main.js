
let Name = prompt ('Digita il tuo nome');
let Surname = prompt ('Digita il tuo cognome');
let Color = prompt('Digita il tuo colore preferito');

let Password = Name + Surname + Color + '23';


console.log(Password);

document.getElementById('psw').innerHTML = Password;
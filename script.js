let firstName = prompt("Quel est ton prénom ?");
console.log(firstName);

let message = "Bonjour !";
console.log(message);

message = "Bonjour " + firstName + " !";
console.log(message)

document.querySelector('h1').innerText = message;

function sayHello(name, hour) {
    if (hour < 18) { console.log("Bonjour " + name + " !") }
    else console.log("Bonsoir " + name + " !")
}

sayHello(firstName, 11);
sayHello(firstName, 18);
sayHello(firstName, 17);
// Arrays vazios
// var avengers = newArray();
// var avengers = [];

var avengers = ['Cap America', 'Thor', 'Pantera'];

console.log(avengers);

avengers.push('Hulk');

console.log(avengers);

avengers.push('Miranha');
// avengers.pop(); // remove o ultimo
// avengers.shift(); // remove o primeiro

var indice = avengers.indexOf('Miranha');
avengers.splice(indice);

avengers.push('Viuva Negra', 'Gavião Arqueiro');

console.log(avengers);

var newAvengers = ['Miranha', 'Cap Marvel', 'Miss Marvel', 'Homem Formiga'];

// concatenação dos Arrays
var result = avengers.concat(newAvengers);
console.log(result);

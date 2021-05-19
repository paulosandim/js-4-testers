// For é movido por declaração 
for (var a = 0; a < 10; a++) {
    console.log('Repetindo porque ${a} é menor que 10 ');
}

// While movido por uma condição enquanto é verdadeiro
var i = 0;

while (i <= 10) {
    console.log('Repetindo porque ${i} é menor/igual que 10 ');
    i++;
}

// Trabalha com arrays
var avengers = ['Ironman', 'Miranha', 'Cap America', 'Thor', 'Viuva Negra', 'Hulk', 'Pantera'];

avengers.forEach(function(value, key) {
    console.log('${value} na posição ${key}');
});
var idade = prompt("Qual sua idade?");

if (idade >= 18) {
    console.log('Posso ir no show do Iron Maiden!');
} else if (idade >= 12) {
    console.log('Posso ir no show do Jonas Brothers!');
} else {
    console.log('Posso ir no show do Patati e Patata!');
}

var ingresso = prompt("Qual o ingresso?");

switch (ingresso) {
    case 'vip':
        console.log('Ficarei no camarote!');
        break;

    case 'premium':
        console.log('Ficarei na pista premium!');
        break;
    
    case 'comum':
        console.log('Ficarei na arquibancada!');
        break;

    default:
        console.log('Ingresso inválido!');
}

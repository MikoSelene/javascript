/*
* TRABALHO DE CASA
*/

/*
* criar uma variável chamada total do tipo number com o valor de 0
*/ 
var total = 0;

/*
* criar um array chamado inventory
* que tenha objectos lá dentro com as suas propriedades
* name, quantity, e outras que queiras, decide tu
* a ideia é recriar o saco, inventário, etc...
*/
var inventory = [
  {
    name: 'Spectral Arrow‌',
    quantity: 34,
  },
  {
    name: 'Music Disc (Cat)',
    quantity: 1,
  },
  {
    name: 'Raw Cod',
    quantity: 13,
  },
  {
    name: 'Name Tag',
    quantity: 42,
  },
];

/*
* com o método forEach imprimir na consola todos os items
* somar à variavel total as quantidades de cada item
*/
inventory.forEach(function(item) {
  console.log(item);
  total += item.quantity;
});

/*
* imprimir na consola a soma das quantidades todas de todos os items
*/
console.log(total);
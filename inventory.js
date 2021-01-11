/*
* TRABALHO DE CASA
*/

/*
* criar uma variável de total items a começar a 0
*/ 
var total = 0;

/*
* criar um array chamado inventory
* que tenha objectos lá dentro com as suas propriedades
* name, quantity, e outras que queiras, decide tu
* a ideia é recriar o saco, inventário, etc...
*/

/*
* com o método forEach imprimir na consola todos os items
* somar à variavel total as quantidades de cada item
*/

/*
* imprimir na consola a soma das quantidades todas de todos os items
*/

var materials = [
    {
      name: 'diamond',
      backgroundColor: '#008CE6',
      textColor: '#FFFFFF',
      rare: true,
      locations: ['underground', 'caverns'],
      uses: ['crafting'],
      xp:500,
    },
    {
      name: 'coal',
      backgroundColor: '#323232',
      textColor: '#FFFFFF',
      rare: false,
      locations: ['everywhere'],
      uses: ['crafting', 'fuel'],
      xp:20
    },
    {
      name: 'emerald',
      backgroundColor: '#00B900',
      textColor: '#FFFFFF',
      rare: true,
      locations: ['underground', 'caverns','mountains'],
      uses: ['trade'],
      xp:550
    }
  ];

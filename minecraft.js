// score inicial
var xp = 0;

// array de objectos
var materials = [
  {
    name: 'diamond', // string
    backgroundColor: 'cyan', // string
    textColor: 'black', // string
    rare: true, // boolean
    locations: ['underground', 'caverns'], // array
    uses: ['crafting'], // array
    xp: 5000, // number
  },
  {
    name: 'coal',
    backgroundColor: '#333333',
    textColor: 'white',
    rare: false,
    locations: ['everywhere'],
    uses: ['crafting', 'fuel'],
    xp: 200,
  },
  {
    name: 'emerald',
    backgroundColor: 'green',
    textColor: 'white',
    rare: true,
    locations: ['underground', 'caverns', 'mountains'],
    uses: ['trade'],
    xp: 7500,
  },
];

/*
* ciclo for:
* - com a variável i a começar em 0,
* - e enquanto for menor que o comprimento do array materials
* - executa o que estiver dentro das chavetas
* - e incrementa o valor de i
*/
for (var i = 0; i < materials.length; i++) {
  // imprime o item que estiver no índice com o valor de i do array materials
  console.log(materials[i]);
}

/* 
* método forEach:
* - por cada item no array materials,
* - executa uma função que recebe o item como argumento (material)
*/
materials.forEach(function(material) {
  // soma ao score inicial o valor de xp de cada item
  // xp += material.xp; 
  
  // imprime o valor de xp de cada item
  console.log(material.xp);
});

// MINI JOGO

/*
* guarda na variável buttons o elemento do HTML com o id="buttons"
* neste caso é o <div id="buttons"></div>
*/
var buttons = document.getElementById('buttons');

/*
* guarda na variável score o elemento do HTML com o id="score"
* neste caso é o <span id="score"></span>
*/
var score = document.getElementById('score');

/*
* método forEach:
* - por cada item no array materials
* - executa uma função que recebe o item como argumento
*/
materials.forEach(function(material) {
  // cria um elemento do tipo <button>
  var button = document.createElement('button');

  // adiciona o attributo type="button" ao elemento <button>
  button.type = 'button';

  // adiciona o attributo value="" ao elemento <button> com o valor de xp do material
  button.value = material.xp;

  // escreve o nome do material entre <button> e </button>
  button.innerHTML = material.name;

  // atribui a cor de fundo do elemento <button> com o valor da propriedade backgroundColor do material
  button.style.backgroundColor = material.backgroundColor;

  // atribui a cor do texto do botão com o valor da propriedade textColor do material
  button.style.color = material.textColor;

  // adiciona o elemento <button> como filho do <div id="buttons"></div>
  buttons.appendChild(button);
});

/*
* event listener:
* - fica à escuta de clicks no elemento <div id="buttons"></div>
* - e executa uma função que recebe o evento de click como argumento
*/
buttons.addEventListener('click', function(event) {
  // atribui à variável element o alvo (target) do evento click
  var element = event.target;

  // verifica se o alvo é um <button>
  if (element.matches('button')) {
    // incrementa à variável xp (no topo do programa) o valor do atributo value do <button>
    xp += parseInt(element.value, 10);
    /*
    * nota:
    * é necessário usar o método parseInt() ou parseFloat() para
    * converter o valor do atributo value para tipo number porque
    * os valores dos atributos dos elementos de HTML são sempre strings e
    * não é possível fazer contas entre tipos diferentes:
    * 1 + 1 = 2
    * 1 + '1' = '11'
    */

    // por fim escreve o valor da variável xp para dentro do <span id="score"></span>
    score.innerHTML = xp;
  }
});
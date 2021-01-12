var inventoryTabs = [
  {
    name: 'Blocos de construção',
    icon: '-208px -48px',
  },
  {
    name: 'Blocos decorativos',
    icon: '-144px -1712px',
  },
  {
    name: 'Redstone',
    icon: '-16px -576px',
  },
  {
    name: 'Transportes',
    icon: '-176px -1200px',
  },
  {
    name: 'Barra de itens guardados',
    icon: '',
  },
  {
    name: 'Procurar',
    icon: '',
  },
  {
    name: 'Diversos',
    icon: '-128px -464px',
  },
  {
    name: 'Alimentos',
    icon: '-48px -480px',
  },
  {
    name: 'Ferramentas',
    icon: '-64px -464px',
  },
  {
    name: 'Combate',
    icon: '-240px -432px',
  },
  {
    name: 'Poções',
    icon: '-0px -400px',
  },
  {
    name: 'Inventário',
    icon: '',
  },
];

// var inventory = [
//   {
//     name: 'Spectral Arrow‌',
//     quantity: 34,
//   },
//   {
//     name: 'Music Disc (Cat)',
//     quantity: 1,
//   },
//   {
//     name: 'Raw Cod',
//     quantity: 13,
//   },
//   {
//     name: 'Name Tag',
//     quantity: 42,
//   },
// ];

// inventory.forEach(function(item) {
//   console.log(item);
// });


// INTERFACE

// guarda na variável inventoryElement o elemento do HTML com id="inventory"
var inventoryElement = document.getElementById('inventory');

// por cada item do array tabs, adiciona um botão com um icon ao inventoryElement
inventoryTabs.forEach(function(item, index) {
  var button = document.createElement('button');
  button.title = item.name;
  button.setAttribute('role', 'tab');
  if (index === 0) button.setAttribute('aria-selected', 'true');
  
  var icon = document.createElement('i');
  icon.style.backgroundPosition = item.icon;
  
  button.appendChild(icon);
  inventoryElement.appendChild(button);
});

// guarda na variável inventoryButtons todos os botões de inventoryElement
var inventoryButtons = inventoryElement.querySelectorAll('button');

// detecta os clicks no elemento inventoryElement
inventoryElement.addEventListener('click', function(event) {
  // apanha o alvo do click do rato
  var target = event.target;

  // verifica se o alvo é um <button>
  if (target.matches('button')) {
    // muda o atributo aria-selected de todos os botões para false
    inventoryButtons.forEach(function(button) {
      button.setAttribute('aria-selected', 'false');
    });
    // muda o atributo aria-selected do botão clickado para true
    target.setAttribute('aria-selected', 'true');
  }
});
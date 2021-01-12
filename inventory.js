// DADOS
var inventoryTabs = [
  {
    name: 'Blocos de construção',
    icon: '-416px -96px',
  },
  {
    name: 'Blocos decorativos',
    icon: '-288px -3424px',
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
  var tab = document.createElement('button');
  tab.title = item.name;
  tab.id = 'inventory-tab-' + index;
  tab.setAttribute('role', 'tab');
  tab.setAttribute('aria-controls', 'inventory-panel-' + index);
  tab.setAttribute('aria-selected', index === 0);

  var icon = document.createElement('i');
  icon.style.backgroundPosition = item.icon;
  
  tab.appendChild(icon);
  inventoryElement.appendChild(tab);

  // a seguir ao 6º botão (index 5)...
  if (index === 5) {
    // por cada item do array tabs, adiciona um painel ao inventoryElement
    inventoryTabs.forEach(function(item, index) {
      var panel = document.createElement('div');
      panel.id = 'inventory-panel-' + index;
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-hidden', index > 0);
      panel.innerHTML = item.name;
      inventoryElement.appendChild(panel);
    });    
  }
});


// detecta os clicks no elemento inventoryElement
inventoryElement.addEventListener('click', function(event) {
  // apanha o alvo do click do rato
  var target = event.target;

  // verifica se o alvo é um <button>
  if (target.matches('button')) {
    // muda o atributo aria-selected do botão activo para false
    inventoryElement.querySelector('[role=tab][aria-selected=true]').setAttribute('aria-selected', 'false');

    // muda o atributo aria-hidden painel activo para true
    inventoryElement.querySelector('[role=tabpanel][aria-hidden=false]').setAttribute('aria-hidden', 'true');

    // muda o atributo aria-selected do botão clickado para true
    target.setAttribute('aria-selected', 'true');

    // selecciona o painel correspondente à tab
    var panel = document.getElementById(target.getAttribute('aria-controls'));

    // muda o atributo aria-hidden do painel para false
    panel.setAttribute('aria-hidden', false);
  }
});
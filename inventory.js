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

  if (index === 5) {
    inventoryTabs.forEach(function(item, index) {
      var panel = document.createElement('div');
      panel.id = 'inventory-panel-' + index;
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-hidden', index > 0);
      panel.innerHTML = inventoryTabs[index].name;
      inventoryElement.appendChild(panel);
    });    
  }
});

// por cada item do array tabs, adiciona um painel ao inventoryElement

// guarda na variável inventoryButtons todos os botões de inventoryElement
var inventoryButtons = inventoryElement.querySelectorAll('#inventory [role=tab]');
var inventoryPanels = inventoryElement.querySelectorAll('#inventory [role=tabpanel]');

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

    // muda o atributo aria-hidden de todos os painéis para true
    inventoryPanels.forEach(function(panel) {
      panel.setAttribute('aria-hidden', 'true');
    });

    // muda o atributo aria-selected do botão clickado para true
    target.setAttribute('aria-selected', 'true');

    // selecciona o painel correspondente à tab
    var panel = document.getElementById(target.getAttribute('aria-controls'));

    // muda o atributo aria-hidden do painel para false
    panel.setAttribute('aria-hidden', false);
  }
});
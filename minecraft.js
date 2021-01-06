var xp = 0;

var materials = [
  {
    name: 'diamond',
    backgroundColor: 'cyan',
    textColor: 'black',
    rare: true,
    locations: ['underground', 'caverns'],
    uses: ['crafting'],
    xp:5000,
  },
  {
    name: 'coal',
    backgroundColor: '#333333',
    textColor: 'white',
    rare: false,
    locations: ['everywhere'],
    uses: ['crafting', 'fuel'],
    xp:200
  },
  {
    name: 'emerald',
    backgroundColor: 'green',
    textColor: 'white',
    rare: true,
    locations: ['underground', 'caverns','mountains'],
    uses: ['trade'],
    xp:7500
  }
];

console.log(materials);

for(var i = 0; i <materials.length;i++){
  console.log(materials[i])
}

materials.forEach(function(material) {
  // xp += material.xp;
  console.log(xp);
});

var buttons = document.getElementById('buttons');
var score = document.getElementById('score');

materials.forEach(function(material) {
  buttons.innerHTML += '<button value="'+ material.xp +'" style="background-color: ' + material.backgroundColor + '; color: ' + material.textColor + '">' + material.name + '</button>'; 
});

buttons.addEventListener('click', function(evt) {
  var elm = evt.target;
  if (elm.tagName.toLowerCase() === 'button') {
    alert(elm.innerText + ': ' + elm.value + ' xp');
    xp += parseInt(elm.value, 10);
    score.innerHTML = xp;
  }
});
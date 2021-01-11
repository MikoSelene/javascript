var xp = 0;

var materials = [
  {
    name: 'Diamond',
    backgroundColor: '#008CE6',
    textColor: '#FFFFFF',
    rare: true,
    locations: ['underground', 'caverns'],
    uses: ['crafting'],
    xp:500,
  },
  {
    name: 'Coal',
    backgroundColor: '#323232',
    textColor: 'white',
    rare: false,
    locations: ['everywhere'],
    uses: ['crafting', 'fuel'],
    xp:20
  },
  {
    name: 'Emerald',
    backgroundColor: '#00B900',
    textColor: 'white',
    rare: true,
    locations: ['underground', 'caverns','mountains'],
    uses: ['trade'],
    xp:550
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
var xp = 0;

var materials = [
  {
    name: 'diamond',
    color: 'cyan',
    rare: true,
    locations: ['underground', 'caverns'],
    uses: ['crafting'],
    xp:5000,
  },
  {
    name: 'coal',
    color: 'black',
    rare: false,
    locations: ['everywhere'],
    uses: ['crafting', 'fuel'],
    xp:200
  },
  {
    name: 'emerald',
    color: 'green',
    rare: true,
    locations: ['underground', 'caverns','mountains'],
    uses: ['trade'],
    xp:7500
  }
];

console.log(materials);

//for(var i = 0; i <materials.length;i++){
//console.log(materials[i])
//}

materials.forEach(function(material) {
  xp += material.xp;
  console.log(xp);

});
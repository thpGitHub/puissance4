var plateau = new Array();

for (var i = 0; i < 5; i++) {
  plateau[i] = new Array();
  for (var j = 0; j < 6; j++) {
    plateau[i][j] = i + ":" + j;
  }
};
plateau.forEach(function(plato) {
  console.log(plato);

});

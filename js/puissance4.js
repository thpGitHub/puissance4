var div = document.querySelector("#message");
div.innerHTML = "";

var tableElt = document.createElement("table");//plateau
tableElt.id="plateau";

var plateau = new Array();

for(var i =0;i<6;i++){
        var trElt=document.createElement("tr");
        plateau[i]=new Array();
          for(var j=0;j<7;j++){
              var tdElt=document.createElement("td");
              tdElt.dataset.column = j;
              trElt.appendChild(tdElt);
              plateau[i][j]=tdElt;
        }
      document.getElementById("message").appendChild(trElt);
}

document.addEventListener("click", function (event){
      console.log(event.target.cellIndex);
      console.log(event.target);
      console.log(parseInt(document.getElementById("message").dataset.column));
      console.log(document.getElementById("message").dataset.column);

      plateau.forEach(function (plato){
      console.log(plato);

      plateau[0][0].className="joueur1";
      plateau[5][0].className="joueur2";
      });
  });
/*
var maTable = [[3, 42],[100], "Chaîne de caractères"];
console.log (maTable);
console.log(maTable[2][2]);
*/



/*
// on cree le tableau bleu, contenant les lignes
var grille = new Array();

// on cree les lignes (tableau vert) les unes après les autres
for(var i=0; i<9; i++)
   grille[i] = new Array();

// on parcourt les lignes...
for(var i=0; i<9; i++)
   // ... et dans chaque ligne, on parcourt les cellules
   for(var j=0; j<9; j++)
      grille[i][j] = 0;

//On utilise donc deux boucles imbriquées pour le parcourir
      for(var i=0; i<9; i++)
   for(var j=0; j<9; j++)
      alert("Case "+ i + "-" + j +" : "+ grille[i][j]);
*/

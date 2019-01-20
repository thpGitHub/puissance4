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
              tdElt.className="hoverJoueur1";
              trElt.appendChild(tdElt);
              plateau[i][j]=tdElt;
        }
      //document.getElementById("message").appendChild(trElt);
      tableElt.appendChild(trElt);
}
        document.getElementById("message").appendChild(tableElt);

var colonne;
var tour="joueur1";//pour colorier la premiere case qui a q"une seule class
//var hover="hoverJoueur1"
var ligne;
var compteur=0;


document.addEventListener("click", function (event){
      colonne=event.target.cellIndex;//Récupération du numéro de la colonne

      for(var i=5;i>=0;i--){//TEST DES CASES VIDES EN PARTANT DU BAS
              if(plateau[i][colonne].classList.length===1){ //on test la colonne en partant du bas pour savoir si la case de la collonne possede une 2eme class
                    ligne=i;                                    // car au départ il y a qu une class hoverjoueur1. Si une seule class c'est que la colonne est vide
                    plateau[i][colonne].classList.add(tour);
                        //test horizontal gauche
                        //0/*
                            for(var i=colonne;i>0;i--){
                                    console.log("colonne : "+i);
                                    //if(plateau[ligne][i].className!=""&&plateau[ligne][i].className===plateau[ligne][i-1].className){
                                    if(plateau[ligne][i].className===plateau[ligne][i-1].className){
                                            compteur ++;
                                            console.log(compteur);
                                                  }else{
                                                    if(compteur===3){console.log("GAGNE !!!");break;}else{compteur=0;}
                                                    break;}
                            }
                        //*/
                    //fin test
                    switch(tour){
                          case "joueur1":
                              tour="joueur2";
                              for(var i =0;i<6;i++){
                                        for(var j=0;j<7;j++){
                                            console.log(plateau[i][j]);
                                            plateau[i][j].classList.replace("hoverJoueur1","hoverJoueur2");
                                                              }
                              }
                              break;
                          case "joueur2":
                              tour="joueur1";
                              for(var i =0;i<6;i++){
                                        for(var j=0;j<7;j++){
                                            console.log(plateau[i][j]);
                                            plateau[i][j].classList.replace("hoverJoueur2","hoverJoueur1");
                                                              }
                              }
                              break;
                    }//fin switch

                    break;//pour arrêter la boucle car la case est colorier. sinon toute la colonne sera coloriée avec la boucle for qui continu
              }//fin du 1er if après le for
      }

  });

    









  /*
  plateau.forEach(function (plato){
    console.log(plato);
    //console.log(plato.classList.length);
  });// Fin du forEach
  */
  /*
  for(var i =0;i<6;i++){
            for(var j=0;j<7;j++){
                console.log(plateau[i][j]);
                plateau[i][j].classList.replace("hoverJoueur1","hoverJoueur2");
// div.classList.replace("foo", "bar");
          }
  }
  */

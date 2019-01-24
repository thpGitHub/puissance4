var div = document.querySelector("#message");
div.innerHTML = "";

var plateau = new Array();
var tour="joueur1";//pour colorier la premiere case qui a q"une seule class
var colonne;
var ligne;
var compteur=0;
var victoire=false;

console.log("ligne : "+ligne);

function creationPlateauJeu(){
        var tableElt = document.createElement("table");
        tableElt.id="plateau";
      //  var plateau = new Array();

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
                tableElt.appendChild(trElt);
        }
                document.getElementById("message").appendChild(tableElt);
};
function colorierCase(){
        for(var i=5;i>=0;i--){//TEST DES CASES VIDES EN PARTANT DU BAS
                if(plateau[i][colonne].classList.length===1){ //on test la colonne en partant du bas pour savoir si la case de la collonne possede une 2eme class
                      ligne=i;                                    // car au départ il y a qu une class hoverjoueur1. Si une seule class c'est que la colonne est vide
                      plateau[i][colonne].classList.add(tour);
                      break;//pour arrêter la boucle car la case est colorier. sinon toute la colonne sera coloriée avec la boucle for qui continu

                }
        }
};
function modifierClassPourCss(){
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
  };
function clique(event){
    // CETTE FONCTION EST NOMM2E CAR ON VEUT POUVOIR ARRËTER L4EVENT
            colonne=event.target.cellIndex;//R2CUP2RATION DE LA COLONNE CLIQU2
      console.log("J'ai cliquer dans la table :)");
      console.log(event.target.cellIndex);
    //document.getElementById("plateau").removeEventListener("click", clique);
    colorierCase();
    modifierClassPourCss();
   //testLigne();
   testColonne();
   console.log("ligne : "+ligne);
};
function testLigne(){
  //gauche
  for(var i=colonne;i>0;i--){
          console.log("colonne : "+i);
          //if(plateau[ligne][i].className!=""&&plateau[ligne][i].className===plateau[ligne][i-1].className){
          if(plateau[ligne][i].className===plateau[ligne][i-1].className){
                  compteur ++;
                  console.log("compteur : "+compteur);
                  console.log(plateau[ligne][i].className);
                        }else{
                            if(compteur===3){
                                    console.log("GAGNE !!!");
                                    //arret de l'evevenement
                                    document.getElementById("plateau").removeEventListener("click", clique);
                                    break;
                                    }else{compteur=0;}
                                          break;}
  }
  //droite
  for(var i=colonne;i<6;i++){
          console.log("colonne : "+i);
          //if(plateau[ligne][i].className!=""&&plateau[ligne][i].className===plateau[ligne][i-1].className){
          if(plateau[ligne][i].className===plateau[ligne][i+1].className){
                  compteur ++;
                  console.log("compteur : "+compteur);
                  console.log(plateau[ligne][i].className);
                        }else{
                            if(compteur===3){
                                    console.log("GAGNE !!!");
                                    //arret de l'evevenement
                                    document.getElementById("plateau").removeEventListener("click", clique);
                                    break;
                                    }else{compteur=0;}
                                          break;}
  }
};

function testColonne(){
        //vers le haut
      //for(var i=ligne;i>0;i++){
  console.log("ligne dans test colonne : "+ligne);
  console.log("colonne dans test colonne : "+colonne);
  console.log("plateau dans test colonne : "+plateau[ligne][colonne]);
          //console.log(plateau[i][colonne]);
            /*  if(plateau[i][colonne].className===plateau[i+1][colonne].className){
                console.log("pareil");
                compteur++;
                console.log("compteur : "+compteur);
              }else{console.log("Pas pareil");}  */
      //  }

 };




creationPlateauJeu();
console.log(ligne);

document.getElementById("plateau").addEventListener("click", clique);

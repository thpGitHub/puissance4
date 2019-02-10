var div = document.querySelector("#message");
div.innerHTML = "";

var plateau = new Array();
var tour="joueur1";//pour colorier la premiere case qui a q"une seule class
var colonne;
var ligne;
var compteur=0;
var victoire=false;

creationPlateauJeu();

document.getElementById("plateau2").addEventListener("click", clique);
function clique(event){
  compteur=0;// a chaque clique le compteur est remi a zero
    // CETTE FONCTION EST NOMM2E CAR ON VEUT POUVOIR ARRËTER L4EVENT
      colonne=event.target.cellIndex;//R2CUP2RATION DE LA COLONNE CLIQU2
      console.log("J'ai cliquer dans la table :)");
      console.log(event.target.cellIndex);
    //document.getElementById("plateau").removeEventListener("click", clique);
    colorierCase();
    modifierClassPourCss();
    testLigne();
    testColonne();
    testDiagonalBasGauche();
    testDiagonalBasdroite();
    testDiagonalHautGauche();
    testDiagonalHautDroite();
};

function creationPlateauJeu(){
        var tableElt = document.createElement("table");
        tableElt.id="plateau2";

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
                                //console.log(plateau[i][j]);
                                plateau[i][j].classList.replace("hoverJoueur1","hoverJoueur2");
                                                  }
                  }
                  break;
              case "joueur2":
                  tour="joueur1";
                  for(var i =0;i<6;i++){
                            for(var j=0;j<7;j++){
                                //console.log(plateau[i][j]);
                                plateau[i][j].classList.replace("hoverJoueur2","hoverJoueur1");
                                                  }
                  }
                  break;
        }//fin switch
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
                            if(compteur>=3){
                                    alert("GAGNE !!!");
                                    victoire=true;
                                    //arret de l'evevenement
                                    document.getElementById("plateau2").removeEventListener("click", clique);
                                    break;
                                    }else{compteur=0;}
                                          break;}
  }
  //droite
  if(!victoire){
  for(var i=colonne;i<6;i++){
          console.log("colonne : "+i);
          //if(plateau[ligne][i].className!=""&&plateau[ligne][i].className===plateau[ligne][i-1].className){
          if(plateau[ligne][i].className===plateau[ligne][i+1].className){
                  compteur ++;
                  console.log("compteur : "+compteur);
                  console.log(plateau[ligne][i].className);

                  if(compteur>=3){
                          alert("GAGNE !!!");
                          victoire=true;
                          //arret de l'evevenement
                          document.getElementById("plateau2").removeEventListener("click", clique);
                          break;

                  }
                        }else{
                            if(compteur>=3){
                                    alert("GAGNE !!!");
                                    victoire=true;
                                    //arret de l'evevenement
                                    document.getElementById("plateau2").removeEventListener("click", clique);
                                    break;
                                    }else{compteur=0;}
                                          break;}
  }
}
};
function testColonne(){
  if(!victoire) // avoir a supprimer !!!!! car en cas de victoire l'event s'arrete
  try {
    for(var i=ligne;i>0;i++){
    //console.log("plateau de i-1 :"+plateau[i-1][colonne].className);
    //console.log("plateau de i :"+plateau[i][colonne].className);
            if(plateau[i][colonne].className===plateau[i+1][colonne].className){
               //console.log("pareil");
               compteur++;
               console.log("compteur : "+compteur);
              // console.log("compteur : "+compteur);
              if(compteur===3){
                    alert("GAGNE !!!");
                    document.getElementById("plateau2").removeEventListener("click", clique);
                    //console.log("Pas pareil");
                    break;
                    }

                  }else{
                        if(compteur===3){
                              alert("GAGNE !!!");
                              document.getElementById("plateau2").removeEventListener("click", clique);
                              //console.log("Pas pareil");
                              break;
                              }else{compteur=0;}
                              break;
            }
  }
  }
  catch(err) {
    console.log(err.name);
  }



    /*    for(var i=ligne;i>0;i++){
        //console.log("plateau de i-1 :"+plateau[i-1][colonne].className);
        //console.log("plateau de i :"+plateau[i][colonne].className);
                if(plateau[i][colonne].className===plateau[i+1][colonne].className){
                   //console.log("pareil");
                   compteur++;
                  // console.log("compteur : "+compteur);
                      }else{
                            if(compteur>=3){
                                  alert("GAGNE !!!");
                                  document.getElementById("plateau2").removeEventListener("click", clique);
                                  //console.log("Pas pareil");
                                  break;
                                  }else{compteur=0;}
                                  break;
                }
}*/
};
function testDiagonalBasGauche(){
          var colonneIncrementee=colonne;
          for(var i=ligne;i<5;i++){
                  if(plateau[i+1][colonneIncrementee-1].classList.length>1 && plateau[i][colonneIncrementee].className===plateau[i+1][colonneIncrementee-1].className){
                          compteur++;
                          colonneIncrementee--;
                          testGagne();
                  }else{compteur=0;break;}
          }


}
function testDiagonalBasdroite(){
          var colonneIncrementee=colonne;
          for(var i=ligne;i<5;i++){
                  if(plateau[i+1][colonneIncrementee+1].classList.length>1 && plateau[i][colonneIncrementee].className===plateau[i+1][colonneIncrementee+1].className){
                          compteur++;
                          colonneIncrementee++;
                          testGagne();
                  }else{compteur=0;break;}
          }
}
function testDiagonalHautGauche(){
          var colonneIncrementee=colonne;
          for(var i=ligne;i>0;i--){
                  if(plateau[i-1][colonneIncrementee-1].classList.length>1 && plateau[i][colonneIncrementee].className===plateau[i-1][colonneIncrementee-1].className){
                          compteur++;
                          colonneIncrementee--;
                          testGagne();
                  }else{compteur=0;break;}
          }

}
function testDiagonalHautDroite(){
  var colonneIncrementee=colonne;
  for(var i=ligne;i>0;i--){
          if(plateau[i-1][colonneIncrementee+1].classList.length>1 && plateau[i][colonneIncrementee].className===plateau[i-1][colonneIncrementee+1].className){
                  compteur++;
                  colonneIncrementee++;
                  testGagne();
          }else{compteur=0;break;}
  }
}


function testGagne(){
          if(compteur===3){
                alert("GAGNE !!!");
                document.getElementById("plateau2").removeEventListener("click", clique);
                //console.log("Pas pareil");
                //break;
                }

}












//

//Creation des variable//
let texte = document.querySelector(".Texte");
let charge = document.querySelector('.charge');
let flammeche = document.querySelector('.flammeche');
let combotGriff = document.querySelector('.vive-attaque');
let LanceFlammes = document.querySelector('.Lance-Flammes');
let vie = document.querySelector('.vie')
let vie2 = document.querySelector('.vie2')
let ball1 = document.querySelector('.ball1')
let ball2 = document.querySelector('.ball2')
let ball3 = document.querySelector('.ball3')
let ball4 = document.querySelector('.ball4')
let ball5 = document.querySelector('.ball5')
let ball6 = document.querySelector('.ball6')
let none1 =  document.querySelector('.none1')
let none2 =  document.querySelector('.none2')
let none3 =  document.querySelector('.none3')
let none7 =  document.querySelector('.none7')
let none4 =  document.querySelector('.none4')
let none5 =  document.querySelector('.none5')
let none6 =  document.querySelector('.none6')
let none8 =  document.querySelector('.none8')
let image1 = document.querySelector('.pokemon1')
let image2 = document.querySelector('.pokemon2')
let i =1;
let j =1;
//creation Des class//
class Pokemon{
  constructor(pdv){
    this.pdv = pdv;
  }
//creation des attaque//
  Charge(personne){
    personne.pdv -= 10;
    vie2.innerHTML = personne.pdv + "/ 100 pdv";
    texte.innerHTML="Salameche avais fait Charge";
    
   }
   flammeche(personne){
    personne.pdv -= 20;
    vie2.innerHTML = personne.pdv + "/ 100 pdv";
     texte.innerHTML="Salameche avais fait flammeche";
   }
   combotGriff(personne){
    personne.pdv -= 30;
    vie2.innerHTML = personne.pdv + "/ 100 pdv";
     texte.innerHTML="Salameche avais fait Vive-Attaque";
   }

   LanceFlammes(personne){
    personne.pdv -= 50;
    vie2.innerHTML = personne.pdv + "/ 100 pdv";
     texte.innerHTML="Salameche avais fait Lance-Flammes";
   }

   fouetlianes(personne){
    personne.pdv -= 40;
    vie.innerHTML = personne.pdv + "/ 100 pdv";
   }

}
//creation des pokemon//
let salamache = new Pokemon(100);
let papilusion = new Pokemon(100)
let dardagnant = new Pokemon(100)
let bulbizarre = new Pokemon(100);
let rattata = new Pokemon(100);
let roucoule = new Pokemon(100);
//creation des event sur les bonton//
charge.addEventListener("click",function(){
  if(i==1){
    salamache.Charge (bulbizarre);
    const MyTimeout = setTimeout(revoie,2000)
    animation();
  }
  else if(i==2){
    salamache.Charge(rattata);
    const MyTimeout = setTimeout(revoie,2000)
    animation();
  }
  else{
    salamache.Charge(roucoule);
    const MyTimeout = setTimeout(revoie,2000)
    animation();
  }

})

flammeche.addEventListener("click",function(){
  if(i==1){
    salamache.flammeche (bulbizarre);
    const MyTimeout = setTimeout(revoie,2000)
    animation();
  }
  else if(i==2){
    salamache.flammeche(rattata);
    const MyTimeout = setTimeout(revoie,2000)
    animation();
  }
  else{
    salamache.flammeche(roucoule);
    const MyTimeout = setTimeout(revoie,2000)
    animation();
  }
})

combotGriff.addEventListener("click",function(){
  if(i==1){
    salamache.combotGriff (bulbizarre);
    const MyTimeout = setTimeout(revoie,2000)
    animation();
  }
  else if(i==2){
    salamache.combotGriff(rattata);
    const MyTimeout = setTimeout(revoie,2000)
    animation();
  }
  else{
    salamache.combotGriff(roucoule);
    const MyTimeout = setTimeout(revoie,2000)
    animation();
  }
})

LanceFlammes.addEventListener("click",function(){
  if(i==1){
    salamache.LanceFlammes (bulbizarre);
    const MyTimeout = setTimeout(revoie,2000)
    animation();
  }
  else if(i==2){
    salamache.LanceFlammes(rattata);
    const MyTimeout = setTimeout(revoie,2000)
    animation();
  }
  else{
    salamache.LanceFlammes(roucoule);
    const MyTimeout = setTimeout(revoie,2000)
    animation();
  }
})
function reset() {
    texte.innerHTML="Choisir ton attaque "
}
//creation fonction  revoie/
function revoie() {
  if(i==1){
    if (bulbizarre.pdv>0){
      if(j==1){
        bulbizarre.fouetlianes(salamache);
        if (salamache.pdv>0){
          texte.innerHTML="bulbizarre fait fouet Liannes";
          const MyTimeout2 = setTimeout(reset,1000)
        }
        else{
          texte.innerHTML="salameche est mort!!! "
          ball4.style.display = "none";
          const MyTimeout3 = setTimeout(pokemon9,1000)
      }}
      if(j==2){
        bulbizarre.fouetlianes(papilusion);
        if (papilusion.pdv>0){
          texte.innerHTML="bulbizarre fait fouet Liannes";
          const MyTimeout2 = setTimeout(reset,1000)
        }
        else{
          texte.innerHTML="papilusion est mort!!! "
          ball5.style.display = "none";
          const MyTimeout3 = setTimeout(pokemon10,1000)
      }}
      if(j==3){
        bulbizarre.fouetlianes(dardagnant);
        if (dardagnant.pdv>0){
          texte.innerHTML="bulbizarre fait fouet Liannes";
          const MyTimeout2 = setTimeout(reset,1000)
        }
        else{
          texte.innerHTML="dardagnant est mort!!! "
          ball6.style.display = "none";
          const MyTimeout3 = setTimeout(pokemon11,1000)
      }}
    }
    else{
      texte.innerHTML="Bulbizarre est mort!!! "
      ball1.style.display = "none";
      const MyTimeout3 = setTimeout(pokemon2,1000)
    }
  }
  else if(i==2){
    if (rattata.pdv>0){
      if(j==1){
        rattata.fouetlianes(salamache);
        if (salamache.pdv>0){
          texte.innerHTML="bulbizarre fait fouet Liannes";
          const MyTimeout2 = setTimeout(reset,1000)
        }
        else{
          texte.innerHTML="salameche est mort!!! "
          ball4.style.display = "none";
          const MyTimeout3 = setTimeout(pokemon9,1000)
      }}
      if(j==2){
        rattata.fouetlianes(papilusion);
        if (papilusion.pdv>0){
          texte.innerHTML="bulbizarre fait fouet Liannes";
          const MyTimeout2 = setTimeout(reset,1000)
        }
        else{
          texte.innerHTML="papilusion est mort!!! "
          ball5.style.display = "none";
          const MyTimeout3 = setTimeout(pokemon10,1000)
      }}
      if(j==3){
        rattata.fouetlianes(dardagnant);
        if (dardagnant.pdv>0){
          texte.innerHTML="bulbizarre fait fouet Liannes";
          const MyTimeout2 = setTimeout(reset,1000)
        }
        else{
          texte.innerHTML="dardagnant est mort!!! "
          ball6.style.display = "none";
          const MyTimeout3 = setTimeout(pokemon11,1000)
      }}
    }
    else{
      texte.innerHTML="rattata est mort!!! "
      ball2.style.display = "none";
      const MyTimeout3 = setTimeout(pokemon3,1000)
    }
  }
  else if(i==3){
    if (roucoule.pdv>0){
      if(j==1){
        roucoule.fouetlianes(salamache);
        if (salamache.pdv>0){
          texte.innerHTML="bulbizarre fait fouet Liannes";
          const MyTimeout2 = setTimeout(reset,1000)
        }
        else{
          texte.innerHTML="salameche est mort!!! "
          ball4.style.display = "none";
          const MyTimeout3 = setTimeout(pokemon9,1000)
      }}
      if(j==2){
        roucoule.fouetlianes(papilusion);
        if (papilusion.pdv>0){
          texte.innerHTML="bulbizarre fait fouet Liannes";
          const MyTimeout2 = setTimeout(reset,1000)
        }
        else{
          texte.innerHTML="papilusion est mort!!! "
          ball5.style.display = "none";
          const MyTimeout3 = setTimeout(pokemon10,1000)
      }}
      if(j==3){
        roucoule.fouetlianes(dardagnant);
        if (dardagnant.pdv>0){
          texte.innerHTML="bulbizarre fait fouet Liannes";
          const MyTimeout2 = setTimeout(reset,1000)
        }
        else{
          texte.innerHTML="dardagnant est mort!!! "
          ball6.style.display = "none";
          const MyTimeout3 = setTimeout(pokemon11,1000)
      }}
    }
    else{
      texte.innerHTML="Roucoule est mort!!! "
      ball3.style.display = "none";
      const MyTimeout3 = setTimeout(pokemon4,1000)
    }
  }
}
//creation des fonction pour masquer les pokemon et les changer //
function pokemon2(){
  none1.style.display = "none";
  none2.style.display = "block"; 
  texte.innerHTML="Red a envoyer Rattata "
  const MyTimeout2 = setTimeout(reset,1000)
  vie2.innerHTML = rattata.pdv + "/ 100 pdv";
  i++
  }

function pokemon3(){
  none2.style.display = "none";
  none3.style.display = "block"; 
  texte.innerHTML="Red a envoyer roucoule "
  const MyTimeout2 = setTimeout(reset,1000)
  vie2.innerHTML = roucoule.pdv + "/ 100 pdv";
  i++
}
function pokemon4(){
  none3.style.display = "none";
  none7.style.display = "block"; 
  texte.innerHTML="Vous avais battu red  "
  vie2.style.display = "none"
}

function pokemon9(){
  none4.style.display = "none";
  none5.style.display = "block"; 
  texte.innerHTML="Red a envoyer papilusion"
  const MyTimeout2 = setTimeout(reset,1000)
  vie.innerHTML = papilusion.pdv + "/ 100 pdv";
  j++
}
function pokemon10(){
  none5.style.display = "none";
  none6.style.display = "block"; 
  texte.innerHTML="Red a envoyer dardagnant"
  const MyTimeout2 = setTimeout(reset,1000)
  vie.innerHTML = dardagnant.pdv + "/ 100 pdv";
  j++
}

function pokemon11(){
  none6.style.display = "none";
  none8.style.display = "block"; 
  texte.innerHTML="Red vous a battu  "
  vie.style.display = "none"
}

function animation(){
  image1.style.animation= " 2s infinite running image1";
  image1.style.transformOrigin = "center";
  const MyTimeout2 = setTimeout(animation2,1000)

}

function animation2(){
  //image1.style.animation= " infinite paused image1";
  image2.style.animation= " 2s infinite running image1";
  image2.style.transformOrigin = "center";
  const MyTimeout2 = setTimeout(animation3,1000)
}
function animation3(){
  image2.style.animation= " infinite paused image1";
}

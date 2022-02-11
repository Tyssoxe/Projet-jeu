if(i==2){
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
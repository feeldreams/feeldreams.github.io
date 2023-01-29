pesanAkhir1 = inip[iden];
pesanAkhir3 = "<br>thank you, and i love uuu";

document.getElementById("loveIn").onclick = function() {
      if(fungsiAwal==0){
        loveIn.style="transition:all .8s ease;transform:scale(15);opacity:0";
        ftAwal.style="opacity:0";
        wallpaper.style="transform: scale(1);";
        ket.style="display:none";
        fungsiAwal=1;setTimeout(initengahan,300);
        setTimeout(bqmuncul,400)
      }
    }

aktigeser=0;thisgeser=1;
document.getElementById("bq").onclick = function() {
  if(aktigeser==1){
    setTimeout(katakata,400);hsementara();
  }
}

  function hsementara(){
    ketlanjut.style="position:relative;";
    thisgeser+=1;aktigeser=0;
  }
  
  function munculkembali(){
    if(thisgeser<totalPesan){
      ketlanjut.style="position:relative;opacity:.8";
      aktigeser=1;
      iden += 1;
      pesanAkhir1 = inip[iden];
    }
    if(thisgeser==totalPesan){setTimeout(mulaiketikA,500);}
  }
  
  function aksiakhir(){
    setTimeout(bqmuncul,400);
  }
  
  function initengahan(){
    loveIn.style="display:none";ket.style="display:none";
    Content.style = "opacity:1;margin-top:7vh";
  }
  
  function bqmuncul(){
      bq.style = "margin-top:0;position:relative;opacity:1;visibility:visible;transform: scale(1);";
      audio.play();waktumuncul();
  }
  
  var i = 1;function defwp(){wallpaper.style="transform: scale(1)";}
  function katakata(){
      kalimat.innerHTML="";
  	new TypeIt("#kalimat", {
      strings: ["" + pesanAkhir1], startDelay: 10, speed: 40, cursor: true,
      afterComplete: function(){
         kalimat.innerHTML = pesanAkhir1;
         iden += 1;
         pesanAkhir1 = inip[iden];
         if(pesanAkhir1==inip[totalPesan+1]){ftoAwal.src=ftoAkhir.src;ftAwal.style="opacity:.8;margin-top:80px;transform: scale(.8);transition: all .8s ease";setTimeout(jjfoto,400);setInterval(berjatuhan,200);}
         //munculkembali();
      },}).go();
  }
  
  function jjfoto(){ftoAwal.style.animation="jj 1s infinite alternate";}

  function mulaiketikA(){
  setInterval(berjatuhan,300);
  bodyblur.style.opacity=".15";
  pesanAkhir.style="position:relative;opacity:1;visibility:visible;transform: scale(1)";
  new TypeIt("#pesanAkhir", {
  strings: ["" + pesanAkhir3], startDelay: 100, speed: 50, cursor: false, deleteSpeed: 20, breakLines: false, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
  	 pesanAkhir.style.animation="rto .8s infinite alternate";
  },}).go();
  }

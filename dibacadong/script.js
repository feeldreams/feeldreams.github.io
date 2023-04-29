async function inipesan(){nama = "kamu";window.nama = nama;mulainama();}  

const box = document.getElementById('pergeseran');
const directChildren = box.children.length;
console.log('Script ini dibuat oleh: feeldream.id');
console.log('Total Slide: ', directChildren);
totalPesan = directChildren;

aktigeser=0;thisgeser=1;
document.getElementById("bodyblur").onclick = function() {
  if(aktigeser==1){
    document.getElementById('pergeseran').scrollLeft += 300;
    hsementara();
    ftganti++;
    fthilang();
    iden += 1;
    if(iden>1){
      if(iden%2==0){wallpaper.style="transform: scale(1.5)";} 
      else {wallpaper.style="transform: scale(1)";}
          wallpaper.src = iniwp[iden];
      }
  }
}

document.getElementById("loveIn").onclick = function() {
    //setTimeout(mulaiAwal,400);function mulaiAwal() {
      if(fungsiAwal==0){
        audio.play();
        loveIn.style="transition:all .8s ease;transform:scale(15);opacity:0";
        ftAwal.style="opacity:0";
        wallpaper.style="transform: scale(1);";
        ket.style="display:none";
        fungsiAwal=1;setTimeout(initengahan,300);setTimeout(mulainama,400)
      }
    }
  function hsementara(){
    ketgeser.style="position:relative;";
    thisgeser+=1;aktigeser=0;setTimeout(munculkembali,500)
  }
  function munculkembali(){
    if(thisgeser<totalPesan){
      ketgeser.style="position:relative;transform:scale(1);opacity:.7";
      aktigeser=1;
    }
    //if(thisgeser==totalPesan){setTimeout(aksiakhir,400)}
  }
  
  document.getElementById("pergeseran").onclick = function() {
  	if(thisgeser==totalPesan){
  	   pergeseran.style="position:relative";
         ketgeser.style="position:relative";
         ftganti=10;fthilang();
         setTimeout(bqmuncul,400);
      }
  }
  
  function kalimatakhir(){
  	new TypeIt("#kalimat", {
      strings: ["" + katakata], startDelay: 50, speed: 54, cursor: true,
      afterComplete: function(){
      	kalimat.innerHTML = katakata;
          mulaiketikAkhir();
      },}).go();
  }
  function mulaiketikAkhir(){
  setInterval(berjatuhan,250);
  pesanAkhir.style="position:relative;opacity:1;visibility:visible;transform: scale(1)";
  new TypeIt("#pesanAkhir", {
  strings: ["" + pesanAkhir2], startDelay: 100, speed: 55, cursor: true, deleteSpeed: 20, breakLines: false, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
  	  pesanAkhir.innerHTML = "" + pesanAkhir2;
  },}).go();
  }
  
  function initengahan(){
    ftAwal.style="display:none";loveIn.style="display:none";ket.style="display:none";
    Content.style = "opacity:1;margin-top:7vh";
  }
  
  async function mulainama() {
    setTimeout(pgmuncul,200);
    ftmuncul();
  }
  
  function ftmuncul(){
    if(ftganti==0){fotostiker.src = deffotostiker;}
    if(ftganti==1){fotostiker.src = fotostiker1.src;}
    if(ftganti==2){fotostiker.src = fotostiker2.src;}
    if(ftganti==3){fotostiker.src = fotostiker3.src;}
    if(ftganti<10){fotostiker.style="display:inline-flex;opacity:1;transform:scale(1)";}
  }
  function fthilang(){fotostiker.style="display:inline-flex;opacity:0;transform:scale(0)";if(ftganti<10){setTimeout(ftmuncul,250)}}
  function jjfoto(){fotostiker.style.animation="rto .8s infinite alternate";}
  
  function pgmuncul(){pergeseran.style="position:relative;opacity:1;visibility:visible;transform:scale(1);";setTimeout(munculkembali,500)}
  function bqmuncul(){fotostiker.style="display:none";pergeseran.style="display:none";ketgeser.style="display:none";bq.style = "position:relative;opacity:1;visibility:visible;margin-top:5vh;transform: scale(1);";setTimeout(kalimatakhir,400);}
  function bqhilang(){wallpaper.style="transform: scale(2);";bodyblur.style="opacity:.3";bq.style = "position:relative;transition:all .7s ease;";}
  
  function otomatis(){halo.style.opacity="0"; kalimat.style="opacity:0"; setTimeout(otolanj,400);}
  function otolanj(){halo.style.opacity="1";kalimat.style="opacity:1";}

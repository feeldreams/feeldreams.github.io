//async function inipesan(){var { value: nama } = await swals.fire({title: 'Masukkan Nama Kamu', input: 'text',});if(nama && nama.length < 11){window.nama = nama; inihalo.innerHTML = "Hai, " + nama + "! ✨";mulainama();} else {await swals.fire('Ups!', 'Nama tidak boleh kosong atau lebih dari 10 karakter, ya!');inipesan();} }
  async function inipesan(){nama = "kamu";window.nama = nama;mulainama();}  

katakata = kalimat.innerHTML;
pesanAkhir2 = pesanAkhir.innerHTML;
kalimat.innerHTML = "";pesanAkhir.innerHTML="";

const box = document.getElementById('pergeseran');
const directChildren = box.children.length;
console.log('Script ini dibuat oleh: www.feeldream.id');
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
      }
  }
}

document.getElementById("loveIn").onclick = function() {
    //setTimeout(mulaiAwal,400);function mulaiAwal() {
      if(fungsiAwal==0){
        audio.play();
        loveIn.style="transition:all .8s ease;transform:scale(25);opacity:0";
        ftAwal.style="opacity:0";
        wallpaper.style="transform: scale(1);";
        ket.style="display:none";
        fungsiAwal=1;setTimeout(initengahan,600);
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
    if(thisgeser==totalPesan){setTimeout(aksiakhir,1300)}
  }
  
  function aksiakhir(){
  	   iden += 1;if(iden%2==0){wallpaper.style="transform: scale(1.5)";} else {wallpaper.style="transform: scale(1)";}
  	   pergeseran.style="position:relative;";
         ketgeser.style="position:relative";
         ftganti=10;fthilang();
         setTimeout(bqmuncul,500);
  }
  
  function kalimatakhir(){
  	new TypeIt("#kalimat", {
      strings: ["" + katakata], startDelay: 50, speed: 52, cursor: true,
      afterComplete: function(){
      	kalimat.innerHTML = katakata;
          setTimeout(mulaiketikAkhir,200);
      },}).go();
  }
  function mulaiketikAkhir(){
  setInterval(berjatuhan,250);
  pesanAkhir.style="position:relative;opacity:1;visibility:visible;transform: scale(1)";
  new TypeIt("#pesanAkhir", {
  strings: ["" + pesanAkhir2], startDelay: 100, speed: 60, cursor: true, deleteSpeed: 20, breakLines: false, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
  	  pesanAkhir.innerHTML = "" + pesanAkhir2;
  },}).go();
  }
  
  function initengahan(){
    ftAwal.style="display:none";loveIn.style="display:none";ket.style="display:none";
    Content.style = "opacity:1;margin-top:7vh";
    setTimeout(inipesan,200)
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
  function bqmuncul(){Content.style = "opacity:1;margin-top:5vh";fotostiker.style="display:none";pergeseran.style="display:none";ketgeser.style="display:none";bq.style = "position:relative;opacity:1;visibility:visible;margin-top:5vh;transform: scale(1);";setTimeout(kalimatakhir,200);}
  function bqhilang(){wallpaper.style="transform: scale(2);";bodyblur.style="opacity:.3";bq.style = "position:relative;transition:all .7s ease;";}
  
  function otomatis(){halo.style.opacity="0"; kalimat.style="opacity:0"; setTimeout(otolanj,400);}
  function otolanj(){halo.style.opacity="1";kalimat.style="opacity:1";}

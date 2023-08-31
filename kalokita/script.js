  jumlahKlik = 0;ftganti=0;fungsi=0;ftfungsi=0;fungsiAwal=0;fungsitimer=0;pesanwhatsapp = pesanWA.innerHTML;deffotostiker=fotostiker.src;Content.style = "opacity:1;margin-top:30vh;";wallpaper.style="opacity:0";
  document.getElementById("loveIn").onclick = function() {if(fungsiAwal==0){audio.play();fungsiAwal=1;loveIn.style="transition:all .7s ease;opacity:0";wallpaper.style="transform: scale(1.5);";ket.style="opacity:0";kot.style="opacity:0";setTimeout(mulainama,500)}}

  function fungsibaru(btn) {
  var tombol = document.getElementById("" + btn);
  var tombolParent = tombol.parentNode;
  
  var tombolPosisiX = Math.floor(Math.random() * 50) + 1; // Posisi X acak antara 1 dan 50
  var tombolPosisiY = Math.floor(Math.random() * 75) + 1; // Posisi Y acak antara 1 dan 50
  var rotasiAcak = Math.floor(Math.random() * 360); // Rotasi acak antara 0 dan 359

  tombol.style.position = "relative";
  tombol.style.left = tombolPosisiX + "px";
  tombol.style.top = tombolPosisiY + "px";
  tombol.style.transform = "rotate(" + rotasiAcak + "deg)";
  tombolParent.appendChild(tombol);

  jumlahKlik++;
  
  if(jumlahKlik == 3){
  	if(fungtom == 1){fungsigamau();}
      jumlahKlik=0;
  }
  }
  
  async function fungsigamau(){
  	await swalst.fire({title: '' + kataditolak.innerHTML, timer: 2000, imageUrl: '' + stikerditolak.src,});
   }

  var posisiAwalX = 0;var posisiAwalY = 0;var rotasiAwal = 0;
  function resetPosisi() {
    var tombol = document.getElementById("Bn");
  
    tombol.style.position = "relative";
    tombol.style.left = posisiAwalX + "px";
    tombol.style.top = posisiAwalY + "px";
    tombol.style.transform = "rotate(" + rotasiAwal + "deg)";
  }

  async function mulainama() {
           loveIn.style="display:none";ket.style="display:none";kot.style="display:none";
           Content.style = "opacity:1;margin-top:7vh";
           bodyblur.style="opacity:.7";
           wallpaper.style="transform: scale(1);";
           fotostiker.style="display:inline-flex;";
           setTimeout(ftmuncul,200);
           setTimeout(bqmuncul,500);
  }
  
  function ftmuncul(){
    if(ftganti==0){fotostiker.src = deffotostiker;}
    if(ftganti==1){fotostiker.src = fotostiker2.src;}
    if(ftganti==2){fotostiker.src = fotostiker3.src;}
    if(ftganti==3){fotostiker.src = fotostiker4.src;}
    if(ftganti==4){fotostiker.src = fotostiker5.src;}
    if(ftganti==5){fotostiker.src = fotostiker6.src;}
    if(ftganti==6){fotostiker.src = fotostiker7.src;}
    if(ftganti==7){fotostiker.src = fotostiker8.src;}
    if(ftganti==8){fotostiker.src = fotostiker9.src;}
    if(ftganti==9){fotostiker.src = fotostiker10.src;}
    
    fotostiker.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";
  }
  function fthilang(){fotostiker.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(.1)";}
  function jjfoto(){fotostiker.style.animation="rto .8s infinite alternate";setInterval(createHeart,200);}
  
  function akhiran(){
  bqhilang();fthilang();ftganti=6;setTimeout(ftmuncul,400);
  //halo.style="display:none";
  setTimeout(akhiran2,300);
  }
  function akhiran2(){
  bq.style="border:0;background:none;box-shadow:none";kalimat.innerHTML="";
  setTimeout(bqmuncul2,200);
  }
  
  function bqmuncul(){bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);margin-top:15px";setTimeout(mulaiketik1,200);fungsi=1;}
  function bqhilang(){wallpaper.style="transform: scale(2);";bodyblur.style="opacity:.3";bq.style = "position:relative;margin-top:15px;transition:all .7s ease;";kalimat.style="opacity:0;transform:scale(.3);";}
  function bqmuncul2(){bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);margin-top:0;border:0;background:none;box-shadow:none;padding:10px 27px;text-align:left";kalimat.style="opacity:1;transform:scale(1);font-size:13px;font-weight:300";setTimeout(ketAkhir,500);}
  function otokal() {kalimat.style="opacity:0;transform:scale(.3);";setTimeout(anikal,300);} 
  function anikal() {if (opsLcheck !== jumlahP) {setTimeout(otopsL,700);kalimat.style="opacity:1;transform:scale(1);";} else {setInterval(createHeart,400);kalimat.style="opacity:1;transform:scale(1.2);";}}
  function otopsL(){if (opsLcheck != 2) {opsL.style.opacity=".8";opsLclick=1;}}
  function wpcheck(){if(opsLcheck % 2 == 0){wallpaper.style="transform: scale(1.5);";} else {wallpaper.style="transform: scale(1);";}}
  function prbhn(){if (opsLcheck == jumlahP - 1) {kecepatan=55;/*var prg = document.getElementById("kalimat");prg.classList.add("kiri");*/}}
  
  function tombol(){wallpaper.style="transform: scale(1);";Tombol.style="opacity:1;transform: scale(1);";fungsi=1}
  //document.getElementById("By").onclick = function() {if(fungsi==1){menuju();}}
  async function menuju(){window.location = "https://api.whatsapp.com/send?phone=&text=" + pesanwhatsapp;muncultombol3();}

  kecepatan = 45;vketik1=kalimat.innerHTML;kalimat.innerHTML = "";
  function mulaiketik1(){
  kalimat.innerHTML = "";
  new TypeIt("#kalimat", {
  strings: [vketik1], startDelay: 50, speed: kecepatan, waitUntilVisible: true,
  afterComplete: function(){
    kalimat.innerHTML = vketik1;
    if (opsLcheck !== jumlahP) {otopsL();} else {muncultombol3();ftganti += 1;fthilang();setTimeout(ftmuncul, 300);setInterval(createHeart,200);}
  },}).go();
  }
  
  vketik2 = kalpertanyaan.innerHTML;kalpertanyaan.innerHTML="";kalpertanyaan.style="display:none";
  function mulaiketik2(){
  kalimat.innerHTML = "";
  new TypeIt("#kalimat", {
    strings: [vketik1],
    startDelay: 50,
    speed: kecepatan,
    waitUntilVisible: true,
  })
  .pause(500)
  .delete(100, { speed: 50 })
  .pause(300)
  .exec(gantifoto)
  .type("" + vketik2, { speed: 30 })
  .go()
  .pause(50)
  .exec(setelahselesai);
  }
  
  function gantifoto(){ftganti += 1;fthilang();setTimeout(ftmuncul, 300);}
  
  function setelahselesai() {
  kalimat.innerHTML = vketik2;
  if (opsLcheck !== jumlahP) {
    setTimeout(muncultombol2,500);
  } else {
    ftganti += 1;
    fthilang();
    setTimeout(ftmuncul, 300);
    setInterval(createHeart, 200);
  }
  }
  
  const jumlahP = document.querySelectorAll("#bq p").length - 1;
  var kalimatElements = document.querySelectorAll('[id^="kalimat"]');
  var kalimatList = {};

  kalimatElements.forEach(function(element, index) {
    if (element.id !== "kalimat") {
      kalimatList[index] = element.innerHTML;
    }
  });

  opsLclick=0;opsLcheck=1;ftganti=0;
  document.getElementById("bq").addEventListener("click", myCheck);
  
  function myCheck() {

  if(opsLclick==1){
  if (opsLcheck !== jumlahP) {
    
    if(document.getElementById("kalimat" + opsLcheck + "ngetik")){
        vketik1 = kalimatList[opsLcheck];
        prbhn();mulaiketik1();
    } else if(document.getElementById("kalimat" + opsLcheck + "ngetikv2")){
        vketik1 = kalimatList[opsLcheck];
        prbhn();mulaiketik2();
    } else {
        teksganti = kalimatList[opsLcheck];
        otokal();
        kalimat.innerHTML = teksganti;
    }
    
    ftganti += 1;fthilang();setTimeout(ftmuncul, 300);
    opsLcheck+=1;wpcheck();
    if (opsLcheck == 2) {setTimeout(muncultombol,500);}
  } else {
    //akhiran();
  }
  opsL.style.opacity="0";opsLclick=0;
  }
  
  }
  
  function fungsimau(){Tombol.style="";if(fungtom<3){setTimeout(function(){opsLclick=1;myCheck()},400)} else {menuju()}}
  function muncultombol(){resetPosisi();fungtom=1;Tombol.style="opacity:1;transform:scale(1)";}
  function muncultombol2(){resetPosisi();fungtom=2;By.innerHTML=penggantiBy.innerHTML;Bn.innerHTML=penggantiBn.innerHTML;Tombol.style="opacity:1;transform:scale(1)";}
  function muncultombol3(){fungtom=3;By.innerHTML="💌 Balas";Bn.style="display:none";Tombol.style="opacity:1;transform:scale(1)";}
  

const box = document.getElementById('pergeseran');
const directChildren = box.children.length;
console.log('Script ini dibuat oleh: Rayys | IG: @rayyarrr');
console.log('Lihat Script HTML Lainnya di www.feeldream.id');
console.log('Total Slide: ', directChildren);
totalPesan = directChildren;

var date = new Date();
var days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
var hours = date.getHours();
var minutes = date.getMinutes();

// Tambahkan awalan nol jika jam atau menit kurang dari 10
if (hours < 10) {hours = "0" + hours;}
if (minutes < 10) {minutes = "0" + minutes;}

var day = days[date.getDay()];
var dateNum = date.getDate();
var month = months[date.getMonth()];
var year = date.getFullYear();

console.log(hours + "." + minutes + " WIB - " + day + ", " + dateNum + " " + month + " " + year);
// Dapatkan elemen yang ingin ditambahkan watermark
var element = document.getElementById("Content");

// Buat elemen baru untuk menampung watermark
var watermark = document.createElement("div");

// Setel teks watermark dan propertinya
watermark.textContent = day + ", " + dateNum + " " + month + " " + year;
watermark.style = "color:white;opacity:.3;font-size:10px;position:fixed;bottom:25px;left:25px;z-index:2";

// Tambahkan elemen watermark ke dalam elemen utama
element.appendChild(watermark);

aktigeser=0;thisgeser=1;
//document.getElementById("bodyblur").onclick = function() {multifungsi()}

function multifungsi(){
  if(aktigeser==1){
    document.getElementById('pergeseran').scrollLeft += 300;
    hsementara();
    if(thisgeser==2){
       ftganti=2;
       fthilang();
    }
    if(thisgeser==3){
       ftganti=1;
       fthilang();
    }
    if(thisgeser==4){
       ftganti=0;
       fthilang();
    }
    if(thisgeser==5){
       ftganti=3;
       fthilang();
    }
    if(thisgeser==6){
       ftganti=4;
       fthilang();
    }
    if(thisgeser==totalPesan){setTimeout(pesanngetik,300);setTimeout(initerakhir,300);}
  }
  if(thisgeser==100){Tombol.style="";aksibalas();}
}

function terakhir(){kot.style="";}
varngetik = ngetik.innerHTML;ngetik.innerHTML="";
function pesanngetik(){
  	new TypeIt("#ngetik", {
      strings: ["" + varngetik], startDelay: 50, speed: 55, cursor: true,
      afterComplete: function(){
      	ngetik.innerHTML = varngetik;
          setInterval(berjatuhan,250);
          ftganti=5;fthilang();
          tmbl.innerHTML = "💌 Balas";Tombol.style="opacity:1;transform: scale(1)";thisgeser=100;
      },}).go();
  }

var elems = document.querySelectorAll("#pergeseran p");
function initerakhir(){
	pergeseran.style.padding="0 15px";
	elems.forEach(function(elem) {
       //elem.style.background = "none";
       //elem.style.border = "none";
       //elem.style.minHeight = "120px";
    });
}

document.getElementById("loveIn").onclick = function() {
      if(fungsiAwal==0){
        loveIn.style="transition:all .7s ease;opacity:0";
        ftAwal.style="transition:all .7s ease;opacity:0";
        ket.style="transition:all .7s ease;opacity:0";
        kot.style="transition:all .7s ease;opacity:0";
        wallpaper.style="";
        fungsiAwal=1;setTimeout(initengahan,300);
      }
    }
    function initengahan(){
    ftAwal.style="display:none";loveIn.style="display:none";ket.style="display:none";kot.style="display:none";
    Content.style = "opacity:1;margin-top:7vh";
    //wallpaper.style="";
    setTimeout(mulainama,200);audio.play();
  }
  
  async function mulainama() {
    setTimeout(pgmuncul,200);
    ftmuncul();
  }

  function hsementara(){
    //ketgeser.style="position:relative;";
    Tombol.style="";
    thisgeser+=1;aktigeser=0;setTimeout(munculkembali,500)
  }
  function munculkembali(){
    if(thisgeser<totalPesan){
      //ketgeser.style="position:relative;transform:scale(1);opacity:.7";
      Tombol.style="opacity:1;transform: scale(1)";
      aktigeser=1;
    }
    //if(thisgeser==totalPesan){tmbl.innerHTML = "💌 Balas";Tombol.style="opacity:1;transform: scale(1)";thisgeser=100;}
  }
  
  function aksiakhir(){
  	   pergeseran.style="position:relative;";
         //ketgeser.style="position:relative";
         Tombol.style="";
         setTimeout(aksibalas,500);
  }
  
  function ftmuncul(){
    if(ftganti==0){fotostiker.src = deffotostiker;}
    if(ftganti==1){fotostiker.src = fotostiker1.src;}
    if(ftganti==2){fotostiker.src = fotostiker2.src;}
    if(ftganti==3){fotostiker.src = fotostiker3.src;}
    if(ftganti==4){fotostiker.src = fotostiker4.src;}
    if(ftganti==5){fotostiker.src = fotostiker5.src;}
    if(ftganti==6){fotostiker.src = fotostiker6.src;}
    if(ftganti==7){fotostiker.src = fotostiker7.src;}
    if(ftganti<=10){fotostiker.style="display:inline-flex;opacity:1;transform:scale(1)";}
  }
  function fthilang(){fotostiker.style="display:inline-flex;opacity:0;transform:scale(0)";if(ftganti<10){setTimeout(ftmuncul,300)}}
  function jjfoto(){fotostiker.style.animation="rto .8s infinite alternate";}
  
  function pgmuncul(){pergeseran.style="position:relative;opacity:1;transform:scale(1);";setTimeout(munculkembali,500)}
  function bqmuncul(){Content.style = "opacity:1;margin-top:8vh";fotostiker.style="display:none";pergeseran.style="display:none";Tombol.style="";bq.style = "position:relative;opacity:1;visibility:visible;margin-top:5vh;transform: scale(1);";setTimeout(kalimatakhir,200);ftganti=0;fthilang();}
  function bqhilang(){wallpaper.style="transform: scale(2);";bodyblur.style="opacity:.3";bq.style = "position:relative;transition:all .7s ease;";}
  
  async function aksibalas(){await swals.fire('OK!', 'Kirim pesan ke WA aku, ya!', 'success');window.location = "https://api.whatsapp.com/send?phone=" + nomorhp + "&text=" + pesanwhatsapp;Tombol.style="opacity:1;transform: scale(1)";}
   
Content.style="display:none";
setTimeout(function(){
//window.addEventListener("load", (event) => {
  var overlay = document.querySelector(".overlay");
  overlay.style.display = "none";

  wallpaper.style="transform:scale(3);opacity:.5";
  Content.style = "opacity:1;margin-top:0";
//});
},800);

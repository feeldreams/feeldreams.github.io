pesanwhatsapp = "";
  
const body = document.querySelector("body"); 
const swals = Swal.mixin({allowOutsideClick: false, imageHeight: 90,}); 
audio = new Audio('' + linkmp3.src);

/* Hati Berjatuhan */
function berjatuhan() {
  const heart = document.createElement("div");
  heart.innerHTML = "<svg class='line spin' style='opacity:.4;' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(2.550170, 3.550158)'><path d='M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z'></path><path d='M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842'></path></g></svg>";
  heart.className = "heart-icon";
  heart.style.left = (Math.random() * 95) + "vw";
  heart.style.animationDuration = (Math.random() * 3) + 2 + "s";
  document.body.appendChild(heart);
}

setInterval(function() {
  var heartArr = document.querySelectorAll(".heart-icon");
  if (heartArr.length > 100) {
    heartArr[0].remove();
  }
}, 100);
/* Akhir Hati Berjatuhan */

/*teksjudulakhir = judulakhir.innerHTML; judulakhir.innerHTML="";
tekskalimatakhir = kalimatakhir.innerHTML; kalimatakhir.innerHTML="";
tekspalingakhir = palingakhir.innerHTML; palingakhir.innerHTML="";
*/
  initextsec2 = textsec2.innerHTML;textsec2.innerHTML="";
  function animasiketik(){
  	teks4.style="margin-top:-70px;margin-bottom:0;transform:scale(.8);transition:all .7s ease";
  	scrollContainer.style="transform: scale(1)";
  	new TypeIt("#textsec2", {
      strings: ["" + initextsec2], startDelay: 200, speed: 30, /* deff 55 */ cursor: false,
      afterComplete: function(){
      	textsec2.innerHTML = initextsec2;
          setInterval(berjatuhan,200);
          clearInterval(scrollInterval);
          
          /*var nim = document.getElementById("nimasi");
          nim.classList.add("textspin");
          */
         
          //smn();
      },}).go();
   }
   
fungsi=0;fungsiklik=0;skrg=1;
function funSentuh(){
  sentuh.style="margin-top:100px;transform:scale(2)";
  setTimeout(function() {
        if(fungsi==0){
           //initom.style="opacity:0;bottom:0;";
           window.scrollBy({top: tinggi,behavior: 'smooth'});
           fungsi = 1;
           skrg++;
           if(skrg==2){fungsi=0;setTimeout(animasiketik,1200);setTimeout(function() {teks4.style="transform:scale(1);transition:all .7s ease";}, 700);}
        }
  }, 100);
}

function menuju(){window.location = "https://api.whatsapp.com/send?phone=&text=" + pesanwhatsapp}

tinggi = inisection.offsetHeight;
function tentukantinggi(){tinggi = inisection.offsetHeight;}
setInterval(tentukantinggi,500);
console.log("Tinggi: " + tinggi);

fungsiAud=0;function playaud(){if(fungsiAud==0){fungsiAud=1;audio.play();}}
function keatas(){window.scrollTo(0, 0);}

window.addEventListener("load", (event) => {
//function mulaiyuk(){
    window.scrollTo(0, 0);
    setTimeout(keatas,500);
    
    var overlay = document.querySelector(".loading-message");
    overlay.style.display = "none";
    var tomlv = document.querySelector(".blocklove");
    tomlv.style.display = "flex";
    
})
//}
//setTimeout(mulaiyuk,1400);
first_stiker.style="transform: scale(0)";
sentuh.style="transform: scale(0)";
function showSentuh(){sentuh.style="transform: scale(1);";}
vgantiTeks1 = 0;
function gantiTeks1(){
    if(vgantiTeks1 == 0){gantiFoto1();teks1.style="transform: scale(.3);transition:all .75s ease";teks3.style="transform: scale(0);";vgantiTeks1++;setTimeout(gantiTeks1,300);}
    else {vgantiTeks1 = teks2.innerHTML;teks1.innerHTML = "";teks3.style="display:none";teks1.style="transform: scale(.9);transition:all .75s ease";gantiTeks1nimasi();}
}
function gantiFoto1(){
    first_stiker.style="transform: scale(0);";
    setTimeout(function() {
        first_stiker.style.transform = "scale(1)";
        inistiker1.src = inistiker2.src;
    }, 300);
}
function gantiTeks1nimasi(){
  	new TypeIt("#teks1", {
      strings: ["" + vgantiTeks1], startDelay: 10, speed: 35, cursor: true,
      afterComplete: function(){
          teks1.innerHTML = vgantiTeks1;
          showSentuh();
      },}).go();
   }
document.getElementById("loveIn").onclick = function() {
    playaud();
    var overlay = document.querySelector(".overlay");
    overlay.style.display = "none";
    //initom.style="";
    first_stiker.style="transform: scale(1)";
    setTimeout(function() {
        teks3.style.transform = "scale(1)";
    }, 300);

    setTimeout(gantiTeks1, 3000);

    ScrollReveal({ reset: true });
    ScrollReveal().reveal(".show-once", { reset: false});
    ScrollReveal().reveal(".txt", {duration: 500,origin: "top",distance: "50px"});
    ScrollReveal().reveal(".title", {delay: 20, duration: 1500,origin: "top",distance: "50px", easing: "cubic-bezier(0.5, 0, 0, 1)", rotate: { x: 20, z: -10 }});
    ScrollReveal().reveal(".fade-in", {delay: 200, duration: 2400,move: 0});
    ScrollReveal().reveal(".scaleUp", {delay: 100, duration: 1500, scale: .5, move: 0});
    ScrollReveal().reveal(".flip", {delay: 200, duration: 2000, rotate: { x: 20, z: 20}});
    ScrollReveal().reveal(".slide-right", {duration: 1000,origin: "left",distance: "300px",easing: "ease-in-out"});
    ScrollReveal().reveal(".slide-up", {duration: 1000, origin: "bottom", distance: "100px", easing: "cubic-bezier(.37,.01,.74,1)", opacity: 0, scale: 0.5});
    
    document.addEventListener('scroll', function(e) {
        let documentHeight = document.body.scrollHeight;
        let currentScroll = window.scrollY + window.innerHeight;
        let modifier = 200; 
        if(currentScroll + modifier > documentHeight) {
            console.log('Sudah sampai bawah!');
            //initom.style="opacity:0;bottom:0";
        } else {
            //initom.style="";
        }
    })
}

  const scrollContainer = document.getElementById("scroll-container");
  const textContainer = document.getElementById("textsec2");

function autoScroll() {
    scrollContainer.scrollTop += 10;
}

const scrollInterval = setInterval(autoScroll, 50); 

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

var element = document.querySelector("body");var watermark = document.createElement("div");

// Setel teks watermark dan propertinya
watermark.textContent = dateNum + " " + month + " " + year + " — Rayys";
watermark.style = "color:white;opacity:.5;font-size:10px;position:fixed;bottom:25px;left:25px;z-index:150";
element.appendChild(watermark);

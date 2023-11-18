pesanwhatsapp = "";
  
const body = document.querySelector("body"); const swalst = Swal.mixin({timer: 2777, allowOutsideClick: false, showConfirmButton: false, timerProgressBar: true, imageHeight: 90,}); audio = new Audio('' + linkmp3.src); 

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
//setInterval(berjatuhan, 200);
/* Akhir Hati Berjatuhan */

/*teksjudulakhir = judulakhir.innerHTML; judulakhir.innerHTML="";
tekskalimatakhir = kalimatakhir.innerHTML; kalimatakhir.innerHTML="";
tekspalingakhir = palingakhir.innerHTML; palingakhir.innerHTML="";
*/
  initextsec2 = textsec2.innerHTML;textsec2.innerHTML="";
  function mulaitextseco(){
  	stikersec2.style="margin-top:-70px;margin-bottom:0;transform:scale(.8);transition:all .7s ease";
  	scrollContainer.style="transform: scale(1)";
  	new TypeIt("#textsec2", {
      strings: ["" + initextsec2], startDelay: 200, speed: 30, /* deff 55 */ cursor: false,
      afterComplete: function(){
      	textsec2.innerHTML = initextsec2;
          setInterval(berjatuhan,200);
          clearInterval(scrollInterval);
          
          stikersec2.style="margin-top:-70px;margin-bottom:0;transform:scale(0);transition:all .7s ease";
          setTimeout(function() {
              stikersec2.style = "margin-top:-70px;margin-bottom:0;transform:scale(.8);transition:all .7s ease";
              inistiker3.src = inistiker4.src;
          }, 300);
      },}).go();
   }
   
fungsi=0;fungsiklik=0;skrg=1;iniaja=0;
function tes(){
  sentuh.style="margin-top:100px;transform:scale(2)";
  setTimeout(function() {
        if(fungsi==0){
           //initom.style="opacity:0;bottom:0;";
           window.scrollBy({top: tinggi,behavior: 'smooth'});
           fungsi = 1;
           skrg++;
           skrg++;
           //if(skrg==2){setTimeout(smn,1200);}
           if(skrg==3){fungsi=0;setTimeout(mulaitextseco,1700);setTimeout(function() {stikersec2.style="transform:scale(1);transition:all .7s ease";}, 600);}
           if(skrg==4){setTimeout(katateksnimasi,700);}
           if(skrg==5){}
           //if(skrg>=6){initom.style="opacity:0;bottom:0;";}
        }
  }, 100);
}
  function smn(){fungsi=0;initom.style="";}

  function muncultombol(){fungtom=1;Tombol.style="opacity:1;transform:scale(1)";}
  function muncultombol2(){Tombol2.style="opacity:1;transform:scale(1)";}
  
function aksiakhir() {
  if(fungsiklik==0){
    fungsiklik=1;
    setTimeout(katajudul,100)
  }
}

function katajudul(){
  	new TypeIt("#judulakhir", {
      strings: ["" + teksjudulakhir], startDelay: 50, speed: 50, cursor: true,
      afterComplete: function(){
      	judulakhir.innerHTML = teksjudulakhir;
          setTimeout(katakata,400);
      },}).go();
}
function katakata(){
	  new TypeIt("#kalimatakhir", {
      strings: ["" + tekskalimatakhir], startDelay: 50, speed: 48, cursor: true,
      afterComplete: function(){
      	kalimatakhir.innerHTML = tekskalimatakhir;
          //judulakhir.style="opacity:0;transform:scale(0);";
          setTimeout(teksmuncul,20);
          setInterval(berjatuhan,200);
          setTimeout(kataakhir,700);
      },}).go();
}
function teksmuncul(){
  //teksjudulakhir2 = "I Love You âœ¨";
	//judulakhir.innerHTML=teksjudulakhir2;
	//judulakhir.style="font-family:var(--caveat);font-size:27px";
	//setTimeout(jjteksnim,300);
	stikerakhir.style="opacity:0;transform:scale(0)";
	setTimeout(gantifotoakhir,400);
}
function jjteksnim(){judulakhir.style.animation="rto .8s infinite alternate";}
function gantifotoakhir(){stikerakhir.src=stikerakhir2.src;stikerakhir.style="";}
function kataakhir(){
	  new TypeIt("#palingakhir", {
      strings: ["" + tekspalingakhir], startDelay: 50, speed: 50, cursor: true,
      afterComplete: function(){
      	palingakhir.innerHTML = tekspalingakhir;
          setTimeout(muncultombol3,500);
      },}).go();
}
function muncultombol3(){fungtom2=1;TombolWA.style="opacity:1;transform:scale(1)";}
function menuju(){if(fungtom2==1){window.location = "https://api.whatsapp.com/send?phone=&text=" + pesanwhatsapp;}}

tinggi = inisection.offsetHeight;
function tentukantinggi(){tinggi = inisection.offsetHeight;}
setInterval(tentukantinggi,200);
console.log(tinggi);

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
      strings: ["" + vgantiTeks1], startDelay: 10, speed: 30, cursor: true,
      afterComplete: function(){
          teks1.innerHTML = vgantiTeks1;
          showSentuh();
      },}).go();
   }

var sudahKlik = true;
document.getElementById('loveIn').innerHTML = '<style>.lovein svg{animation:none;stroke:#ff0000;stroke-width:1.3;fill:none;width:35px;height:35px}</style><label class="lovein"><svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(2.550170, 3.550158)"><path d="M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z"></path><path d="M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842"></path></g></svg></label><p id="ket">Sentuh LOVEnya!</p>';

document.getElementById("loveIn").onclick = function() {
    if (sudahKlik) {
    playaud();
    var overlay = document.querySelector(".overlay");
    overlay.style.display = "none";
    //initom.style="";
    first_stiker.style="transform: scale(1)";
    /*setTimeout(function() {
        teks3.style.transform = "scale(1)";
    }, 300);
    */

    setTimeout(showSentuh, 400);

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
            //setTimeout(aksiakhir,10);
        } else {
            //initom.style="";
        }
    })
} else {
    sudahKlik = true; // Tandai bahwa tombol sudah diklik
    document.getElementById('loveIn').innerHTML = '<style>.lovein svg{animation:none;stroke:#ff0000;stroke-width:1.3;fill:none;width:35px;height:35px}</style><label class="lovein"><svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(2.550170, 3.550158)"><path d="M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z"></path><path d="M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842"></path></g></svg></label><p id="ket">Sentuh LOVEnya!</p>';
}
}

  const scrollContainer = document.getElementById("scroll-container");
  const textContainer = document.getElementById("textsec2");

function autoScroll() {
    scrollContainer.scrollTop += 10;
}

const scrollInterval = setInterval(autoScroll, 50); 

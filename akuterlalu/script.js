function showDiv() {pergantian();setTimeout(kpemb,100);document.getElementById('Content').style = "opacity:1;margin-top:10vh;animation:kont 5s infinite;";document.querySelector("body").style.animation = "none 8s ease infinite";} function kpemb() {bq.style = "opacity:1;visibility:visible;margin-top:5px";}
function tombol(){contTom.style="opacity:1;transform: scale(1);";ftom=1;} ftom=0; function fakhiran(){document.getElementById("akhiran").style = "display:inline-flex";}
function otomatis() {befanimkata();setTimeout(animkata,200);} function befanimkata(){kalimat.style="transform:scale(.3);";} function animkata() {kalimat.style="transform:scale(1);";}
function otomatis2() {befanimkataa();setTimeout(animkataa,200);} function befanimkataa(){kalimatc.style="transform:scale(.3);font-size:14px;margin-top:30px;";} function animkataa() {kalimatc.style="transform:scale(1);font-size:14px;margin-top:30px;";}
function finalakhir(){ftom=2;otomatis2();By.innerHTML = "Kirim Pesan";kalimatc.innerHTML = "Jawabanmu: " + pesanwhatsapp;} function sjawab(){if(ftom==1){kalimatc.innerHTML = "";otomatis2();jawab();} if(ftom==2){menuju();}}
function setel(){} function setel2(){bgm.play();} 
var aa=0,katangetik;function ngetik() {if(aa<katangetik.length){kalimat.innerHTML += katangetik.charAt(aa);aa++;setTimeout(ngetik,50);}}
function bawahlagi(){kalimatc.style="margin-top:30px;";kalimatc.innerHTML = emot;}

function tfkata(){fkata+=1;} function bersihkan(){kalimat.innerHTML = "";}

  fkata=1;function gantikata(){

        if(fkata==1){otomatis();kalimat.innerHTML = kata1;}

        if(fkata==2){otomatis();kalimat.innerHTML = kata2;fotosatu.style="display:none";fotodua.style="display:inline-flex;"}

        if(fkata==3){otomatis();kalimat.innerHTML = kata3;}

        if(fkata==4){otomatis();kalimat.innerHTML = kata4;fotodua.style="display:none";fototiga.style="display:inline-flex;"}

        if(fkata==5){otomatis();kalimat.innerHTML = kata5;}

        if(fkata==6){otomatis();kalimat.innerHTML = kata6;fototiga.style="display:none";fotoempat.style="display:inline-flex";}

        if(fkata==7){otomatis();kalimat.innerHTML = kata7;setInterval(berjatuhan,200);fotoempat.style="display:none";fotolima.style="display:inline-flex";}

        setTimeout(tfkata, 300);

  }

async function menuju(){await swals.fire('Kirim pesan ke WhatsApp aku, ya!');window.location = "https://api.whatsapp.com/send?phone=&text=" + pesanwhatsapp;}
       async function jawab(){

           var { value: jawaban } = await swals.fire({

               title: 'Ketik Pesan Kamu &#128073;&#128072;', 

               input: 'text', allowOutsideClick: false, showCancelButton: false,

           });

           if(jawaban && jawaban.length < 21){

           	window.jawaban = jawaban;

               pesanwhatsapp = jawaban;

               finalakhir();

           } else {

               await swals.fire('Ups!', 'Jawaban tidak boleh kosong atau lebih dari 20 karakter, ya!');jawab();

           }

       }

Content.style="display:none";
window.addEventListener("load", (event) => {
  var overlay = document.querySelector(".overlay");
  overlay.style.display = "none";

  wallpaper.style="transform:scale(1.75);opacity:.3";
  Content.style = "opacity:1;margin-top:0";
});
    fungsiAwal=0;
    document.getElementById("loveIn").onclick = function() {
      if(fungsiAwal==0){
        loveIn.style="transition:all .7s ease;opacity:0";
        ket.style="transition:all .7s ease;opacity:0";
        kot.style="transition:all .7s ease;opacity:0";
        wallpaper.style="opacity:.4";
        loadfoto();
        fungsiAwal=1;setTimeout(initengahan,300);
      }
    }
  function initengahan(){
    loveIn.style="display:none";ket.style="display:none";kot.style="display:none";
    Content.style = "opacity:1;margin-top:7vh";
    //wallpaper.style="";
    setTimeout(pertama,200);
  }

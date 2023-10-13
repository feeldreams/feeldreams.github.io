function showDiv() {pergantian();setTimeout(kpemb,100);document.getElementById('Content').style = "opacity:1;margin-top:10vh;animation:kont 5s infinite;";document.querySelector("body").style.animation = "none 8s ease infinite";} function kpemb() {bq.style = "opacity:1;visibility:visible;margin-top:5px";}
  
  function loadbrn(){
  	fotosatu.src = gambar1;
      fotodua.src = gambar2;
      fototiga.src = gambar3;
      fotoempat.src = gambar4;
      fotolima.src = gambar5;
      /*fotoenam.src = gambar6;
      fototujuh.src = gambar7;
      fotodelapan.src = gambar8;
      fotosembilan.src = gambar9;*/
  }

  function tombol(){contTom.style="opacity:1;transform: scale(1);";ftom=1;} ftom=0; function fakhiran(){document.getElementById("akhiran").style = "display:inline-flex";}
  const swals = Swal.mixin({allowOutsideClick: false, cancelButtonColor: '#FF0040',}); const swalsy = Swal.mixin({confirmButtonText: 'Iya', allowOutsideClick: false,}); const swalst = Swal.mixin({allowOutsideClick: false, showConfirmButton: false, timer: 1200, timerProgressBar: true, didOpen: () => {Swal.showLoading();const b = Swal.getHtmlContainer().querySelector('b');timerInterval = setInterval(() => {Swal.getTimerLeft()}, 100)},willClose: () => {clearInterval(timerInterval)}}); const style = document.createElement('style'); var today = new Date();var dd = String(today.getDate()).padStart(2, '0');var mm = String(today.getMonth() + 1).padStart(2, '0');var yyyy = today.getFullYear();const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];today = dd + ' ' + monthNames[today.getMonth()] + ' ' + yyyy;
  function otomatis() {befanimkata();setTimeout(animkata,200);} function befanimkata(){kalimat.style="transform:scale(.5);";} function animkata() {kalimat.style="transform:scale(1);";}

  function otomatis2() {befanimkataa();setTimeout(animkataa,200);} function befanimkataa(){kalimatc.style="transform:scale(.3);font-size:14px;margin-top:30px;";} function animkataa() {kalimatc.style="transform:scale(1);font-size:14px;margin-top:30px;";}

  function finalakhir(){ftom=2;otomatis2();By.innerHTML = "Kirim Pesan";kalimatc.innerHTML = "Jawabanmu: " + pesanwhatsapp;} 
  function sjawab_y(){if(ftom==1){kalimatc.innerHTML = "";otomatis2();jawab();} if(ftom==2){menuju();}}
  async function jawab_y(){await swalst.fire({title: '' + pesanjawab_y, timer: 2000, imageUrl: '' + stikerpesanjawab_y.src,});}
  async function jawab_n(){await swalst.fire({title: '' + pesanjawab_n, timer: 2000, imageUrl: '' + stikerpesanjawab_n.src,});}
  
  var aa=0,katangetik;function ngetik() {if(aa<katangetik.length){kalimat.innerHTML += katangetik.charAt(aa);aa++;setTimeout(ngetik,50);}}
  function bawahlagi(){ftganti += 1;fthilang();setTimeout(ftmuncul, 180);kalimatc.style="margin-top:10px;";kalimatc.innerHTML = emot;}
  function kemunculanber(){setInterval(berjatuhan,200);}
  
  function tfkata(){fkata+=1;} function bersihkan(){kalimat.innerHTML = "";}
  
  const textContainer = document.getElementById('text-container');
  let index = 0;
  function displayText() {
  kalimat.style.display = "none";
  if (index < perkata.length) {
    const word = document.createElement('span');
    word.className = 'word';
    word.textContent = perkata[index];
    textContainer.appendChild(word);
    index++;

    if (perkata[index - 1] === "Bagi PAP") {
      const lineBreak = document.createElement('br');
      textContainer.appendChild(lineBreak);
    }

    setTimeout(() => {
      word.style.opacity = 1;
    }, 80);

    setTimeout(() => {
      displayText();
    }, 800);
  } else {
    setInterval(berjatuhan, 200);
    //setTimeout(bawahlagi, 500);
    //setTimeout(tombol,500);
  }
}
    
  ftganti = 1;
  function ftmuncul(){
    //if(ftganti==1){fotosatu.src = deffotostiker;}
    if(ftganti==2){fotosatu.src = fotodua.src;}
    if(ftganti==3){fotosatu.src = fototiga.src;}
    if(ftganti==4){fotosatu.src = fotoempat.src;}
    if(ftganti==5){fotosatu.src = fotolima.src;}
    
    fotosatu.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";
  }
  function fthilang(){fotosatu.style="display:inline-flex;opacity:1;transition:all .5s ease;transform:scale(.3)";}
    
  fkata=1;function gantikata(){
        if(fkata==1){otomatis();kalimat.innerHTML = kata1;}
        if(fkata==2){otomatis();kalimat.innerHTML = kata2;}
        if(fkata==3){otomatis();kalimat.innerHTML = kata3;}
        if(fkata==4){kalimat.innerHTML="";displayText();}
        setTimeout(tfkata, 200);
        if(fkata!=1){ftganti += 1;fthilang();setTimeout(ftmuncul, 180);}
  }

Content.style="display:none";
window.addEventListener("load", (event) => {
  var overlay = document.querySelector(".overlay");
  overlay.style.display = "none";
  loadfoto();
  wallpaper.style="opacity:.3";
  Content.style = "opacity:1;margin-top:25vh";
});

    fungsiAwal=0;
    document.getElementById("loveIn").onclick = function() {
      if(fungsiAwal==0){
        loveIn.style="transition:all .7s ease;opacity:0";
        ket.style="transition:all .7s ease;opacity:0";
        fungsiAwal=1;setTimeout(initengahan,300);
      }
    }
    
  function initengahan(){
    loveIn.style="display:none";
    ket.style="display:none";
    Content.style = "opacity:1;margin-top:7vh";
    setTimeout(pertama,200);
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


function showDiv() {Content.style = "opacity:1;margin-top:15vh;";ket.style="margin-top:30px";}
  function memulai(){suratin.style="transition:all 1s ease;transform:scale(.1);opacity:0";ket.style="transition:all 1s ease;transform:scale(.1);opacity:0";setTimeout(pesan,300);}
  function kpemb() {suratin.style="display:none";ket.style="display:none";fotoakhir.style="display:inline-flex;transform:scale(1);";Content.style = "opacity:1;margin-top:2vh;";bq.style = "opacity:1;visibility:visible;margin-top:5px";setTimeout(ngetik,200);}
  
  function tombol(){Tombol.style="margin-top:15px;opacity:1;transform: scale(1);";ftom=1;} ftom=0; function fakhiran(){document.getElementById("akhiran").style = "display:inline-flex";}
  const swals = Swal.mixin({allowOutsideClick: false, cancelButtonColor: '#FF0040', imageWidth: 90, imageHeight: 100,}); 
  const swalst = Swal.mixin({allowOutsideClick: false, showConfirmButton: false, timer: 3200, timerProgressBar: true, imageWidth: 90, imageHeight: 90,}); const style = document.createElement('style'); var today = new Date();var dd = String(today.getDate()).padStart(2, '0');var mm = String(today.getMonth() + 1).padStart(2, '0');var yyyy = today.getFullYear();const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];today = dd + ' ' + monthNames[today.getMonth()] + ' ' + yyyy;
  function setel(){audio.play();} function setel2(){bgm.play();} function sjawab(){if(ftom==1){Tombol.style="display:none";jawab();}}
  
  var aa=0,katangetik;
  function ngetik() {
    new TypeIt("#kalimat", {
      strings: ["" + katangetik], startDelay: 50, speed: 50, cursor: true,
      afterComplete: function(){
      	kalimat.innerHTML = katangetik;
        kalimatc.style="margin-top:30px;margin-bottom:10px";
        setTimeout(ngetik2,300);
      },}).go();
  }
  var ai=0,katangetik2;
  function ngetik2() {
    new TypeIt("#kalimatc", {
      strings: ["" + katangetik2], startDelay: 50, speed: 50, cursor: true,
      afterComplete: function(){
      	kalimatc.innerHTML = katangetik2;
        setTimeout(tombol,300);
      },}).go();
    }

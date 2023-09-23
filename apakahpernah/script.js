function showDiv() {
            pergantian();
            setTimeout(kpemb, 100);
            document.getElementById('Content').style = "opacity:1;margin-top:10vh;animation:kont 5s infinite;";
            document.querySelector("body").style.animation = "none 8s ease infinite";
        }

        function kpemb() {
            bq.style = "opacity:1;visibility:visible;margin-top:5px";
        }

function tombol() {
            contTom.style = "opacity:1;transform: scale(1);";
            ftom = 1;
        }
        ftom = 0;

        function fakhiran() {
            document.getElementById("akhiran").style = "display:inline-flex";
        }
        const swals = Swal.mixin({
            allowOutsideClick: false,
            cancelButtonColor: '#FF0040',
        });
        const swalsy = Swal.mixin({
            confirmButtonText: 'Iya',
            allowOutsideClick: false,
        });
        const swalst = Swal.mixin({
            allowOutsideClick: false,
            showConfirmButton: false,
            timer: 1200,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const b = Swal.getHtmlContainer().querySelector('b');
                timerInterval = setInterval(() => {
                    Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        });
        const style = document.createElement('style');
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September",
            "Oktober", "November", "Desember"
        ];
        today = dd + ' ' + monthNames[today.getMonth()] + ' ' + yyyy;

        function otomatis() {
            befanimkata();
            setTimeout(animkata, 200);
        }

        function befanimkata() {
            kalimat.style = "transform:scale(.5);";
        }

        function animkata() {
            kalimat.style = "transform:scale(1);";
        }

        function otomatis2() {
            befanimkataa();
            setTimeout(animkataa, 200);
        }

        function befanimkataa() {
            kalimatc.style = "transform:scale(.3);font-size:14px;margin-top:30px;";
        }

        function animkataa() {
            kalimatc.style = "transform:scale(1);font-size:14px;margin-top:30px;";
        }

        function finalakhir() {
            ftom = 2;
            otomatis2();
            By.innerHTML = "Kirim Pesan";
            kalimatc.innerHTML = "Jawabanmu: " + pesanwhatsapp;
        }

        function sjawab() {
            if (ftom == 1) {
                kalimatc.innerHTML = "";
                otomatis2();
                jawab();
            }
            if (ftom == 2) {
                menuju();
            }
        }

        var aa = 0,
            katangetik;

        function ngetik() {
            if (aa < katangetik.length) {
                kalimat.innerHTML += katangetik.charAt(aa);
                aa++;
                setTimeout(ngetik, 50);
            }
        }

        function bawahlagi() {
            fotoenam.style = "display:none";
            fototujuh.style = "display:inline-flex";
            setInterval(berjatuhan, 200);
            kalimatc.style = "margin-top:10px;";
            kalimatc.innerHTML = emot;
        }
        const body = document.querySelector("body");
        audio = new Audio('' + linkmp3.src);

        function berjatuhan() {
            const heart = document.createElement("div");
            heart.className = "fas fa-heart";
            heart.style.left = (Math.random() * 90) + "vw";
            heart.style.animationDuration = (Math.random() * 3) + 2 + "s";
            body.appendChild(heart);
        }
        setInterval(function name(params) {
            var heartArr = document.querySelectorAll(".fa-heart");
            if (heartArr.length > 100) {
                heartArr[0].remove()
            }
        }, 100);

        function tfkata() {
            fkata += 1;
        }

        function bersihkan() {
            kalimat.innerHTML = "";
        }

        fkata = 1;

        function gantikata() {
            if (fkata == 1) {
                otomatis();
                kalimat.innerHTML = kata1;
            }
            if (fkata == 2) {
                otomatis();
                kalimat.innerHTML = kata2;
                fotosatu.style = "display:none";
                fotodua.style = "display:inline-flex;"
            }
            if (fkata == 3) {
                otomatis();
                kalimat.innerHTML = kata3;
                fotodua.style = "display:none";
                fototiga.style = "display:inline-flex;"
            }
            if (fkata == 4) {
                otomatis();
                kalimat.innerHTML = kata4;
                fototiga.style = "display:none";
                fotoempat.style = "display:inline-flex";
            }
            if (fkata == 5) {
                otomatis();
                kalimat.innerHTML = kata5;
                fotoempat.style = "display:none";
                fotolima.style = "display:inline-flex";
            }
            if (fkata == 6) {
                otomatis();
                kalimat.innerHTML = kata6;
                fotolima.style = "display:none";
                fotoenam.style = "display:inline-flex";
            }
            if (fkata == 7) {
                otomatis();
                kalimat.innerHTML = kata7;
                fotoenam.style = "display:none";
                fototujuh.style = "display:inline-flex";
            }
            if (fkata == 8) {
                kalimat.innerHTML = "";
                ngetik();
                fototujuh.style = "display:none";
                fotodelapan.style = "display:inline-flex";
                setInterval(berjatuhan, 200);
            }
            setTimeout(tfkata, 300);
        }

Content.style = "display:none";
        window.addEventListener("load", (event) => {
            var overlay = document.querySelector(".overlay");
            overlay.style.display = "none";
            loadfoto();
            wallpaper.style = "opacity:.5";
            Content.style = "opacity:1;margin-top:25vh";
        });

        fungsiAwal = 0;
        document.getElementById("loveIn").onclick = function () {
            if (fungsiAwal == 0) {
                loveIn.style = "transition:all .7s ease;opacity:0";
                ket.style = "transition:all .7s ease;opacity:0";
                fungsiAwal = 1;
                setTimeout(initengahan, 300);
            }
        }

        function initengahan() {
            loveIn.style = "display:none";
            ket.style = "display:none";
            Content.style = "opacity:1;margin-top:7vh";
            setTimeout(pertama, 200);
        }

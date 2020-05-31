
var url_ = "http://localhost/hitung-bangun-datar/api/hitungbangundatar"
var curForm  = null;
var satuan = "cm";
function fill(id) {
    var x = document.getElementById(id).value;
    if(x == "" || x == null || x == 0)
        document.getElementById(id).value = 1;
}

function show(id) {
    if(curForm != null)
        hide(curForm);
    curForm = id;
    document.getElementById("satuanF").style.display = "block";
    document.getElementById(id).style.display = "block";
}

function hide(id) {
    document.getElementById("satuanF").style.display = "none";
    document.getElementById(id).style.display = "none";
    curForm = null;
    resetAllValues();
}

function mulaiHitung() {
    document.getElementById('welcome').style.display = "none";
    document.getElementById('home').style.display = "block";
}

function resetAllValues () {
    $('#form_hitung').find('input').val('');
    $('#answer').html("");
}
function changeSatuan() {
    satuan = document.getElementById("satuan").value;
}
//=====================================================================
//========================= Hitung-hitungan ===========================
//=====================================================================
//-- Segitiga --
function lSegitiga() {
    var alas = document.getElementById('alass').value;
    var tinggi = document.getElementById('tinggis').value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if(this.status == 200) {
                var r = JSON.parse(this.responseText);
                
                document.getElementById("answer").innerHTML = "Luas Segitiga = "+r.hasil+" "+satuan+"²";
            }
            else if(this.status == 400) {
                document.getElementById("answer").innerHTML = "Tidak boleh kosong / 0";
            }
        }
    };
    var params = url_+"/luas_segitiga?alas="+alas+"&tinggi="+tinggi;
    xhttp.open("GET", params, true);
    xhttp.send();
}
function kSegitiga() {
    var sisi_1 = document.getElementById('sisis_1').value;
    var sisi_2 = document.getElementById('sisis_2').value;
    var sisi_3 = document.getElementById('sisis_3').value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if(this.status == 200) {
                var r = JSON.parse(this.responseText);
                document.getElementById("answer").innerHTML = "Keliling Segitiga = "+r.hasil+" "+satuan;
            }
            else if(this.status == 400) {
                document.getElementById("answer").innerHTML = "Tidak boleh kosong / 0";
            }
        }
    };
    var params = url_+"/keliling_segitiga?sisi_1="+sisi_1+"&sisi_2="+sisi_2+"&sisi_3="+sisi_3;
    xhttp.open("GET", params, true);
    xhttp.send();
}
//--------------
//-- Persegi --
function lPersegi() {
    var sisi = document.getElementById('lsisip').value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if(this.status == 200) {
                var r = JSON.parse(this.responseText);
                document.getElementById("answer").innerHTML = "Luas Persegi = "+r.hasil+" "+satuan+"²";
            }
            else if(this.status == 400) {
                document.getElementById("answer").innerHTML = "Tidak boleh kosong / 0";
            }
        }
    };
    var params = url_+"/luas_persegi?sisi="+sisi;
    xhttp.open("GET", params, true);
    xhttp.send();
}
function kPersegi() {
    var sisi = document.getElementById('ksisip').value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if(this.status == 200) {
                var r = JSON.parse(this.responseText);
                document.getElementById("answer").innerHTML = "Keliling Persegi = "+r.hasil+" "+satuan;
            }
            else if(this.status == 400) {
                document.getElementById("answer").innerHTML = "Tidak boleh kosong / 0";
            }
        }
    };
    var params = url_+"/keliling_persegi?sisi="+sisi;
    xhttp.open("GET", params, true);
    xhttp.send();
}
//--------------
//-- Persegi Panjang --
function lPersegiP() {
    var panjang = document.getElementById('lpanjangpp').value;
    var lebar = document.getElementById('llebarpp').value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if(this.status == 200) {
                var r = JSON.parse(this.responseText);
                document.getElementById("answer").innerHTML = "Luas Persegi Panjang = "+r.hasil+" "+satuan+"²";
            }
            else if(this.status == 400) {
                document.getElementById("answer").innerHTML = "Tidak boleh kosong / 0";
            }
        }
    };
    var params = url_+"/luas_persegi_panjang?panjang="+panjang+"&lebar="+lebar;
    xhttp.open("GET", params, true);
    xhttp.send();
}
function kPersegiP() {
    var panjang = document.getElementById('kpanjangpp').value;
    var lebar = document.getElementById('klebarpp').value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if(this.status == 200) {
                var r = JSON.parse(this.responseText);
                document.getElementById("answer").innerHTML = "Keliling Persegi Panjang = "+r.hasil+" "+satuan;
            }
            else if(this.status == 400) {
                document.getElementById("answer").innerHTML = "Tidak boleh kosong / 0";
            }
        }
    };
    var params = url_+"/keliling_persegi_panjang?panjang="+panjang+"&lebar="+lebar;
    xhttp.open("GET", params, true);
    xhttp.send();
}
//--------------
//-- Lingkaran --
function lLingkaran() {
    var jarijari = document.getElementById('ljaril').value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if(this.status == 200) {
                var r = JSON.parse(this.responseText);
                document.getElementById("answer").innerHTML = "Luas Lingkaran = "+r.hasil+" "+satuan+"²";
            }
            else if(this.status == 400) {
                document.getElementById("answer").innerHTML = "Tidak boleh kosong / 0";
            }
        }
    };
    var params = url_+"/luas_lingkaran?jari-jari="+jarijari;
    xhttp.open("GET", params, true);
    xhttp.send();
}
function kLingkaran() {
    var diameter = document.getElementById('kdiameterl').value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if(this.status == 200) {
                var r = JSON.parse(this.responseText);
                document.getElementById("answer").innerHTML = "Keliling Lingkaran = "+r.hasil+" "+satuan;
            }
            else if(this.status == 400) {
                document.getElementById("answer").innerHTML = "Tidak boleh kosong / 0";
            }
        }
    };
    var params = url_+"/keliling_lingkaran?diameter="+diameter;
    xhttp.open("GET", params, true);
    xhttp.send();
}
//-------------------
//-- Trapesium --
function lTrapesium() {
    var a = document.getElementById('lat').value;
    var b = document.getElementById('lbt').value;
    var t = document.getElementById('ltt').value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if(this.status == 200) {
                var r = JSON.parse(this.responseText);
                document.getElementById("answer").innerHTML = "Luas Trapesium = "+r.hasil+" "+satuan+"²";
            }
            else if(this.status == 400) {
                document.getElementById("answer").innerHTML = "Tidak boleh kosong / 0";
            }
        }
    };
    var params = url_+"/luas_trapesium?a="+a+"&b="+b+"&t="+t;
    xhttp.open("GET", params, true);
    xhttp.send();
}
function kTrapesium() {
    var sisi_1 = document.getElementById('ksisit_1').value;
    var sisi_2 = document.getElementById('ksisit_2').value;
    var sisi_3 = document.getElementById('ksisit_3').value;
    var sisi_4 = document.getElementById('ksisit_4').value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if(this.status == 200) {
                var r = JSON.parse(this.responseText);
                document.getElementById("answer").innerHTML = "Keliling Trapesium = "+r.hasil+" "+satuan;
            }
            else if(this.status == 400) {
                document.getElementById("answer").innerHTML = "Tidak boleh kosong / 0";
            }
        }
    };
    var params = url_+"/keliling_trapesium?sisi_1="+sisi_1+"&sisi_2="+sisi_2+"&sisi_3="+sisi_3+"&sisi_4="+sisi_4;
    xhttp.open("GET", params, true);
    xhttp.send();
}
//-------------------
//-- Layang-layang --
function lLayang() {
    var diagonal1 = document.getElementById('ldiagonall_1').value;
    var diagonal2 = document.getElementById('ldiagonall_2').value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if(this.status == 200) {
                var r = JSON.parse(this.responseText);
                document.getElementById("answer").innerHTML = "Luas Layang-layang = "+r.hasil+" "+satuan+"²";
            }
            else if(this.status == 400) {
                document.getElementById("answer").innerHTML = "Tidak boleh kosong / 0";
            }
        }
    };
    var params = url_+"/luas_layang_layang?diagonal1="+diagonal1+"&diagonal2="+diagonal2;
    xhttp.open("GET", params, true);
    xhttp.send();
}
function kLayang() {
    var a = document.getElementById('kal').value;
    var c = document.getElementById('kcl').value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if(this.status == 200) {
                var r = JSON.parse(this.responseText);
                document.getElementById("answer").innerHTML = "Keliling Layang-layang = "+r.hasil+" "+satuan;
            }
            else if(this.status == 400) {
                document.getElementById("answer").innerHTML = "Tidak boleh kosong / 0";
            }
        }
    };
    var params = url_+"/keliling_layang_layang?a="+a+"&c="+c;
    xhttp.open("GET", params, true);
    xhttp.send();
}
//-------------------
//-- Jajar Genjang --
function lJajar() {
    var alas = document.getElementById('lalasj').value;
    var tinggi = document.getElementById('ltinggij').value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if(this.status == 200) {
                var r = JSON.parse(this.responseText);
                document.getElementById("answer").innerHTML = "Luas Jajar Genjang = "+r.hasil+" "+satuan+"²";
            }
            else if(this.status == 400) {
                document.getElementById("answer").innerHTML = "Tidak boleh kosong / 0";
            }
        }
    };
    var params = url_+"/luas_jajar_genjang?alas="+alas+"&tinggi="+tinggi;
    xhttp.open("GET", params, true);
    xhttp.send();
}
function kJajar() {
    var a = document.getElementById('kaj').value;
    var b = document.getElementById('kbj').value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if(this.status == 200) {
                var r = JSON.parse(this.responseText);
                document.getElementById("answer").innerHTML = "Keliling Jajar Genjang = "+r.hasil+" "+satuan;
            }
            else if(this.status == 400) {
                document.getElementById("answer").innerHTML = "Tidak boleh kosong / 0";
            }
        }
    };
    var params = url_+"/keliling_jajar_genjang?a="+a+"&b="+b;
    xhttp.open("GET", params, true);
    xhttp.send();
}
//-------------------
//-- Belah Ketupat --
function lBelah() {
    var diagonal1 = document.getElementById('ldiagonalb_1').value;
    var diagonal2 = document.getElementById('ldiagonalb_2').value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if(this.status == 200) {
                var r = JSON.parse(this.responseText);
                document.getElementById("answer").innerHTML = "Luas Belah Ketupat = "+r.hasil+" "+satuan+"²";
            }
            else if(this.status == 400) {
                document.getElementById("answer").innerHTML = "Tidak boleh kosong / 0";
            }
        }
    };
    var params = url_+"/luas_belah_ketupat?diagonal1="+diagonal1+"&diagonal2="+diagonal2;
    xhttp.open("GET", params, true);
    xhttp.send();
}
function kBelah() {
    var sisi = document.getElementById('ksisib').value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if(this.status == 200) {
                var r = JSON.parse(this.responseText);
                document.getElementById("answer").innerHTML = "Keliling Belah Ketupat = "+r.hasil+" "+satuan;
            }
            else if(this.status == 400) {
                document.getElementById("answer").innerHTML = "Tidak boleh kosong / 0";
            }
        }
    };
    var params = url_+"/keliling_belah_ketupat?sisi="+sisi;
    xhttp.open("GET", params, true);
    xhttp.send();
}
//-------------------
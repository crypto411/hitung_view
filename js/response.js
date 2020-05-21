var keypress = true;
document.onkeypress = function (evt) {
    if(!keypress)
        return false;
}
function numericOnly(id) {
    var txt = document.getElementById(id).value;
    if(isNaN(txt)) {
        keypress = false;
        return false;
    }
    else
        keypress = true;
}
function luasPersegi() {
    var sisi = document.getElementById("sisiPersegi").value;
    if(sisi != null && sisi != "") {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                var r = JSON.parse(this.responseText);
                document.getElementById("answerPersegi").innerHTML = "Luas persegi = "+r.hasil+" cm²";
            }
        }
        xhttp.open("GET", "http://localhost/hitung-bangun-datar/api/hitungbangundatar/luas_persegi?sisi="+sisi);
        xhttp.send();
    }
    else {
        document.getElementById("answerPersegi").innerHTML = "Tidak boleh kosong!";
    }
}
function kelilingPersegi() {
    var sisi = document.getElementById("sisiPersegi").value;
    if(sisi != null && sisi != "") {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                var r = JSON.parse(this.responseText);
                document.getElementById("answerPersegi").innerHTML = "Keliling persegi = "+r.hasil+" cm";
            }
        }
        xhttp.open("GET", "http://localhost/hitung-bangun-datar/api/hitungbangundatar/keliling_persegi?sisi="+sisi);
        xhttp.send();
    }
    else {
        document.getElementById("answerPersegi").innerHTML = "Tidak boleh kosong!";
    }
}
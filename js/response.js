
var url_ = "http://localhost/hitung-bangun-datar/api/hitungbangundatar"
function fill(id) {
    var x = document.getElementById(id).value;
    if(x == "" || x == null || x == 0)
        document.getElementById(id).value = 1;
}
function luasPersegi() {
    var sisi = document.getElementById('sisiPersegi').value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if(this.status == 200) {
                var r = JSON.parse(this.responseText);
                document.getElementById("answer").innerHTML = "Luas persegi = "+r.hasil+" cm²";
            }
            else if(this.status == 400) {
                document.getElementById("answer").innerHTML = "Tidak boleh kosong / 0";
            }
        }
    };
    xhttp.open("GET", url_+"/luas_persegi?sisi="+sisi, true);
    xhttp.send();
}
function show(id) {
    document.getElementById(id).style.display = "block";
}
function hide(id) {
    document.getElementById(id).style.display = "none";
}
function mulaiHitung() {
    document.getElementById('welcome').style.display = "none";
    document.getElementById('home').style.display = "block";
}
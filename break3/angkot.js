// Membuat objek angkot
function Angkot (sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function (namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }
    
    this.penumpangTurun = function (namaPenumpang, bayar) {
        if (this.penumpang.length === 0) {
            alert("Angkot Masih Kosong!");
            return false;
        }
        else {
            for (var i = 0; i < penumpang.length; i++) {
                if (this.penumpang[i] == namaPenumpang) {
                    this.penumpang[i] = undefined;
                    this.kas += bayar;
                    return this.penumpang;
                }
            }
        }
    }
}

var angkot1 = new Angkot("Taufiq Pop", ["Jogja", "Solo"], [], 0);
var angkot2 = new Angkot("Aurora", ["Semarang", "Wonogiri"], [], 0);

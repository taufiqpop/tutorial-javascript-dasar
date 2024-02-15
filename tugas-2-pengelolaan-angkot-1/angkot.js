var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length == 0){
        penumpang.push(namaPenumpang);
        return penumpang;
    }
    else {
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            }
            else if (penumpang[i] == namaPenumpang) {
                alert("Penumpang Sudah Ada!");
                return penumpang;
            }
            else if (i == penumpang.length - 1) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
}

var hapusPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        alert("Angkot Kosong!")
        return penumpang;
    }
    else {
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
                return penumpang;
            }
            else if (i == penumpang.length - 1) {
                alert("Nama Penumpang Tidak Ada!");
                return penumpang;
            }
        }
    }
};

console.log(penumpang);
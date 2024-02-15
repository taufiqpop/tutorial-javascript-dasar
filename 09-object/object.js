// Membuat Object
// Object Literal
var mhs1 = {
    nama : "Taufiq Pop",
    nim : "L200190085",
    email : "taufiqpop52@gmail.com",
    jurusan : "Informatika"
};

var mhs2 = {
    nama : "Lala",
    nim : "L100190174",
    email : "lalapo19@gmail.com",
    jurusan : "Ilmu Komunikasi"
};

// Function Declaration
function buatObjectMahasiswa(nama, nim, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa("Ainunafi", "L100190301", "ainunafi@gmail.com", "Ilmu Komunikasi");

// Constructor
function Mahasiswa(nama, nim, email, jurusan) {
    // var.this = {};
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
    // return this;
}

var mhs4 = new Mahasiswa("Agnes Dyva", "J100190070", "agnesdyva@gmail.com", "Psikologi");
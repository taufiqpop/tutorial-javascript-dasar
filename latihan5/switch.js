var item = prompt("Masukkan nama makanan/minuman : \n (ex: nasi, daging, susu, burger, cola)");

switch (item) {
    case "nasi":
    case "daging":
    case "susu":
        alert("Makanan/minuman SEHAT!");
        break;
    case "burger":
    case "cola":
        alert("Makanan/minuman TIDAK SEHAT!")
        break;
    default:
        alert("Anda memasukkan nama makanan/minuman yang salah!")
        break;
}
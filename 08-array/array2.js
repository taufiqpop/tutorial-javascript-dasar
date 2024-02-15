// 6. forEach
var angka = [1,2,3,4,5,6,7,8];
var nama = ["Taufiq", "Pop", "Keren"];
// for(var i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }

nama.forEach(function(e,i) {
    console.log("Mahasiswa ke-" + (i+1) + " adalah: " + e);
})


// 7. Map
var angka2 = angka.map(function(e) {
    return e * 2;
});
console.log(angka2.join(" - "));

// 8. Sort
var number = [1,2,6,4,17,21,5,9];
number.sort(function (a,b) {
    return a-b;
});
console.log(number.join(" - "));

// 9. Filter
var angka2 = angka.filter(function (x) {
    return x > 5;
});
console.log(angka2.join(" - "));

// 10. Find
var angka3 = angka.find(function (x) {
    return x > 5;
});
console.log(angka3);
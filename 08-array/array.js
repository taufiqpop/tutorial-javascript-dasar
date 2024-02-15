// Manipulasi Array

// 1. Menambah isi array
var arr = [];
arr[0] = "Taufiq";
arr[1] = "Pop";
arr[2] = "Keren";
arr[6] = "Hokya";

console.log(arr);


// 2. Menghapus isi array
var arr = ["Taufiq", "Pop", "Keren"];
arr[1] = undefined;
console.log(arr);


// 3. Menampilkan isi array
var arr = ["Taufiq", "Pop", "Keren"];

for (var i = 0; i < arr.length; i++) {
        console.log("Mahasiswa ke-" + (i+1) + ": " + arr[i]);
    }

// Method pada array
var arr = ["Taufiq", "Pop", "Keren", "Aurora", "VTuber"];
// 1. Join
// console.log(arr.join(" - "));

// 2. Push & Pop
arr.push("Banget", "Hokya");
arr.pop();
arr.pop();
console.log(arr.join(" - "));

// 3. Unshift & Shift
arr.unshift("Keren");
arr.shift();
console.log(arr.join(" - "));

// 4. Splice
// splice(indexAwal, mauDiHapusBerapa, elemenBaru1, elemenBaru2, ...)
arr.splice(1, 2, "Banget", "Oye");
console.log(arr.join(" - "));

// 5, Slice
// slice(awal, akhir)
var arr2 = arr.slice(1,4);
console.log(arr.join(" - "));
console.log(arr2.join(" - "));

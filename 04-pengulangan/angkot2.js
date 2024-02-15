var jlmAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
    noAngkot++;
}

for (noAngkot = angkotBeroperasi +1; noAngkot <= jlmAngkot; noAngkot++) {
    console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.");
}
const prompt = require("prompt-sync")({ sigint: true });

var nilai = prompt("Masukkan nilai genap: ");

while (nilai % 2 == 1 || nilai < 0) {
    if (nilai % 2 == 1) {
        console.log("Tidak bisa input bilangan ganjil");
    } else if (nilai < 0) {
        console.log("Tidak bisa input bilangan negatif");
    }
    nilai = prompt("Masukkan nilai genap: ");
}
var hasilAkar = Math.sqrt(nilai);

console.log(`Hasil akar kuadrat dari ${nilai} adalah ${hasilAkar}`);

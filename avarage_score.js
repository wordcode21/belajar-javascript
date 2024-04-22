console.log("=============================")
console.log("   PROGRAM NILAI RATA-RATA")
console.log("=============================")
const prompt = require("prompt-sync")({ sigint: true });
const manyScore = prompt("Masukan Banyak Nilai: "); // Mengambil  banyak nilai yang ingin di input
let tmpScore = 0;//variable untuk menampung nilai inputan pada perulangan 
for(let i = 0; i < manyScore; i++){// perulangan untuk menginputkan nilai sesuai dengan banyak nilai yang ingin di input
    const score = Number(prompt(`Maukan nilai ${i+1}: `)); //input nilai
    if(score>=0){// kondisi untuk mengecek agar inputan tidak negatif
        tmpScore += score; // menambahkan score untuk ditampung di tiap inputan
    }else{
        console.log("Nilai tidak boleh negatif");//kondisi jika nilai bernilai negatif
        break;// keluar dari perulangan
    }
}
avgScore = tmpScore/manyScore;// menghitung nilai rata - rata
console.log(`Nilai rata-ratanya adalah ${avgScore}` )

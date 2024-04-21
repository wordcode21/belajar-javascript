let nama = "agus";

if (nama === "agus"){
    console.log("halo nama saya agus");
}else{
    console.log("nama saya bukan 'agus'");
}

let panjang = 10; 
// variabel yang bisa diubah isinya dan let disarankan digunakan karena scopenya blok bukan fungction sepeti var
const phi = 3.14; //tidak bisa diubah karena merupakan variabel yang bertipe konstanta
//contoh var
// for(var i = 0; i <10; ++i){
//     console.log("var ",i);
// }
// // ini adalah alasan kenapa var tidak disarankan
// console.log("i diluar perulangan", i);

// untuk perulangan let
for(let i =0 ; i<10; i++){
    console.log("let", i);
}

// console.log("let ",i, "diluar fungction perulangan"); 
// kode diatas akan menghasilkan eror karena nilai i tidak bisa diakses diluar blok dimana dalam hal ini perulangan

//pengkondisian
//operator pada pengkondisian ada ==,>=,<=,!=
// kondisi yang dicek dengan == hanya akan mengcek nilai saja tanpa tipe data
panjang = 10;
if(panjang == "10"){
    console.log("benar");
}else{
    console.log("salah");
}
//jika ingin mengecek dengan tipe data dan nilai sekaligus menggunakan "==="
if(panjang === "10"){
    console.log("tipe data sama");
}else{
    console.log("berbeda tipe data");
}
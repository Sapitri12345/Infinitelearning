// case 1
const luar = "cerah";

if( luar === "cerah"){
    alert("saya ingin naik motor");
}
else if(luar === "mendung") {
    alert("saya akan bawa payung");
}
else{
    alert("saya ingin naik mobil");
}

// case 2
const waktu = 13;

if(waktu <= 10){
    console.log("selamat pagi");
}
else if(waktu <= 15){
    console.log("selamat siang");
}
else if(waktu <= 18){
    console.log("selamat sore");
}
else if(waktu <= 24){
    console.log("selamat malam");
}
else {
    console.log("waktu anda tidak valid");
}

// case 3
let bilangan = 2 
let penentu = bilangan % 2

if(penentu === 0){
    alert("bilangan anda genap");
}
else{
    alert("bilangan anda ganjil")
}

// atau dengan cara ini

if(bilangan %2 === 0){
    alert("bilangan anda genap");
}
else{
    alert("bilangan anda ganjil")
}

// false
let nilai = 1
let nilai2 = 2
let hasil = nilai == nilai2
console.log(hasil);

const hari = prompt("masukkan hari anda")




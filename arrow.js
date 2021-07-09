// ARROW FUNCTION
// funvtio expression
// let tampilNama = function(nama){
//     return `Halo, ${nama}`;
// }


// impilist return
// jika hanya ada satu dan hanya return isinya
// let tampilNama = nama => ` halo, ${nama}`;

// const tampilNama = () => 'heloo world';

// console.log(tampilNama());

let mahasiswa = ["Tio Ramadhan", "luthfi arifandi", "Yaser"];

// let lengthMhs = mahasiswa.map(function(nama){
//     return nama.length;
// })

// let  lengthMhs = mahasiswa.map(nama => nama.length)

let  lengthMhs = mahasiswa.map(nama => ({
    nama, 
    panjangKarakter: nama.length
}))

console.table(lengthMhs);
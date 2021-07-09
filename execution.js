// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// console.log(nama());
// var nama = 'Tio';


// Creation phase pda global context
// semua vraiabel akan disi undefined dan function akan di isi fn bersangkutan


// function satu(){
//     var nama = "tio";
//     console.log(nama);
// }

// function dua(){
//     console.log(nama);
// }

// console.log(nama);
// var nama = "lutfi";
// satu();
// dua("Yaser");
// console.log(nama);


// CLOSURE
// Factoring or Priavate Method
function sayHello(waktu){
    return function(nama){
        return `Halo ${nama}, Selamat ${waktu}`;
    }
}

let selamatPagi = sayHello('Pagi');
let selamatSiang = sayHello('Siang');
let selamatMalam = sayHello('Malam');

// console.dir(selamatPagi());
// console.log(selamatMalam('Tio'));



// Invoke
let a = (function add(){
    let counter = 0;
    return function(){
        return ++counter;
    }
})();


console.log(a());
console.log(a());
console.log(a());
console.log(a());
console.log(a());
console.log(a());
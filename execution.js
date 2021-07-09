// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// console.log(nama());
// var nama = 'Tio';


// Creation phase pda global context
// semua vraiabel akan disi undefined dan function akan di isi fn bersangkutan


function satu(){
    var nama = "tio";
    console.log(nama);
}

function dua(){
    console.log(nama);
}

console.log(nama);
var nama = "lutfi";
satu();
dua("Yaser");
console.log(nama);

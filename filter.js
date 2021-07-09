// Method Chaining, FIlter, Map, reduce


let Angka = [-1, 2, 2, 6, 7, 3, 0, 9, 2];

let Hasil = 
Angka.map(a => a*2).filter(a => a > 10).reduce((acc, cur) => acc * cur);

console.log(Hasil)
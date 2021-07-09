// Method Chaining, FIlter, Map, reduce


// let Angka = [-1, 2, 2, 6, 7, 3, 0, 9, 2];

// let Hasil = 
// Angka.map(a => a*2).filter(a => a > 10).reduce((acc, cur) => acc * cur);

// console.log(Hasil)



// Ambil Semua ELEMEN
let videos = Array.from(document.querySelectorAll('[data-duration'))

// Filter Playlist JAVASCRIPT LANJUTAN
.filter(a => a.textContent.includes('JAVASCRIPT ADVANCE'))

// Ambil data DUration
.map(a => a.dataset.duration)

// Hilangkan :
.map(a => {
    // 10:35 -> [10, 15] ->  buat integer
    const parts = a.split(':').map(a => parseFloat(a)).map((a,i) => {
        if(i ==0)return a*60;
        else return a;
    }).reduce((acc, cur) => acc + cur )
    
    // return (parts[0] * 60) + parts[1];
    return parts
})
// Jumlahkan total detik yang didpat
.reduce((acc, cur) => acc + cur);

// hitung jam menit detik
const jam = Math.floor(videos/3600);
const menit = Math.floor((videos - jam * 3600)/60);
const detik = videos - (jam * 3600) - (menit * 60);


// Simpan hasil ke DOM

const jmlVid = document.querySelector('.jmlVideo')
const durVid = document.querySelector('.durVideo')
let sumvideos = Array.from(document.querySelectorAll('[data-duration'))

// Filter Playlist JAVASCRIPT LANJUTAN
.filter(a => a.textContent.includes('JAVASCRIPT ADVANCE')).length;

jmlVid.innerHTML = `${sumvideos} Video`
durVid.innerHTML = `${jam} Jam, ${menit} Menit, ${detik} Detik`;
// console.log(videos)



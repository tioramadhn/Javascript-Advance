// Cara membuat ojek pada js
// 1. Objek literal
// let mahasiswa = {
//     nama: 'Tio Ramadhan',
//     energi: 10,
//     makan: function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat makan`);
//     }
// }


// 2. Function declaration->>Harus di instansiasikan dan return
// function mahasiswa(nama, energi){
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     mahasiswa.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan`);
//     }
//     mahasiswa.main = function(waktu){
//         this.energi -= waktu;
//         console.log(`Halo ${this.nama}, Selamat bermain`)
//     }

//     return mahasiswa;
// }

// let Tio = mahasiswa('Tio Ramadhan', 500);

// 3. Constructor function ->> tanpa inisiasi objek-keyword new
function mahasiswa(nama, energi){
    this.nama = nama;
    this.energi = energi;
    this.makan = function(porsi){
        this.energi += porsi;
        console.log(`Halo ${this.nama}, Selamat Makan`);
    }
    this.main = function(waktu){
        this.energi -= waktu;
        console.log(`Halo ${this.nama}, Selamat bermain`)
    }
}

let Tio = new mahasiswa('Tio Ramadhan', 500);



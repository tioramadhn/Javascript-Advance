// Cara membuat ojek pada js
// 1. Objek literal
// PROBLEM : tidak efektif untuk objek yang banyak
// let mahasiswa = {
//     nama: 'Tio Ramadhan',
//     energi: 10,
//     makan: function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat makan`);
//     }
// }


// 2. Function declaration->>Harus di instansiasikan dan return

const methodMahasiswa = {
    makan: function(porsi){
        this.energi += porsi;
        console.log(`Halo ${this.nama}, Selamat Makan`);
    },
    main: function(waktu){
        this.energi -= waktu;
        console.log(`Halo ${this.nama}, Selamat bermain`);
    },
    tidur: function(jam){
        this.energi += jam;
        console.log(`Halo ${this.nama}, Selamat tidur`);
    }
}

function mahasiswa(nama, energi){
    // OBJECT.CREATE
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    

    return mahasiswa;
}

let Tio = mahasiswa('Tio Ramadhan', 500);

// 3. Constructor function ->> tanpa inisiasi objek-keyword new
// function mahasiswa(nama, energi){
//     this.nama = nama;
//     this.energi = energi;
//     this.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan`);
//     }
//     this.main = function(waktu){
//         this.energi -= waktu;
//         console.log(`Halo ${this.nama}, Selamat bermain`)
//     }
// }

// let Tio = new mahasiswa('Tio Ramadhan', 500);



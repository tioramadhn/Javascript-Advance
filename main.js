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

// const methodMahasiswa = {
//     makan: function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan`);
//     },
//     main: function(waktu){
//         this.energi -= waktu;
//         console.log(`Halo ${this.nama}, Selamat bermain`);
//     },
//     tidur: function(jam){
//         this.energi += jam;
//         console.log(`Halo ${this.nama}, Selamat tidur`);
//     }
// }

// function mahasiswa(nama, energi){
//     // OBJECT.CREATE
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
    

//     return mahasiswa;
// }

// let Tio = mahasiswa('Tio Ramadhan', 500);

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


// function mahasiswa(nama, energi){
    // OBJECT.CREATE
    // Objec.Create ini seperti pewarisan dari parent class
    // let mahasiswa = Object.create(methodMahasiswa);

    // Yang sebenarnya terjadi dibelakang layar
    // let this = object.create(mahasiswa.prototype)

    // this.nama = nama;
    // this.energi = energi;
    
    // Yang sebenarnya terjadi dibelakang layar
    // return this;
// }
// Prototype Inheritance
// mahasiswa.prototype.makan = function(porsi){
//     this.energi += porsi;
//     return `halo ${nama}, Selamat makan`; 
// }
// mahasiswa.prototype.main = function(jam){
//     this.energi -= jam;
//     return `halo ${nama}, Selamat main`; 
// }
// mahasiswa.prototype.tidur = function(jam){
//     this.energi += jam;
//     return `halo ${nama}, Selamat Tidur`; 
// }
// let Tio = new mahasiswa('Tio Ramadhan', 500);

// VERSI CLASS
class Mahasiswa{
    constructor(nama, energi){
        this.nama = nama
        this.energi = energi
    }

    makan(porsi){
        this.energi += porsi;
        return `halo ${this.nama}, Selamat makan`; 
    }

    tidur(jam){
        this.energi += jam;
        return `halo ${this.nama}, Selamat tidur`; 
    }
    main(jam){
        this.energi -= jam;
        return `halo ${this.nama}, Selamat main`; 
    }
}

let tio = new Mahasiswa("Tio Ramadhan", 50);


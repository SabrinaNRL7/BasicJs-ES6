//OOP in JavaScript

//OBJECT LITERAL

//Cara Manual 
// const mobil = {
//     merek:"Toyota",
//     warna:"Putih",
//     nyalakanMobil: function() {
//         console.log(`Mobil dengan merek ${this.merek} sudah dinyalakan`);
//     },
// };

//Cara manual - tulis satu satu
// const mobil1 = {
//     merek:"Toyota",
//     warna:"Putih",
//     nyalakanMobil: function() {
//         console.log(`Mobil dengan merek ${this.merek} sudah dinyalakan`);
//     },
// };

// const mobil2 = {
//     merek:"Toyota", //Contoh properti
//     warna:"Putih", //contoh properti
//     nyalakanMobil: function() {
//         console.log(`Mobil dengan merek ${this.merek} sudah dinyalakan`);
//     },
// };

// mobil1.nyalakanMobil();
// mobil2.nyalakanMobil();

//Class adalah blueprint dari object

//OBJECT CLASS(constructor adalah sebuah method dalam kelas dan harus selalu ada.)
class Mobil{
    constructor(merek, warna){
        this.merek = merek;
        this.warna = warna;
    }

    nyalakanMobil(){
        console.log(`Mobil dengan merek ${this.merek} sudah dinyalakan.`);
    }
}

//class diatas ini adalah blueprint

//Membuat object dari blueprint yang telah dibuat diatas
const mobil1 = new Mobil("Toyota","Putih"); 
const mobil2 = new Mobil("Honda","Merah"); 
mobil1.nyalakanMobil();
mobil2.nyalakanMobil();

//keuntungan menggunakan class adalah definiskan class hanya sekali dan ketika ingin membuat object, kita tinggal pakai kata kunci new.

//Inheritance
/*parent adalah class yang memberikan dan child adalah class yang menerima*/

class Toyota extends Mobil{
    constructor(merek, warna, mesin){
        super(merek, warna)
        this.mesin = mesin;
    }

    //konsep Overriding(methodnya dituliskan dua kali atau lebih didalam class yang baru)
    matikanMesin(){
        console.log(`Mobil dengan merek ${this.merek} sudah dimatikan.`);
    }
    nyalakanMobil(){
        console.log(`Mobil dengan merek ${this.merek} dengan mesin ${this.mesin} sudah dinyalakan.`);
    }
}

const agya = new Toyota("Agya", "Putih", "1000cc");
const avanza = new Toyota("Avanza", "Hitam", "1300cc");

agya.nyalakanMobil();
agya.matikanMesin();
avanza.nyalakanMobil();
avanza.matikanMesin();

// class Button extends Component{
//     componentDidMount(){
//     }
//     constructor(){

//     }
// }


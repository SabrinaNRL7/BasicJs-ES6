// let name = "Sabrina";
// console.log(name);
// const age = 20;
// console.log(age);

// let isMarried = true;
// console.log(isMarried);


// const hasil = 11 % 2 === 0 ? "Genap" : "Ganjil";
// console.log(hasil);

// //function declaration
// function sayang() {
//     console.log("Hai beb");
// }

// sayang();

// //function expression
// const sayang2 = function () {
//     console.log ("bebeb");
// }

// sayang2();


//Array
// let buah = [1, 2, 3, 4, 5];
// console.log(buah);

// let sayurMayur = ["Kol", "Wortel" , "Tomat" , "Kangkung"];
// console.log(sayurMayur);
// console.log(sayurMayur[0]);
// console.log(sayurMayur[1], sayurMayur[2]);
// console.log(sayurMayur.length);
// sayurMayur.splice(2, 1);
// sayurMayur.shift(0);
// console.log(sayurMayur);



// //Object
// const sabri = {
//     firstName:'Sabrina',
//     lastName: 'Ndezing',
//     age: 20,
//     isMarried: false,
//     sayHello: function () {
//         console.log("Hello");
//     },
// };

// const john = new Object();
// john.firstName = 'John';
// john.lastName = 'Doe';
// john.age = 33;
// john.isMarried = true;
// console.log(john);
// console.log(sabri);
// console.log(sabri.lastName);//dot notation
// console.log(sabri['isMarried']);//bracket notation
// sabri.sayHello();

//looping di JS (for, while, do while)
//for loop
// for (let i=1; i <= 5; i++) {
//     console.log(i);
// }

//while loop
// let i =1;
// while (i <= 6) 
// {
//     console.log(i);
//     i++;
// }

// //do while loop
// let i =1;
// do {
//     console.log(i);
//     i++
// }
// while (i <= 7);


//Array built and method (old school way)
//  for (let i = 0; i < numbers.length; i++)
//  {
//      console.log(numbers[i]);
//  }

 //array format nya objek
//built in method dari array. kelebihannya adalah mudah dibaca dan mengurangi kesalahan.
//argumen berupa fungsi, disebut callback function

//array.for each()
//menerima 3 nilai yaitu value, index dan array
//item harus selalu ada
//dia ga ngembaliin nilai / tidak ada nilai yang di return (GA BISA DIA MAH)
// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(item, index) {
//     console.log(item, index);
// });

//array.map()
//dia bisa mengembalikan nilai dengan array yang baru
// let output = numbers.map(function (item) {
//     item *= 2;
//    return item;
// });
// console.log("output numbers, ", numbers);
// console.log("output map, ", output);

//array.filter()
// let filterNumber = numbers.filter(function(item){
//     return item <= 5;
// });
// console.log(filterNumber);

//array.find()




//JavaScript ES6
//Let vs Const vs Var

//pake const
// const numbers =[1, 2, 3, 4, 5];

// numbers[4] = 6 ;
// console.log(numbers);

// const orang = {
//     nama : "sabrina",
//     umur : 20,
//     alamat : 'Airmadidi',
// };

// orang.nama = "lingga";
// console.log(orang);

//pake var
/*kekurangannya 
1.bisa deklarasi variabel dengan yang sama yang 
seharusnya itu ga bisa dilakukan karena akan berpengaruh di error logic.
2. ga menganut block scoping (variabelnya bisa dipake diluar scope 
    misalkan variabel ada di scope if, diluar if dia bisa dipake)*/
// var bahasa = "Js";
// console.log(bahasa);

//String Literal 
// let kalimat = "Halo nama saya " + orang.nama + ". Umur saya " + orang.umur + ". Saya tinggal di " + orang.alamat;
// console.log(kalimat); //cara manual

// let kalimat = `Halo nama saya ${orang.nama}, umur saya ${orang.umur}, saya tinggal di ${orang.alamat}.`;
// console.log(kalimat); //disebut string literal

// console.log(`Hasil penjumlahan 2 dan 3 adalah ${2 + 3}.`);
// console.log(`10 === 18 hasilnya adalah ${10 === 10}.`);

// let umur = 16;
// let kalimat2 = `Tahun depan saya ${umur + 1 >= 17 ? "bisa" : "tidak bisa"} ikut pemilu`;
// console.log(kalimat2);

// function namaSaya() {
//     return "Sabrina";
// }

// let kalimat3 = `Halo nama saya ${namaSaya()}.`;
// console.log(kalimat3);


//Arrow Function
// const namaSaya = function() => {
//     return "Sabrina";
// };
// let kalimat3 = `Halo nama saya ${namaSaya()}.`;
// console.log(kalimat3);

//implicit return value
// const namaSaya = (nana) => nana;
// const penjumlahan = (a, b) => a + b;


//DEFAULT PARAMETER
// const penjumlahan = (a=1, b =1) => a + b;
// console.log(penjumlahan(5, 5));

//Rest Parameter and Spread Operator
//Mirip tapi tidak sama. Dua duanya menggunakan tanda yang sama
//menggunakan 3 titik ... 

//Rest parameter
//contoh manual
// const penjumlahanEmpatAngka = (a, b, c, d, e, f, g) => {
//     let numbers =[a, b, c, d, e, f, g];
//     let result = 0;
//     numbers.forEach(element => {
//         result = result + element; 
//     });
//     return result;
// };

// console.log(penjumlahanEmpatAngka(1, 2, 3, 4, 5, 6, 7));

// const penjumlahanEmpatAngka = (param1, param2, ...numbers) => {
//     let result = 0;
//     numbers.forEach((element) => {
//         result = result + element; 
//     });
//     return result;
// };

// console.log(penjumlahanEmpatAngka(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
//hasilnya akan jadi 52 karena nilai 1 dan 2 sudah di kirim ke variabel param1 dan param2 sehingga tidak dihitung lagi
//atau sudah tidak dikirim ke variabel numbers lagi


//Spread Operator - untuk membuka kurung siku array nya. Dia udah gajadi array lagi. Dia udah jadi elemen sendiri.
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// console.log(...numbers); //tiga titik itu disebut elipsis
// const number2 = [...numbers];
// console.log(number2);
//fungsinya untuk duplikat ke array baru
// const numbers = [1, 2, 3, 4, 5];
// const numbers2 = [6, 7, 8, 9, 10];

// const combineNumbers = numbers.concat(numbers2);
// console.log(combineNumbers);
//fungsi lainnya, untuk menggabungkan isi dari 2 array yang berbeda
// combineNumbers2 = [...numbers, ...numbers2];
// console.log(combineNumbers2);

//penggunaan pada object
// let orang = {
//     nama :"Sabrina",
//     umur : 20,
// };

//manual
// orang.pekerjaan = "Dosen";
// orang.pendidikan = "SMA";
// console.log(orang);

//spread using
// orang = {
//     ...orang,
//     pekerjaan: "Mahasiswi",
//     pendidikan: "S1",
// };
// console.log(orang);


//DESTRUCTURING
//berfungsi membongkar array dan mengisi kedalam variabel2
// let age;
const arrPerson = ["John", "Doe", 33, true, "Minahasa Utara"];

// const firstName = arrPerson[0];
// const lastName = arrPerson[1];
// const age = arrPerson[2];
// const isMarried = arrPerson[3]; cara manual

// const [ firstName, lastName, age, isMarried] = arrPerson; //inilah cara destructure array
// let [, , age, isMarried, address = 'Manado'] = arrPerson;
// console.log(age, isMarried, address);

// let [...rest] = arrPerson;
//  console.log(rest);

let firstName, lastName;
const objPerson = {
    firstName: "John",
    lastName: "Doe",
    age: 33,
    isMarried: true,
    address: "Minahasa Utara",
};

// const firstName = objPerson.firstName;
// const lastName = objPerson.lastName;
// const age = objPerson.age;
// const isMarried = objPerson.isMarried;

// const { age: umur } = objPerson;

// console.log(umur);
// ({firstName, lastName, ...rest} = objPerson);
// console.log(firstName, lastName, rest);

const display = ({ firstName, lastName }) => 
`Halo nama saya ${firstName} ${lastName}`;

console.log(display (objPerson));

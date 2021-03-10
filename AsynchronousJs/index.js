// Asyncronous JS - Multi thread languange
//bisa menjalankan proses lain tanpa menunggu proses sebelumnya selesai


//callback adalah fungsi yg dipanggil kembali
// function greetings(fullName) {
//     console.log(`Hi ${fullName}`);
// }

// function introduction (firstName, lastName, callback) {
//     const fullName = `${firstName} ${lastName}`;
//     callback(fullName);
// }

// introduction("John", "Doe", (fullName) => {
//     console.log(`Hi ${fullName}`);
// });

//Metode 1 - setTimeout
//akan menjalankan satu proses setelah menunggu waktu yg ditentukan.
// console.log("satu");
// setTimeout(() => {
//     console.log("dua");
// },2000);
// console.log("tiga");


//CALLBACK
// function proses1 () {
//     console.log('Proses 1 selesai dijalankan');
// }

// function proses2 (callback) {
//     setTimeout(() => {
//     console.log('Proses 2 selesai dijalankan');
//     callback();
//     },2000);
// }

// function proses3 () {
//     console.log('Proses 3 selesai dijalankan');
// }

// proses1();
// proses2(proses3);
//Masalah di callback adalah callback hell
//contohnya sbb

// setTimeout(() => {
//     console.log("Proses 1");
//     setTimeout(() => {
//         console.log("Proses 2");
//         setTimeout(() => {
//         console.log("Proses 3");
//         },2000);
//     }, 2000);
// }, 2000);

//jadi susah dibaca programnya

//untuk mengatasi masalah ini, digunakan Promise
//cara buatnya sbb

// let condition = true;

// function newPromise() {
//     return new Promise((resolve, reject) => {
//         if (condition) {
//             resolve ("Berhasil");
//         } else {
//             reject("Error");
//         }
//     });    
// }

// newPromise()
// .then((result) => {
//     return result;
// })
// .then((result2) => {
//     console.log(`${result2} !!!`);
// })
// .catch((error) => {
//     console.log(error);
// });

//PROMISE
// function getIdStudent() {
//     return new Promise ((resolve, reject) => {
//         resolve("12345");
//     });
// }

// function getNameById (id){
//     return new Promise((resolve, reject)=>{
//         if (id === "123456") {
//             resolve ("John Doe");
//         }
//         else 
//         {
//             reject("Unknown ID Student");
//         }
//     });
// }

// getIdStudent()
//  .then((id) => {
//      return getNameById(id);
//  })
//  .then ((name) => {
//     console.log(name);
// })
// .catch((error) => {
//     console.log(error);
// });

// const getNameByIdAsync = async () => {
//     try {
//     const id = await getIdStudent();
//     const name = await getNameById (id);
//     console.log(name);
// } catch (error) {
//     console.log(error);
// }
// };

// getNameByIdAsync();


//cara 1
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((res)=> res.json())
// .then((json) => {
//     console.log(json);
// })
// .catch((error) => console.log(error));

//cara 2
const getJSONPlaceholder = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    console.log(json);
};

getJSONPlaceholder();
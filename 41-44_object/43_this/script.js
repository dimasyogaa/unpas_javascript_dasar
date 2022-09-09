// Membuat Object

// cara 1 - function declaration
// function halo() {
//     console.log('halo');
// }
// halo();

// cara 2 - object literal
// var obj = {};
// obj.halo = function(){
//     console.log('halo');
// }
// obj.halo();

// cara 3 - constuctor
// function Halo() {
//     console.log('halo');
// }
// new Halo();

// Ketiga hal diatas menampilkan hal yang sama tapi context nya berbeda
// Cara membuat dan cara memanggilnya berbeda, context nya juga berbeda

// KONSEP THIS
// sebuah keyword spesial yang secara otomatis itu didefinisikan di setiap function

// this === window
// jika membuat di scope global, this adalah window
// var a = 10;
// console.log(this.a);
// console.log(window.a);

// cara 1 - function declaration
// function halo() {
//     console.log(this); // mengembalikan object global
//     console.log('halo');
// }
// this.halo();
// this dalam function declaration contextnya adalah mengembalikan object global

// cara 2 - object literal
// var obj = {a : 10, nama : 'Sandhia'};
// obj.halo = function(){
//     console.log(this); // mengembalikan object ini sendiri
//     console.log('halo');
// }
// obj.halo();
// this dala object literal mengembalikan object yang bersangkutan

// cara 3 - constuctor
// function Halo() {
//     console.log(this);
//     console.log('halo');
// }
// var obj1 = new Halo();
// var obj2 = new Halo();
// this mengembalikan object yang baru dibuat



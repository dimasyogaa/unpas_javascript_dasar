// global scope / window scope
// CASE 1
// var a = 1;
// function tes() {
//     var b = 2;
// }
// tes();
// console.log(b);
//  hasil : b is not defined
// CASE 1 : Solution
// var a = 1;
// function tes() {
//     var b = 2;
//     console.log(b);
// }
// tes();
//  hasil : 2

// CASE 2
// var a = 1;
// function tes() {
//     var b = 2;
//     console.log(a);
// }
// tes();
//  hasil : 1
//  Penjelasan :
// di dalam function, bisa akses variabel global,
// di luar function, tidak bisa akses variabel di dalam function

// CASE 3
// var a = 1;
// function tes() {
//   // name conflict
//   var a = 2;
// }

// tes();
// console.log(a);
//  hasil : 1

// CASE 4
// var a = 1;
// function tes() {
//
//   var a = 2;
//   console.log(a);
// }

// tes();
//  hasil : 2

// CASE 5
// var a = 1;
// function tes() {
//
//   var a = 2;
//   console.log(window.a);
// }

// tes();
//  hasil : 1

// CASE 6
// var a = 1;
// function tes() {
//   a = 2;
// }
// tes();
// console.log(a);
// hasil : 2
// penjelasan : javascript mencari keyword var lalu menimpanya dengan dengan variabel a di dalam function tanpa keyword var

// CASE 6 : SOLUTION
// "use strict";
// function tes() {
//   a = 2;
// }
// tes();
// console.log(a);
// hasil : a is not defined

// CASE 7 
// var a = 1; // sama sekali tidak dipake
// function tes(a) {
    // argument a selalu menjadi variabel lokal
//     console.log(a);
// }
// tes(2);
// hasil : 2

// CASE 8
var a = 1;
function tes(a) {
    console.log(a);
}

tes(a);
console.log(a);
// hasil :
// 1
// 1
// a pada argumen mengacu ke dalam variabel global
// a pada parameter mengacu ke dalam variabel local

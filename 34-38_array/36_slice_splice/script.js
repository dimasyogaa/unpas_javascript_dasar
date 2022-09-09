var arr = ['Yoga', 'Dimas', 'Pambudi'];
// 1. Splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// arr.splice(2, 0, 'Doddy', 'Fitri'); 
// console.log(arr.join(' - '));
// hasil : Yoga - Dimas - Doddy - Fitri - Pambudi

// arr.splice(1,2);
// console.log(arr.join(' - '));
// hasil : Yoga

// arr.splice(1,2,'Doddy', 'Fitri');
// console.log(arr.join(' - '));
// hasil : Yoga - Doddy - Fitri

// 2. Slice
// slice(indexAwal,indexAkhir+1)
// slice menghasilkan array baru , sehingga harus ditampung
var arr = ['Yoga', 'Dimas', 'Pambudi', 'Nofa', 'Doddy', 'Fitri'];
// Mengiris sebuah array menjadi array yang baru
// kode dibawah mengambil index 1 dan 2
var arr2 = arr.slice(1,3);
console.log(arr2.join(' - '));
console.log(arr.join(' - '));

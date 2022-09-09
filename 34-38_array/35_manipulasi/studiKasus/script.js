// 1. Menambah isi array
// var arr = [];
// arr[0] = "Sandhika";
// arr[1] = "Galih";
// arr[2] = "Nofa";
// arr[6] = "Doddy";
// console.log(arr);

// 2. Menghapus isi array
// var arr = ["Sandhika", "Galih", "Nofa"];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi array
// var arr = ["Sandhika", "Galih", "Nofa"];
// for ( var i = 0; i < arr.length;i++) {
//     console.log('Mahasiswa ke-' + (i+1) + ' : ' + arr[i]);
// }

// METHOD ARRAY
var arr = ['sandhika','galih', 'nofa'];
// 1. join('separator')
// console.log(arr.join(' - '));

// 2. push(elemenBaru1, elemenBaru2) di akhir
// arr.push('doddy', 'Fitri');
// console.log(arr.join());

// 3. pop() di akhir
// arr.pop();
// arr.pop();
// console.log(arr.join(' - '));

// 4. unshift(elemenBaru) di awal
arr.unshift('dimas', 'yoga');
console.log(arr.join());

// 5. shift() di awal
arr.shift();
arr.shift();
console.log(arr.join());

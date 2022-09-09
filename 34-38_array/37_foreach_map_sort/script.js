var angka = [1,2,3,4,5,6,7,8];
// for (var i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }

// 1. FOREACH (untuk setiap) | (tidak mengembalikan array)
// / cara membaca :
// untuk setiap elemen pada array angka lakukan fungsi berikut ini
// angka.forEach(function(e) {
//     console.log(e);
// });
// atau
// var cetak = function(e) {
//     console.log(e);
// }
// angka.forEach(cetak);

// i : index
// e : element
// var nama = ['Sandhika', 'Galih', 'Nofa'];
// nama.forEach(function(e,i){
// console.log('Mahasiswa index ke-' + i + ' adalah : ' + e);
// });
// bagaimana parameter e bisa menerima elemen array dari angka?
// karna angka.forEach disitu sudah menjadi argumen yang dimasukkan kedalam parameter e.

// 2. MAP (mengembalikan array)
// var angka = [1,2,5,3,6,8,4];
// tiap tiap element pada array angka dikalikan 2
// lalu disimpan di dalam variabel angka2 sebagai array
// var angka2 = angka.map(function(e) {
//     return e * 2;
// });
// console.log(angka2.join(' - '));

// 3. SORT
var angka = [1,10,2,5,7,20,6,3,4,8];
angka.sort(function(a,b) {
    return a-b;
});
console.log(angka.join(' - '));

// note
// namaObject1.methodObject(function(isiObject1SebagaiArgumen){})




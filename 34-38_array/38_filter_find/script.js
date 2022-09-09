var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
// 1. Filter (mengembalikan dalam bentuk array)
var angka2 = angka.filter(function (x) {
  // return x == 5;
  return x > 5;
});
console.log(angka2.join(" - "));

// 2. Find (mengemabalikan 1 nilai, sehingga tidak bisa menggunakan join, karena join menggabungkan array menjadi string)
var angka3 = angka.find(function (x) {
  // return x == 5;
  return x > 5;
});
console.log(angka3);

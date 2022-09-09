

// Selama kondisi di dalam kurung() bernilai true, maka lakukan aksi di dalam blok {}
// while (kondisi) {
// aksi
// }

// DIHENTIKAN OLEH USER
// var ulang = true;
// while (ulang) {
//   console.log("hello world!");
//   ulang = confirm("lagi?");
// }

// DIHENTIKAN OLEH PROGRAM
// nilai awal
// while (kondisi terminasi) {
//     aksi
//     increment/decrement
// }
// kondisi terminasi : kapan loopnya akan berhenti
// increment decrement : penambahan dan pengurangan nilai awal
var nilaiAwal = 1
while (nilaiAwal <= 10) {
    console.log('Hello World! ' + nilaiAwal + 'x');
    nilaiAwal++;
}

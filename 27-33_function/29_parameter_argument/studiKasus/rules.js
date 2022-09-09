// PARAMETER < ARGUMENT
// function tambah(a,b) {
//     return a + b;
// }

// var hasil = tambah(3,4,5);
// console.log(hasil);

// PARAMETER > ARGUMENT
// function tambah(a,b,c) {
//     return a + b;
// }

// var hasil = tambah(5,4);
// console.log(hasil);

// PARAMETER > ARGUMENT
// function tambah(a,b,c) {
//     return a + b + c;
// }

// var hasil = tambah(5,4);
// console.log(hasil);

// arguments
function tambah() {
    var hasil = 0;
    for (var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}

var hasil = tambah(1,2,3,4,5);
console.log(hasil);
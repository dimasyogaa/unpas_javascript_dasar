// var a = 8;
// var b = 3;
// var volumeA;
// var volumeB;
// var total;

// volumeA = a * a * a;
// volumeB = b * b * b;

// total = volumeA + volumeB;
// console.log(total);

function jumlahVolumeDuaKubus(a, b) {
    var volumeA;
    var volumeB;
    var total;

    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;

    return total;
}

// dijalankan
jumlahVolumeDuaKubus(8, 3);

// ditampilkan
console.log(jumlahVolumeDuaKubus(8, 3));
console.log(jumlahVolumeDuaKubus(10, 15));

// REFERENSI
function jumlahVolumeDuaKubus(sisiKubus1, sisiKubus2)  {
    // Ketahui sisi masing-masing kubus (ada di parameter)
    
    // Hitung volume masing-masing kubus
    var volumeKubus1 = Math.pow(sisiKubus1, 3); // Math.pow berfungsi untuk memangkatkan 3
    var volumeKubus2 = Math.pow(sisiKubus2, 3); // Math.pow berfungsi untuk memangkatkan 3
    // console.log(volumeKubus1);
    // console.log(volumeKubus2);

    // Jumlahkan hasilnya
    var jumlah = volumeKubus1 + volumeKubus2;

    // Kembalikan nilai jawabannya
    return jumlah;
}

// Tampilan
alert('Selamat datang!\nIni adalah program\n"Penjumlahan 2 Volume Kubus"');
var tanya = true;
while(tanya) { 

    var a = parseInt(prompt('Berapa besar sisi kubus pertama?'));
    var b = parseInt(prompt('Berapa besar sisi kubus kedua?'));

    alert('Jumlah Volume Kedua Kubus \n' + jumlahVolumeDuaKubus(a, b));

    tanya = confirm('Ingin menghitung jumlah 2 volume kubus lagi?')
}
alert('Terima kasih :)');
 
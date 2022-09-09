// Membuat Object 
// cara membuat Object Literal
var mhs = {
    nama : "Yoga Dimas",
    umur : 31,
    ips : [3.00, 2.50, 3.20],
    alamat : {
        jalan : "Jl. abc No. 123",
        kota : "Bandung",
        provinsi : "Jawa Barat"
    }
};

console.log('nama : ' + mhs.nama);
console.log('mhs["nama"] : ' + mhs["nama"]);
console.log('umur : ' + mhs.umur);
console.log('ips : ' + mhs.ips);
console.log('ips[2] : ' + mhs.ips[2]);
console.log('alamat : ' + mhs.alamat);
console.log('alamat.kota : ' + mhs.alamat.kota);
console.log('mhs["alamat"]["jalan"] : ' + mhs["alamat"]["jalan"]);
console.log('mhs.alamat["provinsi"] : ' + mhs.alamat["provinsi"]);
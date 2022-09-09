// Membuat Object
// Object Literal
var mhs1 = {
    nama : "Sandhika Galih",
    nrp : "043040023",
    email : 'sandhikagalih@unpas.ac.id',
    jurusan : 'Teknik Informatika'
}
var mhs2 = {
    nama : "Doddy",
    nrp : "043040007",
    email : 'doddy@gmail.com',
    jurusan : 'Teknik Industri'
}

// Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Nofariza', '023040123', 'nofa@yahoo.com', 'Teknik Pangan');

// Constructor (function khusus untuk membuat object)
// biasanya nama function di awalahi oleh huruf kapital
// cara manggilnya pake keyword new 
function Mahasiswa (nama, nrp, email, jurusan) {
    // anggap saja menggunakan var this = {};
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
    // anggap saja menggunakan return this;
}

var mhs4 = new Mahasiswa('Erik', '013040321', 'erik@icloud.com', 'Teknik Mesin');

// Membuat Object Angkot
function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };
  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      console.log("angkot masih kosong!");
      return false;
    }
    for ( var i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] == namaPenumpang) {
            // turun
            this.penumpang[i] = undefined;
            // bayar
            this.kas += bayar;
            return this.penumpang;
        }
    }
  };
}

// INSTANSIASI
var angkot1 = new Angkot("Yoga Dimas", ["Cicaheum", "Cibiru"], [], 0);
var angkot2 = new Angkot("Tom Cruise", ["Antapani", "Ciroyom"], [], 0);

// uji coba method penumpangNaik, diketikann di dalam console pada browser
// angkot1.penumpangNaik('Erik')
// pemanggilan
// angkot1.penumpang

// uji coba method penumpangTurun, diketikkan di dalam console pada browser
// angkot1.penumpangTurun('Erik', 2500)
// angkot1.penumpang
// angkot1.kas

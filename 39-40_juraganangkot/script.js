// variabel untuk uji coba tambahpenumpang
// var penumpang = ["Yoga", undefined, "Dimas"];
// variabel untuk uji coba hapusPenumpang
var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    // kembalikan isi array & keluar dari function
    return penumpang;
  } else {
    // telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // jika ada kursi kosong
      if (penumpang[i] == undefined) {
        // tambah penumpang di kursi tersebut
        penumpang[i] = namaPenumpang;
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
      // jika sudah ada nama yang sama
      else if (penumpang[i] == namaPenumpang) {
        // tampilkan pesan kesalahannya
        console.log(namaPenumpang + " sudah ada di dalam angkot.");
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
      //  jika seluruh kursi terisi
      else if (i == penumpang.length - 1) {
        // tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  // Referensi jika isi arraynya undefined semua
  function check() {
    for (var i = 0; i < penumpang.length; i++) {
      if (typeof penumpang[i] != "undefined") {
        return false;
      }
    }
    return true;
  }
  // jika angkot kosong
  if (penumpang.length == 0 || check()) {
    // tampilkan pesan bahwa angkot kosong, dan
    // tidak mungkin ada penumpang turun
    console.log("Angkot masih kosong.");
    // kembalikan isi array & keluar dari function
    return penumpang;
  } else {
    // telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // jika nama penumpang sesuai
      if (penumpang[i] == namaPenumpang) {
        // hapus penumpang dengan mengubah namanya
        // menjadi undefined
        penumpang[i] = undefined;
        // kembalikan isi array & keluar dari function
        return penumpang;
      } else if (i == penumpang.length - 1) {
        // jika tidak ada nama yang sesuai
        // tampilkan pesan kesalahannya
        console.log(namaPenumpang + " tidak ada di dalam angkot");
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
    }
  }
};

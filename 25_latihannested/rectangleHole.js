var s = "",
  baris = 5,
  kolom = 10;

for (var i = 1; i <= baris; i++) {
  if (i == 1 || i == baris) {
    for (var j = 1; j <= kolom; j++) {
      s += "#";
    }
  } else {
    for (var k = 1; k <= kolom; k++) {
      if (k == 1 || k == kolom) {
        s += "#";
      } else {
        s += " ";
      }
    }
  }
  s += "\n";
}

console.log(s);




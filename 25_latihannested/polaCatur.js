var s = "",
  baris = 5,
  kolom = 10;

for (var i = 1; i <= baris; i++) {
  if (i % 2 == 0) {
    for (var j = 1; j <= kolom; j++) {
      if (j % 2 == 0) {
        s += " ";
      } else {
        s += "#";
      }
    }
  } else {
    for (var j = 1; j <= kolom; j++) {
      if (j % 2 == 0) {
        s += "#";
      } else {
        s += " ";
      }
    }
  }
  s += "\n";
}

console.log(s);

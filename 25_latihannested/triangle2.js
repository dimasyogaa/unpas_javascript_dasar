var s = "";
for (var baris = 6; baris > 0; baris--) {
  for (var kolom = 0; kolom < baris; kolom++) {
    s += "*";
  }
  s += "\n";
}

console.log(s);

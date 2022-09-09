var s = "";
for (var baris = 0; baris < 10; baris++) {
  for (var kolom = 0; kolom <= baris; kolom++) {
    s += '*';
  }
  s += '\n';
}

console.log(s);

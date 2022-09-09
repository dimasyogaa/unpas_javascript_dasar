var s = "";
for (var i = 0; i < 5; i++) {
  for (var j = 0; j <= i; j++) {
    s += " ";
  }
  for (var k = 5; k > i; k--) {
    s += "*";
  }
  s += "\n";
}

console.log(s);

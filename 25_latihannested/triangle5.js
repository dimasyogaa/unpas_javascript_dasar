var s = '';
var z = '';
for(var i = 1; i <= 6; i++) {
    for (var j = 6; j >= i; j--) {
        s += '  ';
    }
    for (var k = 1; k <= i + (i - 1); k++) {
        s += ' *';
    }
    s += '\n';
}
console.log(s);

for(var a = 1; a <= 6; a++) {
    for (var b = 1; b <= a; b++) {
        z += '  ';
    }
    for (var c =11; c >= a + (a - 1); c--) {
        z += ' *';
    }
    z += '\n';
}

console.log(z);
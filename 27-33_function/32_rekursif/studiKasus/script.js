function cetakAngka(n) {
    if ( n === 0 ) return; // base case
    console.log(n);
    cetakAngka(n-1);
}

cetakAngka(10);

function faktorial(n) {
    if( n === 0 ) return 1;
    return n * faktorial(n-1);
}

console.log(faktorial(5));
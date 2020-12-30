console.log('while');

// while
const data = ['abcdef', 'ghijkl', 'mnop', 'qrstuvwxyz']
let angka = 0;

while (angka < data.length) {
    console.log(data[angka]);
    
    angka++
}

console.log(angka, 'di luar loop / hasil loop');

console.log(data.map((value) => value.slice(1, -1)));

// do while
let angkado = 0;
do {
    console.log("Im here")
    angkado++
} while (angkado < 5);

console.log(angkado, 'do while')

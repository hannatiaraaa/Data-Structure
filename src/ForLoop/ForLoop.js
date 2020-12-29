console.log('Array');

// looping with increment
for (let index = 0; index < 10; index++) {
    console.log(`Hai looping, ${index + 1}`);
}

// looping with decrement
for (let index = 5; index > 0; index--) {
    console.log('Hai looping, decrement`');
}

for (let i = 0; i < 20; i++) {
    if (i % 5 === 0) {
        console.log("boom");
    } else {
        console.log(i);
    }   
}

// const nama = prompt('masukkan nama anda: ');
const nama = "hanna";
let count = 0;
for (let i = 0; i < nama.length; i++) {
    if (nama[i] === 'a') {
        count++;
    } else {
        null;
    }
}
console.log(count);

for (let index = 0; index < 5; index++) {
    for (let index = 0; index < 6; index++) {
        console.log('Nested');
    }
    console.log('looping di bawah nested');
}

const height = prompt("enter height: ");
const width = prompt("enter width: ");

for (let i = 0; i < height; i++) {
    let pager = '';
    for (let j = 0; j < width; j++) {
        pager += '#'; 
    }
    console.log(pager);
}
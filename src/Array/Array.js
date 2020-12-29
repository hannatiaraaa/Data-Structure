console.log('Array');

// concat
const data = ['a', 'B', 'C', 'D', 'E'];
const data1 = ['f', 'g', 'h', 'i', 'j'];
const data2 = ['f', 'g', 'h', 'i', 'j', 'k'];

console.log(data.concat(data1, data2, data2));

// join
console.log(data.join(''));
console.log(data.join('#'));

// foreach, map
data.forEach(element => {
    console.log(element);
});

data.map((value, index) => {
    console.log(value, index, 'punya map')
})

// forEach can't return data
const dataForEach = data.forEach((value, index) => {
    newData = data[2];
    return value;
});

// map can return the data array (and a new updated array)
const dataMap = data.map((value, index) => {
    return value;
})

console.log(dataForEach, newData, 'forEach'); // cuma buat ngolah data, ga return
console.log(dataMap, 'map'); // bisa ngereturn array baru/valuenya => dataMap bisa buat variabel yg nampung array
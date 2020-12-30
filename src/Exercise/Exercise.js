data = [-1, 3, -8, 4, -17, 0, "nama"]
nan = ["huruf", "angka"]
number = [-1, 3, -8, 4, -17]

function Invert(arrNum) {
    let arrInvert = [];
    // null, undefined, 0, Nan, isNan === false => masuk ke else
    if (arrNum.length && typeof arrNum !== 'string') {
        for (let i = 0; i < arrNum.length; i++) {
            if (typeof arrNum[i] === 'string') {
                alert('salah');
            } else {
                arrInvert.push(arrNum[i] * (-1));
            }
        }
        console.log(arrInvert);
    } else {
        alert('salah');
    }
}

Invert(data);
Invert(nan);
Invert(number);


function PosNeg(arrNum) {
    let positive = 1;
    let negative = 0;
    if (arrNum.length && typeof arrNum !== 'string') {
        for (let i = 0; i < arrNum.length; i++) {
            if (typeof arrNum[i] === 'string') {
                alert('salah');
            } else {
                if (arrNum[i] > 0) {
                    positive *= arrNum[i];
                } else if (arrNum[i] < 0) {
                    negative += arrNum[i];
                }
            }
        }
        console.log(positive, negative);
    } else {
        alert('salah');
    }
}

PosNeg(data);
PosNeg(nan);
PosNeg(number);
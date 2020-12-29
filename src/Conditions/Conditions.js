console.log("If Else & Switch Case");

for (let i = 0; i < 30; i++) {
    if (i === 20) {
        let value = parseInt(prompt("masukkan angka:" ));
        if (!value) {
            alert("angka please");
            break;
        } else {
            console.log(value);
        }
    } else {
        console.log(i);
    }
}

let umur = parseInt(prompt("masukkan umur Anda:" ));

if (!umur) {
    alert("please lah yang bener");
} else if (umur < 18) {
    alert("Anda belum cukup umur");
} else if (umur >=18 && umur < 50) {
    alert("Anda sudah cukup umur");
} else {
    alert("Anda sudah terlalu berumur");
}

switch (umur) {
    case umur < 18:
        alert("Anda belum cukup umur");
        break;
        
    case umur >= 18 && umur < 50:
        alert("Anda sudah cukup umur");
        break;
    
    case umur > 50:
        alert("Anda sudah terlalu berumur");
        break;

    default:
        alert("please lah yang bener");
        break;
}
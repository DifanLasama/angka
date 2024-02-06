alert("GAME TEBAK ANGKA \n Pilih angka 1-10 \n kamu punya 3 kesempatan");

const angkaBenar = Math.floor(Math.random() * 10) + 1;

for(let nyawa = 3; nyawa >= 1; nyawa --){
    const tebakUser = prompt("Masukan tebakan angka");

if (tebakUser == angkaBenar){
    // validasi check input benar
    alert(`Tebakan anda benar \n Angka yang benar adalah ${angkaBenar}`);
    break;
} else if (tebakUser > angkaBenar) {
    //validasi check input lebih besar
    alert(`Tebakan anda terlalu TINGGI \n Anda masih punya ${nyawa - 1} kesempatan`);
} else if (tebakUser < angkaBenar) {
    //validasi check input lebih kecil
    alert(`Tebakan anda terlalu RENDAH \n Anda masih punya ${nyawa - 1} kesempatan`);
}

if (nyawa == 1){
    alert(`Anda gagal \n Angka yang benar adalah ${angkaBenar}`);
}
}


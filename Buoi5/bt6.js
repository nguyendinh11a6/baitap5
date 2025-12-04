
const chieuCao = 5; 

console.log("--- Tam Giác Sao (Cao 5 Dòng) ---");


for (let i = 1; i <= chieuCao; i++) {
    let dongHienTai = ""; 

 
    for (let j = 1; j <= i; j++) {
        dongHienTai += "*"; 
    }

    console.log(dongHienTai);
}
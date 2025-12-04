const diemSo = [12, 8, 15, 20, 5, 18, 22, 10, 7, 14];

let tongDiem = 0;

for (let i = 0; i < diemSo.length; i++) {

    tongDiem += diemSo[i];
}

console.log("Tổng điểm của đội là: " + tongDiem);

if (tongDiem > 100) {
    console.log("Đội thắng!");
}
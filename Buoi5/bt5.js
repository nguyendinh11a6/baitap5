const LAI_SUAT = 0.05;
const NAM_TOI_DA = 10;

let soTienVayBanDau;
let soDu;

do {

    const input = prompt("Nhập số tiền vay ban đầu (USD) [101-999]:");

    soTienVayBanDau = parseFloat(input);

    if (!isFinite(soTienVayBanDau) || soTienVayBanDau <= 100 || soTienVayBanDau >= 1000) {
        alert("Lỗi nhập liệu! Vui lòng nhập số tiền trong khoảng 101 USD đến 999 USD.");

        soTienVayBanDau = NaN; 
    }
    
} while (isNaN(soTienVayBanDau));

soDu = soTienVayBanDau; 
const mucTieuGapDoi = soTienVayBanDau * 2;
let nam = 1;

console.log(`--- Kịch bản Lãi Kép (Lãi suất ${LAI_SUAT * 100}%) ---`);
console.log(`Tiền vay ban đầu: $${soTienVayBanDau.toFixed(2)}`);
console.log(`Mục tiêu Gấp đôi: $${mucTieuGapDoi.toFixed(2)}`);

while (nam <= NAM_TOI_DA) {

    soDu = soDu * (1 + LAI_SUAT);

    console.log(`Năm ${nam}: Số dư là $${soDu.toFixed(2)}`);

    if (soDu > mucTieuGapDoi) {
        console.log(`🛑 Số dư đã vượt ${mucTieuGapDoi.toFixed(2)} USD (gấp đôi) sau ${nam} năm. Dừng tính toán!`);
        break; 
    }
    
    nam++;
}

if (soDu <= mucTieuGapDoi) {
    console.log("✅ Đã hoàn thành 10 năm. Số dư chưa đạt mức gấp đôi.");
}
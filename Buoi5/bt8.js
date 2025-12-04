// Dữ liệu Phiếu bầu (Mảng chứa các Đối tượng)
const phieuBau = [
    { ungCuVien: 'A', soPhieu: 50 },
    { ungCuVien: 'B', soPhieu: 30 },
    { ungCuVien: 'C', soPhieu: 45 },
    { ungCuVien: 'D', soPhieu: 25 }
];

let tongPhieu = 0;

console.log("--- Bắt đầu Phân Tích Dữ Liệu Bầu Cử ---");


console.log("1. Tính Tổng Phiếu:");


for (const banGhi of phieuBau) {
  
    
 
    tongPhieu += banGhi.soPhieu; 
    
    console.log(`Ứng cử viên ${banGhi.ungCuVien} có ${banGhi.soPhieu} phiếu.`);
}

console.log(`\n=> TỔNG PHIẾU BẦU là: ${tongPhieu}`);


console.log("\n2. In Chi Tiết Của Ứng Cử Viên 'C' (Dùng for...in):");


const ungCuVienC = phieuBau[2]; 


for (const thuocTinh in ungCuVienC) {
  
    
    console.log(`Thuộc tính: ${thuocTinh} -> Giá trị: ${ungCuVienC[thuocTinh]}`);
}

console.log("--- Phân Tích Hoàn Tất ---");
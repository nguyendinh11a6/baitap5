/**
 * Hàm kiểm tra một số có phải là số nguyên tố hay không.
 * @param {number} so - Số cần kiểm tra.
 * @returns {boolean} - Trả về true nếu là số nguyên tố, false nếu ngược lại.
 */
function kiemTraSoNguyenTo(so) {

    if (so < 2) {
        return false;
    }


    for (let uoc = 2; uoc <= Math.sqrt(so); uoc++) {
       
        if (so % uoc === 0) {
          
            return false; 
        }
    }

    return true;
}


let danhSachSoNguyenTo = [];

console.log("--- Tìm Số Nguyên Tố trong khoảng 2 đến 100 ---");


for (let soHienTai = 2; soHienTai <= 100; soHienTai++) {

    if (kiemTraSoNguyenTo(soHienTai)) {
        danhSachSoNguyenTo.push(soHienTai);
    }
}

console.log("Danh sách các số nguyên tố tìm được:");
console.log(danhSachSoNguyenTo);
const capDoToiDa = 20;

const capDoKhoBau = 13;

console.log("--- Bắt đầu khám phá hang động ---");

for (let capDo = 1; capDo <= capDoToiDa; capDo++) {
    console.log(`Đang khám phá cấp độ: ${capDo}...`);

    if (capDo === capDoKhoBau) {
        console.log(`🎉 Tìm thấy kho báu ở cấp ${capDoKhoBau}!`);
        
        break; 
    }
}

console.log("--- Nhiệm vụ hoàn thành ---");
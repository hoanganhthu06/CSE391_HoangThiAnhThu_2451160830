function tinhHoaDon(danhSachMon, isWednesday = false, tipEnabled = true) {
    let tong = 0;

    // Tính tổng tiền
    danhSachMon.forEach(mon => {
        const thanhTien = mon.gia * mon.soLuong;
        mon.thanhTien = thanhTien;
        tong += thanhTien;
    });

    // Giảm giá
    let giamGiaPercent = 0;

    if (tong > 1000000) {
        giamGiaPercent = 15;
    } else if (tong > 500000) {
        giamGiaPercent = 10;
    }

    // Wednesday (Thứ 4)
    if (isWednesday) {
        giamGiaPercent += 5;
    }

    let tienGiam = tong * giamGiaPercent / 100;

    // VAT + Tip (làm tròn)
    let vat = Math.round((tong - tienGiam) * 0.08);
    let tip = tipEnabled ? Math.round((tong - tienGiam) * 0.05) : 0;

    let thanhToan = Math.round(tong - tienGiam + vat + tip);

    function formatTien(tien) {
        return tien.toLocaleString("vi-VN") + "đ";
    }

    console.log("╔══════════════════════════════════════╗");
    console.log("║        HÓA ĐƠN NHÀ HÀNG           ║");
    console.log("╠══════════════════════════════════════╣");

    danhSachMon.forEach((mon, index) => {
        const line = `║ ${index + 1}. ${mon.ten.padEnd(10)} x${mon.soLuong} @${(mon.gia/1000).toFixed(0)}k = ${(mon.thanhTien/1000).toFixed(0)}k`;
        console.log(line.padEnd(46) + "║");
    });

    console.log("╠══════════════════════════════════════╣");
    console.log(`║ Tổng cộng:        ${formatTien(tong).padStart(18)} ║`);
    console.log(`║ Giảm giá (${giamGiaPercent}%): ${formatTien(tienGiam).padStart(14)} ║`);
    console.log(`║ VAT (8%):         ${formatTien(vat).padStart(18)} ║`);
    console.log(`║ Tip (5%):         ${formatTien(tip).padStart(18)} ║`);
    console.log("╠══════════════════════════════════════╣");
    console.log(`║ THANH TOÁN:       ${formatTien(thanhToan).padStart(18)} ║`);
    console.log("╚══════════════════════════════════════╝");
}

const danhSach = [
    { ten: "Phở bò", gia: 65000, soLuong: 2 },
    { ten: "Trà đá", gia: 5000, soLuong: 3 },
    { ten: "Bún chả", gia: 55000, soLuong: 1 }
];

tinhHoaDon(danhSach, true, true); 
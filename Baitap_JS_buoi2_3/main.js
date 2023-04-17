// bài tập 1 
document.getElementById("btnTinhLuong").onclick = function () {
    //    dom 
    var nhapLuongMotNgay = document.getElementById("nhapLuongMotNgay").value;
    var soNgayLam = document.getElementById("soNgayLam").value;
    // xử lý 
    var Luong = nhapLuongMotNgay * soNgayLam;
    var result = "Lương: " + Luong;
    document.getElementById("divResult").innerHTML = result;

};

// bài tập 2
document.getElementById("btnTinhTrungBinh").onclick = function () {
    var nhapSoThu1 = document.getElementById("nhapSoThu1").value * 1;
    var nhapSoThu2 = document.getElementById("nhapSoThu2").value * 1;
    var nhapSoThu3 = document.getElementById("nhapSoThu3").value * 1;
    var nhapSoThu4 = document.getElementById("nhapSoThu4").value * 1;
    var nhapSoThu5 = document.getElementById("nhapSoThu5").value * 1;
    // xử lý 
    var trungBinh = (nhapSoThu1 + nhapSoThu2 + nhapSoThu3 + nhapSoThu4 + nhapSoThu5) / 5;
    var result = "";
    var result = "Nhập số thứ 1: " + nhapSoThu1;
    var result = "Nhập số thứ 2: " + nhapSoThu2;
    var result = "Nhập số thứ 3: " + nhapSoThu3;
    var result = "Nhập số thứ 4: " + nhapSoThu4;
    var result = "Nhập số thứ 5: " + nhapSoThu5;
    var result = "<p>Trung bình: " + trungBinh + "</p>";
    document.getElementById("footerTrungBinh").innerHTML = result;

};
// bài tập 3
document.getElementById("btnQuyDoiTien").onclick = function () {
    var nhapSoTienUSD = document.getElementById("nhapSoTienUSD").value;
    var quydoitien = 23500 * nhapSoTienUSD;
    var result = "Nhập số tiền USD: " + nhapSoTienUSD;
    var result = "Quy đổi tiền: " + quydoitien;
    document.getElementById("footerQuyDoiTien").innerHTML = result;

};
// bài tập 4
document.getElementById("btnTinh").onclick = function () {
    var nhapChieuDai = document.getElementById("nhapChieuDai").value * 1;
    var nhapChieuRong = document.getElementById("nhapChieuRong").value * 1;
    var chuVi = (nhapChieuDai + nhapChieuRong) * 2;
    var dienTich = nhapChieuDai * nhapChieuRong;
    var result = "Nhập chiều dài: " + nhapChieuDai;
    var result = "Nhập chiều rộng: " + nhapChieuRong;
    var result = "Chu vi: " + chuVi;
    var result = "Diện tích: " + dienTich;
    document.getElementById("footerTinh").innerHTML = result;
};
//  bài tập 5
document.getElementById("btnTinhTong").onclick = function () {
    var nhapSoCo2ChuSo = document.getElementById("nhapSoCo2ChuSo").value;
    var unit = nhapSoCo2ChuSo % 10;
    var ten = Math.floor(nhapSoCo2ChuSo / 10);
    var Tong = unit + ten;
    var result = "Hàng đơn vị: " + unit;
    var result = "Hàng chục: " + ten;
    var result = "Tổng: " + Tong;
    document.getElementById("footerTong").innerHTML = result;
};

const dsnv = new DanhSachNhanVien();
const validation = new Validation();

function setLocalStorage() {
    localStorage.setItem("DSNV",JSON.stringify(dsnv.mangNV));
}

function getLocalStorage() {
    if(localStorage.getItem("DSNV") != null){
        dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
        hienThiTableNV(dsnv.mangNV);
    }
}

getLocalStorage();

function themNhanVien() {

   var taiKhoan = document.querySelector("#tknv").value;
   var hoTen = document.querySelector("#name").value;
   var email = document.querySelector("#email").value;
   var matKhau = document.querySelector("#password").value;
   var ngayLam = document.querySelector("#datepicker").value;
   var luongCoBan = document.querySelector("#luongCB").value;
   var chucVu = document.querySelector("#chucvu").value;
   var gioLam = document.querySelector("#gioLam").value;

   taiKhoan = taiKhoan.replace(/\s/g,"");

   var isValid = true;
    isValid &= validation.checkEmpty(taiKhoan,"Tài khoản không được để trống","tbTKNV") && validation.checkTK(taiKhoan,"Tài khoản phải từ 4-6 ký tự","tbTKNV") && validation.checkExistTK(taiKhoan, "Tài khoản không được trùng", "tbTKNV", dsnv.mangNV);

    isValid &= validation.checkEmpty(hoTen,"Họ và tên không được để trống","tbTen") && validation.checkTen(hoTen,"Họ và tên không đúng định dạng","tbTen");

    isValid &= validation.checkEmpty(email, "Email không được để trống", "tbEmail") && validation.checkEmail(email, "Email không đúng định dạng", "tbEmail");

    isValid &= validation.checkEmpty(matKhau,"Mật khẩu không được để trống","tbMatKhau") && validation.checkMK(matKhau, "Mật khẩu từ 6-10 ký tự (1 số, 1 in hoa, 1 đặc biệt)","tbMatKhau");

    isValid &= validation.checkEmpty(ngayLam,"Ngày làm không được để trống","tbNgay") && validation.checkNgayLam(ngayLam,"Ngày làm không đúng định dạng","tbNgay");

    isValid &= validation.checkEmpty(luongCoBan, "Lương cơ bản không được để trống", "tbLuongCB") && validation.checkLuongCoBan(luongCoBan, "Lương cơ bản phải là số nguyên lớn hơn 1.000.000 và nhỏ hơn 20.000.000", "tbLuongCB");

    isValid &= validation.checkDropdown("chucvu", "Chức vụ phải được chọn", "tbChucVu");

    isValid &= validation.checkEmpty(gioLam, "Giờ làm không được để trống", "tbGiolam") && validation.checkGioLam(gioLam, "Giờ làm phải là số nguyên lớn hơn 80 và nhỏ hơn 200", "tbGiolam");

   if(isValid){
    var nv = new NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, luongCoBan, chucVu, gioLam);
    nv.tinhTongLuong();
    nv.xepLoaiNhanVien();

    dsnv.themNV(nv);
    hienThiTableNV(dsnv.mangNV);
    setLocalStorage();
   }
}

function hienThiTableNV(mang) {
    var content = "";

    mang.map(function(nv, index){
        content += `<tr>
        <td>${nv.taiKhoan}</td>
        <td>${nv.hoTen}</td>
        <td>${nv.email}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.tongLuong}</td>
        <td>${nv.loaiNhanVien}</td>
        <td>
         <button class="btn btn-danger" onclick = "xoaNhanVien('${nv.taiKhoan}')" >Xoá</button>
         <button class="btn btn-success" onclick ="xemThongTinNV('${nv.taiKhoan}')" data-toggle="modal" data-target="#myModal" >Xem</button>
        </td>
        </tr>`
    });

    document.querySelector("#tableDanhSach").innerHTML = content;
}

function xoaNhanVien(taiKhoanNV){
    dsnv.xoaNV(taiKhoanNV);
    setLocalStorage();
    getLocalStorage();
}

function xemThongTinNV(taiKhoanNV){
    var viTri = dsnv.timViTriNhanVien(taiKhoanNV);
    if(viTri > -1){
    document.querySelector("#tknv").value = dsnv.mangNV[viTri].taiKhoan;
    document.querySelector("#tknv").disabled = true;

    document.querySelector("#name").value = dsnv.mangNV[viTri].hoTen;
    document.querySelector("#email").value = dsnv.mangNV[viTri].email;
    document.querySelector("#password").value = dsnv.mangNV[viTri].matKhau;
    document.querySelector("#datepicker").value = dsnv.mangNV[viTri].ngayLam;
    document.querySelector("#luongCB").value = dsnv.mangNV[viTri].luongCoBan;
    document.querySelector("#chucvu").value = dsnv.mangNV[viTri].chucVu;
    document.querySelector("#gioLam").value = dsnv.mangNV[viTri].gioLam;
    }
}

function capNhatNhanVien(){
    var taiKhoan = document.querySelector("#tknv").value;
    var hoTen = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var matKhau = document.querySelector("#password").value;
    var ngayLam = document.querySelector("#datepicker").value;
    var luongCoBan = document.querySelector("#luongCB").value;
    var chucVu = document.querySelector("#chucvu").value;
    var gioLam = document.querySelector("#gioLam").value;
 
    var isValid = true;

     isValid &= validation.checkEmpty(hoTen,"Họ và tên không được để trống","tbTen") && validation.checkTen(hoTen,"Họ và tên không đúng định dạng","tbTen");
 
     isValid &= validation.checkEmpty(email, "Email không được để trống", "tbEmail") && validation.checkEmail(email, "Email không đúng định dạng", "tbEmail");
 
     isValid &= validation.checkEmpty(matKhau,"Mật khẩu không được để trống","tbMatKhau") && validation.checkMK(matKhau, "Mật khẩu từ 6-10 ký tự (1 số, 1 in hoa, 1 đặc biệt)","tbMatKhau");
 
     isValid &= validation.checkEmpty(ngayLam,"Ngày làm không được để trống","tbNgay") && validation.checkNgayLam(ngayLam,"Ngày làm không đúng định dạng","tbNgay");
 
     isValid &= validation.checkEmpty(luongCoBan, "Lương cơ bản không được để trống", "tbLuongCB") && validation.checkLuongCoBan(luongCoBan, "Lương cơ bản phải là số nguyên lớn hơn 1.000.000 và nhỏ hơn 20.000.000", "tbLuongCB");
 
     isValid &= validation.checkDropdown("chucvu", "Chức vụ phải được chọn", "tbChucVu");
 
     isValid &= validation.checkEmpty(gioLam, "Giờ làm không được để trống", "tbGiolam") && validation.checkGioLam(gioLam, "Giờ làm phải là số nguyên lớn hơn 80 và nhỏ hơn 200", "tbGiolam");
 
    if(isValid){
     var nv = new NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, luongCoBan, chucVu, gioLam);
     nv.tinhTongLuong();
     nv.xepLoaiNhanVien();
 
     console.log(nv);
     dsnv.capNhatNV(nv);
     hienThiTableNV(dsnv.mangNV);
     setLocalStorage();

     resetForm();
     alert("🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉    🎉🎉🎉🎉🎉🎉  CẬP NHẬT THÀNH CÔNG   🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉")
     document.querySelector("#btnDong").click();
    }
}

function resetForm(){
    document.querySelector(".modal-body form").reset();
    document.querySelector("#tknv").disabled = false;
}

document.querySelector("#btnCapNhat").onclick = capNhatNhanVien;

function timKiemNhanVien(){
    var tuKhoaTimKiem = document.querySelector("#searchName").value;

   var mangKQ = dsnv.timKiemNV(tuKhoaTimKiem);
   hienThiTableNV(mangKQ);
}

document.querySelector("#btnTimNV").addEventListener("click", function(){
timKiemNhanVien();
});

document.querySelector("#searchName").onkeyup = timKiemNhanVien;
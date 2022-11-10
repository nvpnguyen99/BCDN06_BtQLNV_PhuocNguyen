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
   var matKhau = document.querySelector("#password".value);
   var ngayLam = document.querySelector("#datepicker").value;
   var luongCoBan = document.querySelector("#luongCB").value;
   var chucVu = document.querySelector("#chucvu").value;
   var gioLam = document.querySelector("#gioLam").value;

   taiKhoan = taiKhoan.replace(/\s/g,"");

   var isValid = true;
    isValid &= validation.checkEmpty(taiKhoan,"Tài khoản không được để trống","tbTKNV") && validation.checkTK(taiKhoan,"Tài khoản phải từ 4-6 ký tự","tbTKNV");

    isValid &= validation.checkEmpty(hoTen,"Họ và tên không được để trống","tbTen") && validation.checkTen(hoTen,"Họ và tên không đúng định dạng","tbTen");

   if(isValid){
    var nv = new NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, luongCoBan, chucVu, gioLam);
    nv.tinhTongLuong();

    console.log(nv);
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
         <button class="btn btn-danger" >Xoá</button>
         <button class="btn btn-success" >Xem</button>
        </td>
        </tr>`
    });

    document.querySelector("#tableDanhSach").innerHTML = content;
}
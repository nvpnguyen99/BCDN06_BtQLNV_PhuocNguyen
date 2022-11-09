const dsnv = new DanhSachNhanVien();

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

   var nv = new NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, luongCoBan, chucVu, gioLam);

   console.log(nv);
   dsnv.themNV(nv);
   hienThiTableNV(dsnv.mangNV);
   setLocalStorage();
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
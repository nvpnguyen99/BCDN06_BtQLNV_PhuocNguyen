function NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, luongCoBan, chucVu, gioLam){
    this.taiKhoan = taiKhoan;
    this.hoTen = hoTen; 
    this.email = email; 
    this.matKhau = matKhau; 
    this.ngayLam = ngayLam; 
    this.luongCoBan = luongCoBan; 
    this.chucVu = chucVu; 
    this.gioLam = gioLam; 
    this.tongLuong = 0; 
    this.loaiNhanVien = "";

    this.tinhTongLuong = function(){
        if(this.chucVu == "Sếp"){
            this.tongLuong = luongCoBan * 3;
        } else if(this.chucVu == "Trưởng phòng"){
            this.tongLuong = luongCoBan * 2;
        } else {
            this.tongLuong = luongCoBan;
        }
    }

    this.xepLoaiNhanVien = function(){
        if(this.gioLam >= 192){
            this.loaiNhanVien = "nhân viên Xuất Sắc";
        } else if(this.gioLam >= 176){
            this.loaiNhanVien = "nhân viên Giỏi";
        } else if(this.gioLam >= 160){
            this.loaiNhanVien = "nhân viên Khá";
        } else {
            this.loaiNhanVien = "nhân viên Trung Bình";
        }
    }
}
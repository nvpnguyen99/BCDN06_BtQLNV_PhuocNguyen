function DanhSachNhanVien(){
    this.mangNV = [];

    this.themNV = function(nv){
        this.mangNV.push(nv);
    }

    this.timViTriNhanVien = function(taiKhoanNV){
        var viTri = -1;
        viTri = this.mangNV.findIndex(function(nv) {
            return taiKhoanNV == nv.taiKhoan;
        })

        return viTri;
    }

    this.xoaNV = function(taiKhoanXoa){
        var viTri = this.timViTriNhanVien(taiKhoanXoa);
        if(viTri != -1){
            this.mangNV.splice(viTri, 1);
        }
    }
}

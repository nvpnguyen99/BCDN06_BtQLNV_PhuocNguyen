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

    this.capNhatNV = function(nhanVienCapNhat){
      var viTri = this.timViTriNhanVien(nhanVienCapNhat.taiKhoan);
      if(viTri != -1){
        this.mangNV[viTri] = nhanVienCapNhat;
      }
    }

    this.timKiemNV = function(tuKhoaTimKiem){
        var mangKQ = [];
        var tuKhoa = tuKhoaTimKiem.toLowerCase().replace(/\s/g,"");
        
        this.mangNV.map(function(nv){
            var xepLoaiNV = nv.loaiNhanVien.toLowerCase().replace(/\s/g,"");

            if(xepLoaiNV.indexOf(tuKhoa) > -1){
                mangKQ.push(nv)
            }
        });
        return mangKQ;
    }
}

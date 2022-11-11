function Validation() {

    // TODO: Kiểm tra không để trống
    this.checkEmpty = function(valInput, msgErr, spanID){
        if(valInput.trim() == ""){
            document.querySelector("#" + spanID).innerHTML = msgErr;
            document.querySelector("#" + spanID).style.display = 'block';
            return false;
        }

        document.querySelector("#" + spanID).innerHTML = "";

        return true;
    }

    // TODO: Kiểm tra tài khoản tối đa 4-6 ký tự 
    this.checkTK = function(valInput, msgErr, spanID){

        var pattern = /^(?!.*\s).{4,6}$/;

        if(valInput.match(pattern)){
            document.querySelector("#" + spanID).innerHTML = "";
            return true;
        }

        document.querySelector("#" + spanID).innerHTML = msgErr;
        document.querySelector("#" + spanID).style.display = 'block';
        return false;

    }

    // TODO: Kiểm tra tài khoản có trùng không
    this.checkExistTK = function(valInput, msgErr, spanID, mangNV){

        var isExist = mangNV.some(function(nv){
            return nv.taiKhoan === valInput;
        });

        if(isExist){
            document.querySelector("#" + spanID).innerHTML = msgErr;
            document.querySelector("#" + spanID).style.display = 'block';
            return false;
        }
        document.querySelector("#" + spanID).innerHTML = "";
        return true;
    }

    // TODO: Kiểm tra họ tên phải là chữ
    this.checkTen = function(valInput, msgErr, spanID){
        
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảâấầẩẫậắằẳẵặẹèẻẽêềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;

        if(valInput.match(pattern)){
            document.querySelector("#" + spanID).innerHTML = "";
            return true;
        }

        document.querySelector("#" + spanID).innerHTML = msgErr;
        document.querySelector("#" + spanID).style.display = 'block';
        return false;
    }

    // TODO: Kiểm tra email
    this.checkEmail = function(valInput, msgErr, spanID){
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(valInput.match(pattern)){
            document.querySelector("#" + spanID).innerHTML = "";
            return true;
        }
        document.querySelector("#" + spanID).innerHTML = msgErr;
        document.querySelector("#" + spanID).style.display = 'block';
        return false;
    }

    // TODO: Kiểm tra mật khẩu 6-10 ký tự (gồm 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)
    this.checkMK = function(valInput, msgErr, spanID){
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;

        if(valInput.match(pattern)){
            document.querySelector("#" + spanID).innerHTML = "";
            return true;
        }
        document.querySelector("#" + spanID).innerHTML = msgErr;
        document.querySelector("#" + spanID).style.display = 'block';
        return false;
    }

    // TODO: Kiểm tra ngày làm
    this.checkNgayLam = function(valInput, msgErr, spanID){
        var pattern = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;

        if(valInput.match(pattern)){
            document.querySelector("#" + spanID).innerHTML = "";
            return true;
        }
        document.querySelector("#" + spanID).innerHTML = msgErr;
        document.querySelector("#" + spanID).style.display = 'block';
        return false;
    }

    // TODO: Kiểm tra lương cơ bản
    this.checkLuongCoBan = function(valInput, msgErr, spanID){
        
        var pattern = /^[1-9]\d*$/;
        if (valInput.match && valInput >= 1000000 && valInput <= 20000000) {
            document.querySelector("#" + spanID).innerHTML = "";
            return true;
        }
        document.querySelector("#" + spanID).innerHTML = msgErr;
        document.querySelector("#" + spanID).style.display = 'block';
        return false;
    }

    // TODO: Kiểm tra dropdown
    this.checkDropdown = function(selectID, msgErr, spanID){
        var index = document.querySelector("#" + selectID).selectedIndex;
        if(index == 0){
            document.querySelector("#" + spanID).innerHTML = msgErr;
            document.querySelector("#" + spanID).style.display = 'block';
            return false;
        }
        document.querySelector("#" + spanID).innerHTML = "";
        return true;
    }

        // TODO: Kiểm tra số giờ làm 
        this.checkGioLam = function(valInput, msgErr, spanID){
        
            var pattern = /^[1-9]\d*$/;
            if (valInput.match && valInput >= 80 && valInput <= 200) {
                document.querySelector("#" + spanID).innerHTML = "";
                return true;
            }
            document.querySelector("#" + spanID).innerHTML = msgErr;
            document.querySelector("#" + spanID).style.display = 'block';
            return false;
        }
}
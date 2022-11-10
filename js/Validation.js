function Validation() {

    this.checkEmpty = function(valInput, msgErr, spanID){
        if(valInput.trim() == ""){
            document.querySelector("#" + spanID).innerHTML = msgErr;
            document.querySelector("#" + spanID).style.display = 'block';
            return false;
        }

        document.querySelector("#" + spanID).innerHTML = "";

        return true;
    }

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
}

/**
 * Mảng chính
 */
var numArray = [];
function addELement() {
    var num = Number(document.querySelector("#inputSoN").value);

    // thêm phần tử và mảng
    // push()
    numArray.push(num);
    // console.log(numArray);
    document.getElementById("txtThemSo").innerHTML = " " + numArray;
}
document.getElementById("btnThemSo").onclick = addELement;

/**
 * Bài 1: Tính Số Dương
 */
function sum() {
    // khai báo biến tổng 
    var sum = 0;
    // duyệt mảng => để kiểm tra số chẳn trong mảng
    // index => vị trí của phần tử trong mảng 
    for (var i = 0; i < numArray.length; i++) {
        // kiểm tra giá trị số chẳn
        // % chia lấy phần dư
        if (numArray[i] >= 0) {
            // nếu là số chẳn thì cộng vào biến Sum
            // sum = sum + numArray[i];
            sum += numArray[i];
        }
    }
    document.getElementById("txtSum").innerHTML = "Tổng Số Dương: " + sum;
}
document.getElementById("btnSum").onclick = sum;

/**
 * Bài 2: Đếm số dương
 */
function countNum() {
    // khai báo biến đếm
    var count = 0;
    // duyệt mảng => kiểm tra số dương
    for (var i = 0; i < numArray.length; i++) {
        // kiểm tra số dương
        if (numArray[i] > 0) {
            count += 1;
        }
    }
    document.getElementById("txtDemSo").innerHTML = "Số Dương: " + count;
}
document.getElementById("btnDemSo").onclick = countNum;

/**
 * Bài 3: Tìm số nhỏ nhất
 */

function soBeNhat() {
    var min = numArray[0];
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] < min) {
            min = numArray[i];
        }
    }
    document.getElementById("txtMin").innerHTML = "Số bé nhất là :" + min;
}
document.getElementById("btnMin").onclick = soBeNhat;

/**
 * Bài 4: Tìm số dương bé nhất
 */
function timVTDuong(arr) {
    var vt = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            vt = arr[i];
            break;
        }
    }
    return vt;
}
function timMinDuong() {
    var minDuong = timVTDuong(numArray);
    for (var i = 1; i < numArray.length; i++) {
        if (numArray[i] > 0 && numArray[i] < minDuong) {
            minDuong = numArray[i];
        }
    }
    document.getElementById("txtDuongMin").innerHTML = "Số dương nhỏ nhất là : " + minDuong;
}
document.getElementById("btnDuongMin").onclick = timMinDuong;

/**
 * Bài 5: Tìm Số Chẳn Cuối Cùng
 */
function timSoChanCuoi() {
    var soChan = 0;
    for (var i = 1; i < numArray.length; i++) {
        if (numArray[i] % 2 == 0) {
            soChan = numArray[i];
        }
    }
    if (soChan == 0) {
        document.getElementById("txtSoChan").innerHTML = "0";
    } else {
        document.getElementById("txtSoChan").innerHTML = "Số chẵn cuối cùng là : " + soChan;
    }
}
document.getElementById("btnSoChan").onclick = timSoChanCuoi;

/**
 * Bài 6: Đổi Số
 */
function swap() {
    var vt1 = Number(document.getElementById("inputNum1").value);
    var vt2 = Number(document.getElementById("inputNum2").value);
    var temp = 0;

    if (vt1 >= numArray.length || vt2 >= numArray.length) {
        alert("vị trí phải nhỏ hơn " + (numArray.length - 1));
    } else {
        temp = numArray[vt1];
        numArray[vt1] = numArray[vt2];
        numArray[vt2] = temp;
    }

    document.getElementById("txtDoiCho").innerHTML = "Mảng sau khi đổi: " + numArray;
}
document.getElementById("btnDoiCho").onclick = swap;

/**
 * Bài 7: Sắp xếp tăng dần
 */

function sapXepTangDan() {
    var temp = 0;
    for (var i = 0; i < numArray.length; i++) {
        for (var j = 0; j < numArray.length; j++) {
            if (numArray[j] > numArray[j + 1]) {
                temp = numArray[j];
                numArray[j] = numArray[j + 1];
                numArray[j + 1] = temp;
            }
        }
    }
    document.getElementById("txtSapXepTang").innerHTML = "Mảng sau khi sắp xếp: " + numArray;
}
document.getElementById("btnSapXepTang").onclick = sapXepTangDan;

/**
 * Bài 8: Đếm số nguyên
 */
 function ktSNT(so) {
    if (so < 2) {
        return false;
    }
    for (var i = 2; i < so; i++) {
        if (so % i == 0) {
            return false;
        }
    }
    return true;
}
function inSo() {
    var snt = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (Number.isInteger(numArray[i]) && ktSNT(numArray[i])) {
            snt = numArray[i];
            break;
        }
    }
    if (snt == 0) {
        document.getElementById("txtSoNguyenTo").innerHTML = "-1";
    }
    document.getElementById("txtSoNguyenTo").innerHTML = "Số nguyên tố đầu tiên: " + snt;
}
document.getElementById("btnSoNguyenTo").onclick = inSo;

/**
 * Bài 9: Đếm số nguyên
 */
 var numArr2 = [];

 function addEle() {
     var num = Number(document.getElementById("inputSo").value);
 
     numArr2.push(num);
     document.getElementById("txtSo").innerHTML = "=> " + numArr2;
 }
 document.getElementById("btnThem").onclick = addEle;
 
 function demSoNguyen() {
     var count = 0;
     for (var i = 0; i < numArr2.length; i++) {
         if (Number.isInteger(numArr2[i])) {
             count ++;
         }
     }
     document.getElementById("txtDemSoNguyenTo").innerHTML = "Số nguyên: " + count;
 }
 document.getElementById("btnDemSoNguyenTo").onclick = demSoNguyen;

 /**
  * Bài 10: So sánh số lượng âm dương
  */
 function soSanhAmDuong(){
     var soAm = 0;
     var soDuong = 0;
     for(var i = 0; i < numArray.length; i++){
        if(numArray[i] > 0){
            soDuong += 1;
        }else if(numArray[i]<0){
            soAm +=1;
        }
     }
     if(soDuong > soAm){
        document.getElementById("txtSoSanh").innerHTML = "Số dương > Số âm";
     }else if(soDuong < soAm){
        document.getElementById("txtSoSanh").innerHTML = "Số dương < Số âm";
     }else{
        document.getElementById("txtSoSanh").innerHTML = "Số dương = Số âm";
     }
 }
 document.getElementById("btnSoSanh").onclick = soSanhAmDuong;
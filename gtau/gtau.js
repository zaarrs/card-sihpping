let priceElem = document.getElementById("price");
let subTotalElem = document.getElementById("subTotal");
let shippingElem = document.getElementById("shipping");
let discountElem = document.getElementById("discount");
let totalElem = document.getElementById("total");
let quantityElem = document.getElementById("quantity");
let textVoucherElem = document.getElementById("textVoucher");
let codeVoucherElem = document.getElementById("codeVoucher")

// document.getElementById('subTotal').innerHmtl = 10000;
subTotalElem.innerHTML = priceElem.innerHTML;

function totalAll(subTotal, shipping = 0, discount = 0) {
    return Number(subTotal) + Number(shipping) - Number(discount);
}

totalElem.innerHTML = totalAll(subTotalElem.innerHTML, shippingElem.innerHTML, discountElem.innerHTML);

// console.log(totalAll(10000, 2000, 5000))
let tambah = (num) => {
    let Number = parseFloat(quantityElem.value);
    Number += num;
    quantityElem.value = Number;

    let hasil = Number * priceElem.innerHTML;
    subTotalElem.innerHTML = hasil
    
    let total = totalAll(subTotalElem.innerHTML, shippingElem.innerHTML, discountElem.innerHTML);
    totalElem.innerHTML = total;
}
let kurang = (num) => {
    let Number = parseFloat(quantityElem.value);
    Number -= num;
    quantityElem.value = Number;

    let hasil = Number * priceElem.innerHTML;
    subTotalElem.innerHTML = hasil

    let total = totalAll(subTotalElem.innerHTML, shippingElem.innerHTML, discountElem.innerHTML);
    totalElem.innerHTML = total;
}

function buttonVoucher(){
    let inputVoucher = codeVoucherElem.value;
    // console.log(inputVoucher)
    if(inputVoucher == "Voucher123"){
        textVoucherElem.innerHTML = "Voucher 20% Berhasil Diterapkan";
        textVoucherElem.classList.remove("applied")
        textVoucherElem.classList.add("success")

        discountElem.innerHTML = 2000;
    }else if(inputVoucher === "fulan") {
        discountElem.innerHTML = 1000;
    }else{
        discountElem.innerHTML = 0;
    }
}

function buttonVoucher(){
    let inputVoucher = codeVoucherElem.value;
    // console.log(inputVoucher)
    if(inputVoucher == "fulan"){
        textVoucherElem.innerHTML = "Voucher 10% Berhasil Diterapkan";
        textVoucherElem.classList.remove("applied")
        textVoucherElem.classList.add("success")

        discountElem.innerHTML = 2000;
    }else if(inputVoucher === "fulan") {
        discountElem.innerHTML = 1000;
    }else{
        discountElem.innerHTML = 0;
    }
}
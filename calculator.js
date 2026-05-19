function calculateShippingFee(serviceType, weight) {
    let baseFee = 0;
    let surcharge = 0;
    switch(serviceType){
        case 'STANDARD':
            baseFee = 20000;
            break;
        case 'EXPRESS':
            baseFee = 40000;
            break;
        case 'SAME_DAY':
            baseFee = 80000;
            break;
        default:
            return "Lỗi: loại dịch vụ không hợp lệ!";
    }
    if (weight < 5){
        surcharge = 0;
    }
    else if (weight <=20 ){
        surcharge = 10000;
    }
    else {
        surcharge = 50000;
    }
    return baseFee + surcharge;
}
console.log("Cước giao chuẩn 3kg:", calculateShippingFee("STANDARD", 3));
console.log("Cước phí giao hàng:",calculateShippingFee("EXPRESS", 5));
console.log("Cước phí giao hàng:",calculateShippingFee("SAME_DAY",20));
console.log("Cước phí giao hàng:",calculateShippingFee("STANDARD", 21));
console.log("Cước phí giao hàng:",calculateShippingFee("VIP", 10));

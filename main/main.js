module.exports = function main(one_mail_price,mails,wait) {
    var price=6+(mails-2)*one_mail_price+wait*0.25;
    if(mails>8){
        price+=(mails-8)*(one_mail_price/2);
    }
    price=convertToInt(price);
    console.log('\n'+"本次需付费："+price);
    return price;
};

function convertToInt(price) {
    return parseInt(price+0.5);
}
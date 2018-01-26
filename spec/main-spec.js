const main = require('../main/main');

describe('taxi fee', function () {
    it('give taxi fee when mails less then 8, more then 2',function () {
        var mail=4;
        var price=0.8;
        var wait=0;
        var result=main(price,mail,wait);
        var expected=8;
        expect(result).toEqual(expected);
    });
    it('give taxi fee when mail more then 8',function () {
        var mail=12;
        var price=0.8;
        var wait=0;
        var result=main(price,mail,wait);
        var expected=16;
        expect(result).toEqual(expected);
    });
    it('give taxi fee when mail less then 2',function () {
        var mail=2;
        var price=0.8;
        var wait=0;
        var result=main(price,mail,wait);
        var expected=6;
        expect(result).toEqual(expected);
    });
    it('give taxi fee when need stop to wait',function () {
        var mail=2;
        var price=0.8;
        var wait=1;
        var result=main(price,mail,wait);
        var expected=6;
        expect(result).toEqual(expected);
    })
});

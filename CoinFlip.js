function coinFlip(count) {
    var obj = { record: [], headsCount: 0, tailsCount: 0 };
    for (var i = 0; i < count; i++) {
        if ((Math.floor((Math.random() * 2) + 1)) === 1) {
            obj.record.push('Heads');
            obj.headsCount++;
        } else {
            obj.record.push('Tails');
            obj.tailsCount++;
        }
    }
    return obj;
}
var count = parseFloat(prompt('Nhập số = '));
console.log(coinFlip(count))
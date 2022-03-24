const Fibonacci = (number) => {
    var a = 1, b = 0, temp;
    while (number >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        number--;
    }
    return b;

}
var number = parseFloat(prompt('nhap so = '));
document.write("KQ: " + Fibonacci(number));
const factorial = (n) => {
    let answer = 1;
    if (n == 0 || n == 1) {
        return answer;
    } else {
        for (var i = n; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    }
}
var n = parseFloat(prompt('nhap so = '));
answer = factorial(n)
document.write("Giai thừa của " + n + " là " + answer);
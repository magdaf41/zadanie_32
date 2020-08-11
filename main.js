var num1 = 2;
var num2 = 5;

function myFunc(num1, num2) {
    if (num1 > num2) {
        return num1 + " jest większe od " + num2;
    }
    else {
        return num2 + " jest większe od " + num1;
    }
}

console.log(myFunc(num1, num2));

var num1 = 2;
var num2 = 5;

function myFunc(num1, num2) {
    let result = num1 == num2;
    if (num1 > num2) {
        console.log("2 jest większe od 5");
    }
    else {
        console.log('5 jest większe od 2');
    }
    return result;
}

console.log(myFunc(num1, num2));

function isEven(number) {
    //condition apply
    if (number % 2 == 0) {
        // console.log('number is even');
        return true;
    }
    else {
        // console.log('number is odd');
        return false;
    }
}

var myNumber = 11;
var isEvenOrNot = isEven(myNumber);
console.log(isEvenOrNot);
//declare function
function mToCm(metre) {
    //meter to centimeter calculation
    var centi = metre * 100;
    return centi;
}

var meter = 10;
//call function and send meter as a parameter
var centimeter = mToCm(meter);
console.log(centimeter)
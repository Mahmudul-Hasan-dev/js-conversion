//declare function
function mileTokm(miles) {
    // mile to km calculation
    var kilo = miles * 1.60934;
    return kilo;
}
var mile = 20;
// call function and send mile as a parameter
var km = mileTokm(mile);
console.log(km);
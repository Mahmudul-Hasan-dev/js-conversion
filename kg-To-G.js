//declare function
function KgToG(keji) {
    //convertion calculation
    var gram = keji * 1000;
    return gram;
}

var kg = 12;
//function call and send kg as a parameter
var gram = KgToG(kg);
console.log(gram);
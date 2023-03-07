//declare function
function inchTofeet(inches) {
    const feet = inches / 12;
    return feet;
}

const dadaInches = 144;
const dadafeet = inchTofeet(dadaInches);
console.log(dadafeet);
//leap year function apply
function isLeapYear(year) {
    const reminder = year % 4;
    //reminder condition apply. in leap year reminder will be 0.
    if (reminder == 0) {
        return true;
    }
    else {
        return false;
    }
}

const myYear = 2024;
const isLeapyear = isLeapYear(myYear);
console.log(isLeapyear);
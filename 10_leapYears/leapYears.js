const leapYears = function(year) {
    const isDivisibleByFourHundred = year % 400 === 0;
    const isDivisibleByFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    return isDivisibleByFourHundred || (isDivisibleByFour && !isCentury);
};

// Do not edit below this line
module.exports = leapYears;

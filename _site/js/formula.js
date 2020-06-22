// This is the main calculating function for Pace Per Mile
const pacePerMile = function () {
    const hours = parseInt(document.runCalculator.hours.value);
    const minutes = parseInt(document.runCalculator.minutes.value);
    const seconds = parseInt(document.runCalculator.seconds.value);
    const mileage = parseFloat(document.runCalculator.mileage.value); // parseFloat ensures decimal input option
    // console.log(hours + " " + minutes + " " + seconds + " " + mileage);
    // This combines the seconds, minutes and hours into total seconds and divides that by mileage to get seconds per mile
    const secondsPerMile = (seconds + minutes * 60 + hours * 60 * 60) / mileage;
    // Calculates the number of hours per mile;
    const paceHours = Math.floor(secondsPerMile / 3600);
    const timeLeft = secondsPerMile - paceHours * 3600;
    // Converts secondsPerMile to a minutes per mile in decimal form
    const minutesDecimal = timeLeft / 60;
    // From minutesDecimal assigns everything left of the decimal point to left
    const paceMinutes = Math.floor(minutesDecimal);
    // From minutesDecimal assigns everything right of the decimal point to rightDecimal
    const paceSeconds = Math.round((minutesDecimal % 1) * 60);
    // Adds zeros to each field if needed
    function zeroes(string, pad, length) {
        return (new Array(length + 1).join(pad) + string).slice(-length);
    }
    const pace =
    zeroes(paceHours, "0", 2) +
    ":" +
    zeroes(paceMinutes, "0", 2) +
    ":" +
    zeroes(paceSeconds, "0", 2);
    document.runCalculator.result.value = pace;
    console.log(hours);
};

// // This combines the seconds, minutes and hours into TOTAL SECONDS
// const timeSeconds = function timeInSeconds(seconds, minutes, hours) {
    //     return seconds + minutes * 60 + hours * 60 * 60;
// };

// // Takes total seconds and computes seconds per mile
// const secondsPerMile = function secondsMiles(timeSeconds, mileage) {
//     return timeSeconds / mileage;
// };

// // Converts secondsPerMile to a minutes per mile in decimal form
// const minutesDecimal = function minutesAsDecimal(secondsPerMile) {
//     return secondsPerMile / 60;
// };

// // From minutesDecimal assigns everything right of the decimal point to rightDecimal
// const rightDecimal = function calcRightDecimal(minuteDecimal) {
//     return minuteDecimal % 1;
// };

// // From minutesDecimal assigns everything left of the decimal point to leftDecimal
// const leftDecimal = function calcLeftDecimal(minuteDecimal) {
//     return Math.floor(minuteDecimal);
// };

// // Converts rightDecimal to seconds
// const paceSeconds = function (rightDecimal) {
//     return rightDecimal * 60;
// };

// // Re-assigns leftDecimal to paceMinutes
// const paceMinutes = function (leftDecimal) {
//     return leftDecimal;
// };

//!!! Need to include hours as well!

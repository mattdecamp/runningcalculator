let seconds;
let minutes;
let hours;
let mileage;

const pacePerMile = function (seconds, minutes, hours, mileage) {
    // This combines the seconds, minutes and hours into total seconds and divides that by mileage to get seconds per mile
    const secondsPerMile = (seconds + minutes * 60 + hours * 60 * 60) / mileage;
    console.log("seconds per mile:" + " " + secondsPerMile);
    // Calculates the number of hours per mile;
    const paceHours = Math.floor(secondsPerMile / 3600);
    console.log("Hours:" + " " + paceHours);
    const timeLeft = secondsPerMile - paceHours * 3600;
    console.log("Time Left:" + " " + timeLeft);
    // Converts secondsPerMile to a minutes per mile in decimal form
    const minutesDecimal = timeLeft / 60;
    // From minutesDecimal assigns everything left of the decimal point to left
    const paceMinutes = Math.floor(minutesDecimal);
    console.log("pace in minutes:" + " " + paceMinutes);
    // From minutesDecimal assigns everything right of the decimal point to rightDecimal
    const paceSeconds = Math.round((minutesDecimal % 1) * 60);
    console.log("Seconds" + " " + paceSeconds);
    //This adds zeros to each field if needed
    function zeroes(string, pad, length) {
        return (new Array(length + 1).join(pad) + string).slice(-length);
    }
    const pace =
        zeroes(paceHours, "0", 2) +
        ":" +
        zeroes(paceMinutes, "0", 2) +
        ":" +
        zeroes(paceSeconds, "0", 2);
    console.log(pace);
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

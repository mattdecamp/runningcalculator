function distanceSystem() {
    const measurement = document.querySelector("#distanceMeasure");
    // Changes pace per value based on distance select field
    measurement.addEventListener('change', (e) => {
        const paceMeasure = document.querySelector("#paceMeasure");
        if (e.target.value === "miles") {
            paceMeasure.textContent = "/mi";
        } else if (e.target.value === "kilometers") {
            paceMeasure.textContent = "/km";
        } else {
            paceMeasure.textContent = "/yd";
        }
    });
}
distanceSystem();

// This is the main calculating function for Pace Per Mile
const pacePerMile = function () {
    const hours = parseInt(document.runCalculator.hours.value);
    const minutes = parseInt(document.runCalculator.minutes.value);
    const seconds = parseInt(document.runCalculator.seconds.value);
    const mileage = parseFloat(document.runCalculator.mileage.value); // parseFloat ensures decimal input option
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
    // Calculate based on distance measurement


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
    // Replace error output with zeros
    if (pace === "aN:aN:aN") {
        document.runCalculator.result.value = "00:00:00";
    } else {
        document.runCalculator.result.value = pace;
    }
};



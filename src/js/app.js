function distanceSystem() {
    const measurement = document.querySelector("#distanceMeasure");
    if (measurement == null) {
        return;
    }
    // Changes pace per value based on selected distance field
    measurement.addEventListener("change", (e) => {
        const paceMeasure = document.querySelector("#paceMeasure");
        if (e.target.value === "miles") {
            paceMeasure.textContent = "/ mi";
        } else if (e.target.value === "kilometers") {
            paceMeasure.textContent = "/ km";
        } else {
            paceMeasure.textContent = "/ yd";
        }
    });
}
distanceSystem();

// This is the main function calculating for Pace Per Mile

const pacePerMile = function () {
    // parseFloat ensures decimal input option
    const hours = parseInt(document.runCalculator.hours.value);
    const minutes = parseInt(document.runCalculator.minutes.value);
    const seconds = parseInt(document.runCalculator.seconds.value);
    const mileage = parseFloat(document.runCalculator.mileage.value);
    // secondsPerMile combines the seconds, minutes and hours into total seconds and divides that by mileage to get seconds per mile
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

// Reset Pace Function

function calcReset() {
    document.runCalculator.hours.value = "";
    document.runCalculator.minutes.value = "";
    document.runCalculator.seconds.value = "";
    document.runCalculator.mileage.value = "";
    document.runCalculator.result.value = "00:00:00";

}

function distanceConversion(input, value) {
    value = parseFloat(value);
    const miles = document.getElementById("miles");
    const kilometers = document.getElementById("kilometers");
    const yards = document.getElementById("yards");
    if (input === "miles") {
        kilometers.value = (value * 1.609).toFixed(2);
        yards.value = value * 1760;
    }
    if (input === "kilometers") {
        miles.value = (value / 1.609).toFixed(2);
        yards.value = value * 1094;
    }
    if (input === "yards") {
        miles.value = (value / 1760).toFixed(2);
        kilometers.value = (value / 1094).toFixed(2);
    }
    // Finish line
}
// Tabs
const tabs = document.querySelector(".tabs");
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
    // hide all tab panels
    tabPanels.forEach((panel) => {
        panel.hidden = true;
    });
    // mark all tabs as unselected
    tabButtons.forEach((tab) => {
        // tab.ariaSelected = false;
        tab.setAttribute("aria-selected", false);
    });
    // mark the clicked tab as selected
    event.currentTarget.setAttribute("aria-selected", true);
    // find the associated tabPanel and show it!
    const { id } = event.currentTarget;

    const tabPanel = tabPanels.find(
        (panel) => panel.getAttribute("aria-labelledby") === id
    );
    tabPanel.hidden = false;

}

tabButtons.forEach((button) =>
    button.addEventListener("click", handleTabClick)
);

function produceDrivingRange(blockRange) {
    return function (tripStartStr, tripEndStr) {
        const tripStart = convertStreetToNum(tripStartStr);
        const tripEnd = convertStreetToNum(tripEndStr);
        const trip = Math.abs(tripStart - tripEnd)
        if (trip <= blockRange) {
            return `within range by ${blockRange - trip}`;
        } else {
            return `${trip - blockRange} blocks out of range`;
        }
    }
}
function convertStreetToNum(string) {
    return Number(string.slice(0, -2));
}
function produceTipCalculator(tipPercent) {
    return function (bill) {
        return bill * tipPercent;
    }
}
function createDriver(params) {
    let driverId = 0;
    return class {
        constructor(name) {
            this.id = ++driverId;
            this.name = name;
        }
    }
}
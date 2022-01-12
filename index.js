

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
    return ([drivers[0],drivers[1]])
}

const returnLastTwoDrivers = function(drivers) {
    return ([drivers[2],drivers[3]])
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function(integer) {
    return function(fare) {
        return integer * fare;
    }
}

createFareMultiplier(4);

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, driverArg) {
    return driverArg(drivers);
}
// Code your solution in this file!
const returnFirstTwoDrivers = (driversArray) => {
    return [driversArray[0], driversArray[1]]
 }

const returnLastTwoDrivers =  (driversArray) => {
    return [driversArray[driversArray.length-2], driversArray[driversArray.length -1]]
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (value) => {
    return (fare) => {
        return fare * value
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, func) => {
    return func(drivers)
}

// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = drivers => drivers.slice( 0, 2 );
const returnLastTwoDrivers = drivers => drivers.slice( -2 );
const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ]
// console.log(selectingDrivers[0](drivers))
const createFareMultiplier  =  function findMultiply ( fare )
{
    return function fareMultiplier( number ){
        return fare * number
        }
}

// fare doubler
const fareDoubler = createFareMultiplier( 2 );
const fareTripler = createFareMultiplier( 3 )

const selectDifferentDrivers = function ( drivers, returnFirstTwoDrivers )
{
    return returnFirstTwoDrivers(drivers)
}
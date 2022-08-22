const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers= function(drivers){
 return drivers.slice(0,2);
}



const returnLastTwoDrivers=function(drivers){
    return drivers.slice(-2);
}


let selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers];


let createFareMultiplier=function(fare){
    let fareMultiplier=(fare)=>{
    return fare*5;
    };
    return fareMultiplier;
}

const fareDoubler =  function fareMultiplier(fare){
    return fare*2;

}
const fareTripler = function fareMultiplier(fare){
    return fare*3;
}
 function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);
 }



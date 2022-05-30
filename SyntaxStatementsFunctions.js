/*
function fruit(type,weightInGrams,pricePerKilo){
    let weightInKilo = (weightInGrams/1000);
    console.log(`I need $${(pricePerKilo*weightInKilo).toFixed(2)} to buy ${weightInKilo.toFixed(2)} kilograms ${type}. `);
}


fruit('orange', 2500, 1.80 )


function GCD(x, y) {
  while (y) {
    let t = y;
    y = x % y;
    x = t;

}
console.log(x);
}

GCD(72, 60);


function sameNumbers(num) {
  let arr = num.toString().split("");
  let sum = 0;
  let isSame = true;
  let firstDigit = arr[0];
  for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
    if (firstDigit != arr[i]) {
      isSame = false;
    }
  }
  console.log(isSame);
  console.log(sum);
}

sameNumbers(22222);

function previousDay(year, month, day) {
  let date = new Date(year, month - 1, day);
  date.setDate(date.getDate() - 1);
  console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
}

previousDay(2016, 10, 1 );



function timeToWalk(steps, footprint, speed) {
  let distanceMeters = steps * footprint;
  let speedMeterSec = speed / 3.6;
  let time = distanceMeters / speedMeterSec;
  let rest = Math.floor(distanceMeters / 500);

  let timeMin = Math.floor(time / 60);
  let timeSec = Math.round(time - timeMin * 60);
  let timeHrs = Math.floor(time / 3600);

  console.log(
    (timeHrs < 10 ? "0" : "") +
      timeHrs +
      ":" +
      (timeMin + rest < 10 ? "0" : "") +
      (timeMin + rest) +
      ":" +
      (timeSec < 10 ? "0" : "") +
      timeSec
  );
}

timeToWalk(4000, 0.6, 5);

*/


function roadRadar(speed, place){
if(place = 'motorway'){
    let speedLimit = 130;
    let difference = speedLimit - speed;
if(speed <=speedLimit){
    console.log(`Driving ${speed} km/h in a 130 zone`);
}else if(speedLimit - speed >= 20){
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - {status}` );
}
}else if(place = 'interstate'){

}else if(place = 'city'){

}else if(place = 'residential '){

}
}

roadRadar(40, 'city');

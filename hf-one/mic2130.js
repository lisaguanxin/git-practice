

function tollCost(toll1, toll2, toll3) {
  var tollTotal = toll1 + toll2 + toll3;
  return tollTotal;
}

function roadType(roadType) {
if (roadType == 'paved') {
  console.log ('you will have and easy drive in paved road');
} if (roadType == 'dirty') {
  console.log ('be carefull, the route is a dirty road');
}
}

function getTravelTime(distance, speed) {
  var travelTime = Math.floor(distance/speed);
  var travelTimeMin = distance/speed*60;
  if (travelTime > 0) {
    return 'you will arrive in aprox ' + travelTime + 'hr to your destiny';
  } else if (travelTime === 0) {
    return 'you will arrive in aprox ' + travelTimeMin + 'min to your destiny';
}
}

console.log (tollCost (3, 5, 1));
roadType ('paved');
console.log (getTravelTime (100, 120));

//I'm trying to see the difference beteween console.log and return. I think that return gives the output and console.log print the output in the console. Following this idea, now I errased console.log from the line 27, because it already appear in the function. But I don't understand why in some cases is better use console.log and in other use return....

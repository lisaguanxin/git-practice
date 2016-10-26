var hypotenusLength = function(a,b) {
  return Math.sqrt((a*a)+(b*b));
};
var alertGreatCodingSite = function() {
  alert("https://www.playcodestitch.com");
};
var isPalindrome = function(someWord) {
  var flag = true;
  for( var i = 0; i <= someWord.length / 2; i++ ) {
    if( someWord.charAt(i) != someWord.charAt(someWord.length - i) ) {
      flag = false;
    }
  }
  return flag;
};


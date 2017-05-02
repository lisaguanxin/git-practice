var name="Dee";
var age="23";
prompt ("Do you want to check Odd/Even Numbers?");
var n = prompt("Enter a number to find odd or even", "Type your number here");
n = parseInt(n);
if (isNaN(n))
{
alert("Please Enter a Number");
}
else if (n === 0)
{
alert("The number is zero");
}
else if (n%2)
{
alert("The number is odd");
}
else
{
alert("The number is even");
}

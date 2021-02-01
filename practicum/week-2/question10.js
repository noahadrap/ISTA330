/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    var digits = (""+n).split("");
    results=[];
    for (i=0; i < digits.length; i++) {
        results.push(parseInt(digits[i],10))
    }
    var max = Math.max.apply(null, results);
    var min = Math.min.apply(null, digits);
    return max-min;
};
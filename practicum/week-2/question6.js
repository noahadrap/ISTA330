/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    input.sort(function(a, b){return a - b});
    var half = Math.floor(input.length / 2);
    if (input.length % 2){
        return input[half];
    }
    return (input[half - 1] + input[half]) / 2.0;
};
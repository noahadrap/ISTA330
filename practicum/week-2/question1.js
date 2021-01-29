/*
Given an array of numbers, return the running sum of the array. 
Running sum of a cell in the array is the sum of the cells up to that cell.
For example given the input array [5, 6, 1], the running sum is 
[5, 5+6, 5+6+1]
*/

var runningSum = function(input) {
    const cumulativeSum = (sum => value => sum += value)(0);
    return ([5, 10, 3, 2].map(cumulativeSum));
};
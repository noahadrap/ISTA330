/*
Given an array of distinct integers, input, 
find all pairs of elements with the minimum  difference (that is the minimum of the absolute value of the difference)
 of any two elements. 

Return a list of pairs in ascending order. 
For each pair [a, b] we have:

 1. a, b are from the input array
 2. a < b
 3. b - a equals to the minimum difference of any two elements in the input array
 
Example:
input: [1,-5,-10,24,19,-4,-14,23]
output: [[-5, -4], [23, 24]]
*/

var minPairs = function(input) {
    var inputSorted = input.sort(function(a, b){return a - b});
    var minDiff= inputSorted[1]-inputSorted[0];
    var minPairs = []
    for (i=0; i<inputSorted.length; i++) {
        for (j=i+1; j<inputSorted.length;j++){
            if ((inputSorted[j]-inputSorted[i] < minDiff)) {
                minDiff = inputSorted[j]-inputSorted[i];
            }
        }
    }
    for (i=0; i<inputSorted.length; i++) {
        for (j=i+1; j<inputSorted.length;j++){
            if ((inputSorted[j]-inputSorted[i] == minDiff)) {
                minPairs.push([inputSorted[i], inputSorted[j]])
            }
        }
    }
    return minPairs;

};
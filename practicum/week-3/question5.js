/*
An array is monotonic if it is 
either monotone increasing 
or monotone decreasing.

An array A is monotone increasing 
if for all i <= j, A[i] <= A[j].  
An array A is monotone decreasing 
if for all i <= j, A[i] >= A[j].

For a given array, input, 
return true if and only if the input array is monotonic.

Example: 
input: [12, 6, 2, 2, 2, 0]
output: true
*/

var isMonotonic = function(input) {
    var isIncreasing = function(arr) {
        for (i = 1; i < arr.length; ++ i) {
            if (arr[i] <= arr[i - 1]) {
                return false;
            }
        }
        return true;
    }
 
    var isDecreasing = function(arr) {
        for (i = 1; i < arr.length; ++ i) {
            if (arr[i] >= arr[i - 1]) {
                return false;
            }
        }
        return true;
    }

    return isDecreasing(input) || isIncreasing(input);
};
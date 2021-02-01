/*
Given an array of numbers, for each number in the array 
find out how many numbers in the array are both even and bigger than the number.

Example:
input: [23, 44, 12, 4]
output: [1, 0, 1, 2]
*/

var biggerAndEven = function(input) {
    count = 0;
    arr=[];
    for (i=0; i < input.length; i++){ 
        for (j = 0; j < input.length; j++) {
            if ((input[j] > input[i]) && (input[j]%2 ==0)){
                count+=1;
            }
        }
        arr.push(count);
        count = 0;
    }
    return arr;
};
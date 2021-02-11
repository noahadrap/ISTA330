/*
Given an array of integers, input, 
a d-integer is an integer which has 
a frequency in the array equal to its value.

Return a d-integer. If there are multiple 
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function(input) {
    var count= 0;
    var nums = [];
    for(i=0;i<input.length;i++){
        for (j=0;j<input.length;j++) {
            if (input[j] == input[i]) {
                count += 1
            }
        }
        if (count == input[i]){
            nums.push(input[i]);
        }
        count = 0
    }
    if (nums.length > 0) {
        return Math.max.apply(null, nums);
    }
    return -1;
};
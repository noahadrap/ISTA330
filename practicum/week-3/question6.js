/*
Given an array of size n, 
find the m-element. 
The m-element is 
the element that appears more than ⌊ n/2 ⌋ times.

If the m-element does not exist return -1.

Example: 
input: [1, 2, 2, 3, 2, 7, 2]
output: 2 
*/

var m_element = function(input) {
    var count= 0;
    for(i=0;i<input.length;i++){
        for (j=0;j<input.length;j++) {
            if (input[j] == input[i]) {
                count += 1
            }
        }
        if (count > (input.length/2)){
            return input[i];
        }
        count = 0
    }
    return -1;
};
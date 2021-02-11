/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 
Return how many groups have the largest size.
Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function(n) {
    var M=[];
    for (i = 1; i <= n; i ++) {
        var sum = 0;
        var value = i;
        while (value) {
            sum += value % 10;
            value = Math.floor(value / 10);
        }
        if (M.length < sum) {
            M[sum-1] = new Array();
        }
        M[sum-1].push(i);
        
       
    }
    //return M;
    maxCount = 0;
    for (i = 0; i < M.length; i++) {
        if (M[i].length > maxCount) {
            maxCount = M[i].length;
        }
    }
    groupNums = 0;
    for (i = 0; i < M.length; i++) {
        if (M[i].length == maxCount) {
            groupNums += 1
        }
    }
    return groupNums;
    
};
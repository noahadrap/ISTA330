
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

 var largestSubarray = function(input) {
     var sum=0;
     var maxSum=input.reduce((a, b) => a + b, 0);
     for (i=0; i< input.length; i++) {
             for (j=i;j<input.length; j++) {
                     sum = input.slice(i,j +1).reduce((a, b) => a + b, 0);
                     if (sum > maxSum) {
                             maxSum = sum;
                     }

             }
     }
     return maxSum;
    
 };

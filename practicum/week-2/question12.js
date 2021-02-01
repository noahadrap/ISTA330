/*
A string, input, which contains only letters a and b is given.
A list of substrings s1, s2, .., sn is called a partition for input if and only if
  input == s1 + s2 + ... + sn.

  
A substring is balanced if it has equal number of a's and b's.
The number of balanced substrings in a partition is called the balence number of the partition.
Among all the possible partitions of the input string, what is the maximum balance number?

Example:
input: 'abaabbabab'
output: 4 because the following partition has the highest number of balanced substrings:
          'ab', 'aabb', 'ab', 'ab'
*/

var maxBalanceNumber = function(input) {
  allParts = []
  function* all_partitions(string) {
    for (var cutpoints = 0; cutpoints < (1 << (string.length - 1)); cutpoints++) {
        var result = [];
        var lastcut = 0;
        for (var i = 0; i < string.length - 1; i++) {
            if (((1 << i) & cutpoints) !== 0) {
                result.push(string.slice(lastcut, i + 1));
                lastcut = i + 1;
            }
        }
        result.push(string.slice(lastcut));
        yield result;
    }
}
var maxCount=0;
var count = 0;
for (var partition of all_partitions(input)) {
  for (var substring of partition) {
    var aCount = substring.split('a').length - 1;
    var bCount = substring.split('b').length - 1;
    if (aCount == bCount) {
      count +=1;
    }
   }
   if (count > maxCount) {
     maxCount = count;
   }
   count = 0;
  //allParts.push(partition);
}
return maxCount;
};
/** Maximum Subarray
  *  
  * Given an integer array `nums`, find the subarray which has the 
  * largest sum and return the sum. 
  * 
  * @examples
  * maxSubArray([5, 4, -1, 7, 8]) = 23
  * maxSubArray([-2, 1, -3, 4, -1, 2, -5, 0]) = 5
  * maxSubArray([2, 4, 3, -1, -4, -9]) = 9
  */


// // David's solution #1 O(n^3)
// const maxSubArray = (nums) => {
//   let maxSum = nums[0]


//   for (let i = 0; i < nums.length; ++i) { // O(n) * O (n^2) -> O(n^3)
//     for (let j = i + 1; j <= nums.length; ++j){ // O(n) * O(n) -> O(n^2)
//       const subarray = nums.slice(i, j)
//       const sum = subarray.reduce((acc, curr) => acc + curr)
//       maxSum = Math.max(maxSum, sum)
//     }
//   }
//   return maxSum
// }

// module.exports = maxSubArray;



// // David's Solution #2 // O(n^2) time | O(1) space
// const maxSubArray = (nums) => {
//   let maxSum = nums[0]

//   for (let i = 0; i < nums.length; ++i) {
//     let sum = 0;
//     for (let j = i; j < nums.length; ++j) {
//       sum += nums[j]
//       maxSum = Math.max(maxSum, sum);
//     }
//   }
//   return maxSum
// }

// module.exports = maxSubArray;




// David's Solution #3 most Optimal solution
const maxSubArray = (nums) => {
  let maxSum = nums[0]
  let sum = 0

  for (let i = 0; i < nums.length; ++i){
    if (sum < 0) {
      sum = 0
    }
    sum += nums[i]
    if (maxSum < sum){
      maxSum = sum
    }
  }
  return maxSum
}

module.exports = maxSubArray;







// // Chat GPT Solution
// const maxSubArray = (nums) => {
//   let currentSum = nums[0];
//   let maxSum = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     // either extend the current subarray or start a new one
//     currentSum = Math.max(nums[i], currentSum + nums[i]);
//     maxSum = Math.max(maxSum, currentSum);
//   }

//   return maxSum;
// };

// module.exports = maxSubArray;

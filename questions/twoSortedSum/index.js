/** Two Sorted Sum **
 * 
 * Find two numbers in the given sorted array that add up to `target`
 * and return the indices of those two numbers in the array. 
 * 
 * 
 * @example
 * twoSum([1, 2, 4, 9], 13) -> [2, 3]
 * twoSum([10, 20], 30) -> [0, 1]
 * twoSum([2, 3, 4], 6) -> [0, 2]
 * 
 */


// David's solution
// O(n) time | O(1) space
const twoSortedSum = (nums, target) => {
    let l = 0
    let r = nums.length - 1

    while (l < r) { // O(n)
         const sum = nums[l] + nums[r]

         if (sum > target) {
            r--;
         }

         else if (sum < target) {
            l++;
         }

         else {
            return [l, r]
         }
    }

}

module.exports = twoSortedSum;







// // Chat GPT Solution
// const twoSortedSum = (nums, target) => {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left < right) {
//     const sum = nums[left] + nums[right];

//     if (sum === target) {
//       return [left, right];
//     }

//     if (sum < target) {
//       left++;        // need a bigger sum
//     } else {
//       right--;       // need a smaller sum
//     }
//   }

//   return null; // if no two numbers match
// };

// module.exports = twoSortedSum;

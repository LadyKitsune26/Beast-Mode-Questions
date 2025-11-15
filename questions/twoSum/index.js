/** Two Sum **
 * 
 * Find two numbers in the given array that add up to `target`
 * and return the indices of those two numbers in the array
 * 
 * @example
 * twoSum([1, 2, 4, 9], 13) -> [2, 3]
 * twoSum([10, 20], 30) -> [0, 1]
 * twoSum([3, 2, 4], 6) -> [1, 2]
 * 
 */

const twoSum = (nums, target) => {
}

module.exports = twoSum;














// // Chat GPT solution

// const twoSum = (nums, target) => {
//   const map = {}; // value → index

//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     const needed = target - num;

//     if (map.hasOwnProperty(needed)) {
//       return [map[needed], i];
//     }

//     map[num] = i;
//   }
// };

// module.exports = twoSum;

/** Move Zeroes **
 * 
 * Given an array 'nums', move all the zeroes to the end.
 * 
 * Note: You can not make a copy of the 'nums' array.
 * 
 * @example
 * moveZeroes([1, 0, 2, 0]) -> [1, 2, 0, 0]
 * moveZeroes([10, 0, 9]) -> [10, 9, 0]
 * moveZeroes([3, 4, 0, 2, 0]) -> [3, 4, 2, 0, 0]
 * 
 */

 const moveZeroes = (nums) => {
   let l = 0;
   let r = 0;

   while (r < nums.length) {
     if (nums[r] !== 0) {
       let temp = nums[r];
       nums[r] = nums[l];
       nums[l] = temp;
       l += 1
     }
     r += 1;
   }
   return nums
 };

module.exports = moveZeroes;







// // Chat GPT Solution
// const moveZeroes = (nums) => {
//   let insertPos = 0;

//   // Move non-zero values forward
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       nums[insertPos] = nums[i];
//       insertPos++;
//     }
//   }

//   // Fill remaining positions with zeroes
//   while (insertPos < nums.length) {
//     nums[insertPos] = 0;
//     insertPos++;
//   }

//   return nums;
// }

// module.exports = moveZeroes;
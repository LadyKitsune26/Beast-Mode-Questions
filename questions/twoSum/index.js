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


// // junior way, inefficient, looping over 25 times. $60K - $80K
// const twoSum = (nums, target) => {
//     for (let i = 0; i < nums.length - 1; ++i){
//         for (let j = 0; j< nums.length; ++j){
//             if (nums[i] + nums[j]   === target){
//                 return [i, j]
//             }
//         }
//     }
// }


// // Mid level solution $80K - $100K
// // O(n^2) time | O(1) space
// const twoSum = (nums, target) => {
//     for (let i = 0; i < nums.length - 1; ++i){
//         for (let j = i + 1; j < nums.length; ++j){
//             if (nums[i] + nums[j] === target){
//                 return [i, j]
//             }
//         }
//     }
// }


// Top tech solution
// O(n) time 
const twoSum = (nums, target) => {
    const mapDifferenceToIndex = new Map();

    for (let i = 0; i < nums.length; ++i) {
        if (mapDifferenceToIndex.has(nums[i])){
            return [mapDifferenceToIndex.get(nums[i]), i]
        }
        const difference = target - nums[i]
        mapDifferenceToIndex.set(difference, i)
    }
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

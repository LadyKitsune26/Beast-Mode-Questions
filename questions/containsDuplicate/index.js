/** Contains Duplicate **
 * 
 * Given an array of integers, return true if any integer appears
 * at least twice in the array, otherwise return false.
 * 
 * @example
 * containsDuplicate([1, 2, 3, 4]) -> false
 * containsDuplicate([1, 2, 2, 5]) -> true
 * containsDuplicate([1, 2, 9, 5, 9]) -> true
 * 
 */


// // 1st Solution $60K - $80K
// // O(n^2) time | O(n) space
// const containsDuplicate = (nums) => {
//  for (let i = 0; i < nums.length - 1; ++i){
//     for (let j = i + 1; j < nums.length; ++j) {
//         if (nums[i] === nums[j]) {
//             return true
//         }
//     }
//  }
//  return false
// }

// module.exports = containsDuplicate;


// // Sorting solution $80K - $100K 
// // O(nlog(n)) time | O(n) space
// const containsDuplicate = (nums) => {
//     const sortedArr = nums.sort((a, b) => a - b) // O(n) space | O(nlog(n)) time

//     for (let i = 0; i < sortedArr.length - 1; ++i) { // O(n) time
//         if (sortedArr[i]  === sortedArr[i + 1]) {
//             return true
//         }
//     }
//     return false
// }

// module.exports = containsDuplicate;


// Optimal solution 
const containsDuplicate = (nums) => {
    const map = new Map()

    for (let i = 0; i < nums.length; ++i){
        if(map.has(nums[i])){
            return true
        }
        map.set(nums[i], true)
    }
    return false; 
}

module.exports = containsDuplicate;













// // Chat GPT Solution #1
// const containsDuplicate = (nums) => {
//   const set = new Set(nums);
//   return set.size !== nums.length;
// }

// module.exports = containsDuplicate;


// // Chat GPT Solution #2 - using a loop + set(more explicit)
// const containsDuplicate = (nums) => {
//   const seen = new Set();

//   for (let num of nums) {
//     if (seen.has(num)) return true;
//     seen.add(num);
//   }

//   return false;
// }

// module.exports = containsDuplicate;

/** Minimum Number in Rotated Sorted Array **
 * 
 * Given a rotated sorted array, return the smallest 
 * number in the array.
 * 
 * Note: Your solutions' time complexity must be faster than O(n). 
 * 
 * @example
 * findMinimum([5, 4, 1, 2]) -> 1
 * findMinimum([7, 9, 12, 3, 4]) -> 3
 * findMinimum([3, 4, 2, 0]) -> 0
 * 
 */

const findMinimum = (nums) => {
    let l = 0;
    let r = nums.length - 1;


    while ( l < r) {
        let mid = Math.floor((l + r) / 2)

        if (nums[mid] > nums[r]) {
            l = mid + 1
        }
        else {
            r = mid
        }
    }
    return nums[l]
}

module.exports = findMinimum;











// // Chat GPT Solution
// const findMinimum = (nums) => {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left < right) {
//     let mid = Math.floor((left + right) / 2);

//     // If mid value is greater than right value,
//     // min must be in the right half
//     if (nums[mid] > nums[right]) {
//       left = mid + 1;
//     } else {
//       // Otherwise, min is at mid or left half
//       right = mid;
//     }
//   }

//   return nums[left];
// };

// module.exports = findMinimum;
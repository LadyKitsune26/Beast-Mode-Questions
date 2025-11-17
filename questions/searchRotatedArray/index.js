/** Search in Rotated Sorted Array **
 * 
 * Given a rotated sorted array and a target, 
 * return the index of the number in the array 
 * which equals to the target.
 * 
 * Note: Your solutions' time complexity must be faster than O(n). 
 * 
 * @example
 * search([5, 4, 1, 2, 3], 2) -> 3
 * search([7, 9, 12, 3, 4], 7) -> 0
 * search([3, 4, 2, 0], 4) -> 1
 * 
 */

const search = (nums, target) => {
    
    let l = 0
    let r = nums.length - 1

    while (l <= r){
        let mid = Math.floor((l + r) / 2)

        if (nums[mid] === target) return mid

        //In the green portion of the array

        if (nums[mid] < nums[r]){
            if (target < nums[mid] || target > nums[r]){
                r = mid - 1
            }
            else{
                l = mid + 1
            }
        }
        //In the blue portion of the array
        else {
            if (target > nums[mid] || target < nums[l]){
                l = mid + 1
            }
            else r = mid - 1
        }

    }

    return "not found"

}

module.exports = search;









// // Chat GPT Solution
// const search = (nums, target) => {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);

//     if (nums[mid] === target) return mid;

//     // Check if left half is sorted
//     if (nums[left] <= nums[mid]) {
//       // Target is within the left sorted range
//       if (nums[left] <= target && target < nums[mid]) {
//         right = mid - 1;
//       } else {
//         left = mid + 1;
//       }
//     } 
    
//     // Otherwise, right half is sorted
//     else {
//       // Target is within the right sorted range
//       if (nums[mid] < target && target <= nums[right]) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
//   }

//   return -1; // Target not found
// };

// module.exports = search;
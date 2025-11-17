/** Three Sum
 *
 * Given an array of integers 'nums', return an array of all the
 * three numbers that add up to 0.
 *
 * Note: There cannot be any duplicate triplets in the results array.
 *
 * @examples
 * threeSum([-1, 0, 1, 2, -1, -4]) = [[-1, -1, 2], [-1, 0, 1]]
 * threeSum([-2, -2, 0, 0, 1, 1, 2, 2]) = [[ -2, 0, 2 ], [ -2, 1, 1 ]]
 * threeSum([0, 0, 0, 0]) = [[0, 0, 0]]
 */

function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const results = [];

  for (i = 0; i < nums.length - 2; ++i) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];

      if (sum > 0) {
        r--;
      }
      if (sum < 0) {
        l++;
      }
      if (sum === 0) {
        results.push([nums[i], nums[l], nums[r]]);
        l++;
        while (nums[l] === nums[l - 1] && l < r) {
          l++;
        }
      }
    }
  }
  return results;
}

module.exports = threeSum;

// // Chat GPT Solution
// function threeSum(nums) {
//   nums.sort((a, b) => a - b);  // Step 1: sort the array
//   const res = [];

//   for (let i = 0; i < nums.length - 2; i++) {
//     // Skip duplicate values for i
//     if (i > 0 && nums[i] === nums[i - 1]) continue;

//     let left = i + 1;
//     let right = nums.length - 1;

//     while (left < right) {
//       const sum = nums[i] + nums[left] + nums[right];

//       if (sum === 0) {
//         res.push([nums[i], nums[left], nums[right]]);

//         left++;
//         right--;

//         // Skip duplicates for left pointer
//         while (left < right && nums[left] === nums[left - 1]) {
//           left++;
//         }

//         // Skip duplicates for right pointer
//         while (left < right && nums[right] === nums[right + 1]) {
//           right--;
//         }

//       } else if (sum < 0) {
//         left++;
//       } else {
//         right--;
//       }
//     }
//   }

//   return res;
// }

// module.exports = threeSum;

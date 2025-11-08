// Function: Find common strings with the least index sum between two lists
// LeetCode 599 Pattern



////////////////////////////////////////// 1 //////////////////////////////////////////

function isCommen(list1, list2) {
  let result = [];
  let map = new Map();
  let minSum = Infinity;

  // Step 1: Store list1 elements in a map with their indexes
  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], i);
    // Example: list1 = ['happy', 'sad', 'good']
    // map = { 'happy' => 0, 'sad' => 1, 'good' => 2 }
  }

  // Step 2: Traverse list2 and find common elements
  for (let j = 0; j < list2.length; j++) {
    if (map.has(list2[j])) {
      let sum = j + map.get(list2[j]); // total index sum of both lists

      // Step 3: Update minimum sum logic
      if (sum < minSum) {
        minSum = sum;
        result = [list2[j]]; // reset with new smallest
      } else if (sum === minSum) {
        result.push(list2[j]); // same smallest → add to result
      }
    }
  }

  // Step 4: Return final result
  return result;
}

// Example Run
console.log(isCommen(['happy', 'sad', 'good'], ['sad', 'happy', 'good']));
// Output: ['sad', 'happy']




//////////////////////////////////////// 2 //////////////////////////////////////////



// Function: Find two numbers that add up to a target value
// LeetCode 1: Two Sum

function isTwoSum(num, target) {
  let result = [];

  // Step 1: Loop through each element in the array
  for (let i = 0; i < num.length; i++) {
    // Step 2: For each element, loop through the next elements only
    for (let j = i + 1; j < num.length; j++) {
      // Step 3: Check if the sum matches the target
      if (num[i] + num[j] === target) {
        result.push(i, j); // Step 4: Push indexes of matching numbers
      }
    }
  }

  // Step 5: Return all found pairs of indexes
  return result;
}

// Example:
console.log(isTwoSum([7, 11, 15, 2], 9));
// Output: [0, 3]  (7 + 2 = 9)




//////////////////////////////////////// 3 //////////////////////////////////////////



/**
 *  Best Time to Buy and Sell Stock (Single Transaction)
 * ------------------------------------------------------

 * Goal:
 * -----------
 * Find the maximum profit you can achieve (you must buy before you sell).
 *
 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

const bestTime1 = (price) => {
  let everyLoop = 0; // current profit window
  let result = 0;    // max profit found so far

  for (let i = 0; i < price.length - 1; i++) {
    // Update current profit 
    everyLoop = Math.max(0, everyLoop - price[i] + price[i + 1]);

    // Update maximum profit if current window gives better result
    result = Math.max(result, everyLoop);
  }

  return result;
};


console.log(bestTime1([7, 1, 5, 3, 6, 4])); // Output: 5




///////////////////////////////////////// 4 //////////////////////////////////////////




/**
 * 📈 Best Time to Buy and Sell Stock II
 * ------------------------------------
 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

const bestTime = (price) => {
  let profit = 0;

  for (let i = 0; i < price.length - 1; i++) {
    // Only add profit if the next day's price is higher
    const dailyProfit = Math.max(0, price[i + 1] - price[i]);

    profit += dailyProfit;
  }

  return profit;
};


console.log(bestTime([7, 1, 5, 3, 6, 4])); // Output: 7 (Buy 1→Sell 5, Buy 3→Sell 6)
console.log(bestTime([1, 2, 3, 4, 5]));    // Output: 4 (Buy 1→Sell 5)
console.log(bestTime([7, 6, 4, 3, 1]));    // Output: 0 (No profit possible)



/////////////////////////////////////// 5 //////////////////////////////////////////


// Check all possible subarrays and find the one with the maximum sum.

function maxNum(num) {
  // Initialize result with the first element
  let result = num[0];

  // Outer loop → start of subarray
  for (let i = 0; i < num.length; i++) {
    let prefix = 0; // Tracks sum of current subarray

    // Inner loop → end of subarray
    for (let j = i; j < num.length; j++) {
      prefix = num[j] + prefix; // Add current number
      console.log("Current prefix sum:", prefix);

      // Update result if we found a bigger sum
      result = Math.max(prefix, result);
    }
  }


  return result;
}



// Output: 6 (from subarray [4, -1, 2, 1])
console.log(maxNum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));



//////////////////////////////////////// 6 //////////////////////////////////////////


// Move Zeroes — LeetCode #283

function moveZero(num) {
  let left = 0; // Pointer for the position of the next non-zero element

  // Iterate through the array using 'right' pointer
  for (let right = 0; right < num.length; right++) {
    // If we find a non-zero number
    if (num[right] !== 0) {
      // Swap current element with the 'left' pointer position
      [num[right], num[left]] = [num[left], num[right]];
      left++; // Move the left pointer forward
    }
  }


  return num;
}


// Output: [1,3,12,0,0]
console.log(moveZero([0, 1, 0, 3, 12]));




//////////////////////////////////////// 7 //////////////////////////////////////////


//  Container With Most Water — LeetCode #11
// Find two lines that together hold the most water between them.


function maxWaterContain(h) {
  let left = 0;               // Left pointer
  let right = h.length - 1;   // Right pointer
  let result = 0;             // Stores the maximum water found

  // Move both pointers towards each other
  while (left < right) {
    // Find the smaller height (this limits the water level)
    let lowHeight = Math.min(h[left], h[right]);

    // Calculate the width (distance between left and right)
    let width = right - left;

    // Calculate the area (water contained)
    let containWater = lowHeight * width;

    // Update result if we found a bigger area
    result = Math.max(result, containWater);

    // Move the pointer pointing to the smaller height inward
    if (h[right] < h[left]) {
      right--;
    } else {
      left++;
    }
  }


  return result;
}

// Output: 49
console.log(maxWaterContain([1, 8, 6, 2, 5, 4, 8, 3, 7]));




//////////////////////////////////////// 8 //////////////////////////////////////////



// Merge Sorted Array — LeetCode #88


function mergeSort(num1, m, num2, n) {
  let i = m - 1;                // Last index of the initialized part of num1
  let j = n - 1;                // Last index of num2
  let totalLength = m + n - 1;  // Last index of the full array (nums1 has enough space)

  // Start merging from the end
  while (j >= 0) {
    // If num1 has elements left and its current element is bigger
    if (i >= 0 && num1[i] > num2[j]) {
      num1[totalLength] = num1[i];
      i--; // Move pointer i backward
    } else {
      // Otherwise, copy num2[j]
      num1[totalLength] = num2[j];
      j--; // Move pointer j backward
    }

    totalLength--; // Move the fill position backward
  }

  return num1;
}


// Output: [1,2,2,3,5,6]
console.log(mergeSort([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));


//////////////////////////////////////// 9 //////////////////////////////////////////




// Three Sum — LeetCode #15
// Find all unique triplets in the array that sum up to zero.

function threeSum(num) {
  num.sort((a, b) => a - b); // Sort array to use two-pointer approach
  let result = [];

  // Loop through each number (fix one element at a time)
  for (let i = 0; i < num.length - 2; i++) {
    // Skip duplicate values for i
    if (i > 0 && num[i] === num[i - 1]) continue;

    let left = i + 1;             // Start pointer
    let right = num.length - 1;   // End pointer

    // Move pointers towards each other
    while (left < right) {
      let sum = num[i] + num[left] + num[right];
      console.log("Sum:", sum);

      if (sum === 0) {
        // Found a valid triplet
        result.push([num[i], num[left], num[right]]);

        // Skip duplicates for left and right
        while (num[left] === num[left + 1]) left++;
        while (num[right] === num[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        // If sum too small, move left pointer forward
        left++;
      } else {
        // If sum too large, move right pointer backward
        right--;
      }
    }
  }

  return result;
}


// Output: [[-1,-1,2],[-1,0,1]]
console.log(threeSum([-1, 0, 1, 2, -1, -4]));


//////////////////////////////////////// 10 //////////////////////////////////////////


// Maximum Product Subarray — LeetCode #152
// Find the contiguous subarray within an array that has the largest product.

function subarray(nums) {
  // Initialize values
  let minSoFar = nums[0];   // Tracks the smallest product so far (negative could become max later)
  let maxSoFar = nums[0];   // Tracks the largest product so far
  let result = nums[0];     // Tracks the global maximum product

  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i];
    n
    // because multiplying by a negative flips their signs
    if (curr < 0) [maxSoFar, minSoFar] = [minSoFar, maxSoFar];

    // Calculate the max and min product ending at current index
    maxSoFar = Math.max(curr, maxSoFar * curr);
    minSoFar = Math.min(curr, minSoFar * curr);

    // Update result with the global maximum product
    result = Math.max(result, maxSoFar);

    // Debug log for each iteration
    console.log(`i=${i}, curr=${curr}, max=${maxSoFar}, min=${minSoFar}, result=${result}`);
  }


  return result;
}


console.log(subarray([2, 3, -2, 4]));   // Output: 6   → (2 × 3)
console.log(subarray([-2, 0, -1]));     // Output: 0   → (single element 0)
console.log(subarray([-2, 3, -4]));     // Output: 24  → (-2 × 3 × -4)



//////////////////////////////////////// 11 //////////////////////////////////////////

/////////////////////////////String ////////////////////////////////////////


// Reverse String — Two Pointer Approach
// LeetCode #344 — Reverse the array of characters in-place.

function reverseStr(str) {
  let left = 0;
  let right = str.length - 1;

  // Swap characters while moving both pointers inward
  while (left < right) {
    let temp = str[left];
    str[left] = str[right];
    str[right] = temp;

    left++;
    right--;
  }

  return str;
}

console.log(reverseStr(["h", "e", "l", "l", "o"])); // ["o","l","l","e","h"]

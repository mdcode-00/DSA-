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




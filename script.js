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



//////////////////////////////////////// 12 //////////////////////////////////////////



// Valid Palindrome — LeetCode #125
// Check if a string reads the same forward and backward,
// ignoring punctuation, spaces, and letter case.

function isPalindrom(str) {
  // Remove all non-alphanumeric characters + convert to lowercase
  let valid = str.trim().replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let left = 0;
  let right = valid.length - 1;

  // Use two-pointer approach to compare characters
  while (left < right) {
    // If mismatch found → not a palindrome
    if (valid[left] !== valid[right]) {
      return false;
    }

    left++;
    right--;
  }
  return true;
}

// ✅ Test cases
console.log(isPalindrom("A man, a plan, a canal: Panama")); // true
console.log(isPalindrom("race a car"));                     // false
console.log(isPalindrom(" "));                              // true


//////////////////////////////////////// 13 //////////////////////////////////////////



//Valid Anagram — LeetCode #242
// Check if two strings contain the same characters with the same frequencies.

function isAnagram(s, t) {
  // If lengths differ → cannot be an anagram
  if (s.length !== t.length) return false;

  let countS = {}; // Frequency map for string s
  let countT = {}; // Frequency map for string t

  // Build frequency maps for both strings
  for (let i = 0; i < s.length; i++) {
    countS[s[i]] = (countS[s[i]] || 0) + 1;   // Count characters in s
    countT[t[i]] = (countT[t[i]] || 0) + 1;   // Count characters in t
  }

  // Compare the frequency of every character
  for (const key in countS) {
    if (countS[key] !== countT[key]) {
      return false; // Mismatch means not an anagram
    }
  }

  return true;
}


console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car"));         // false
console.log(isAnagram("aacc", "ccac"));       // false


//////////////////////////////////////// 14 //////////////////////////////////////////


//  Group Anagrams — LeetCode #49
// Group words that are anagrams of each other using character frequency counting.

function groupAnagrams(strs) {
  let res = {}; // Object to store groups of anagrams

  // Loop through each string in the array
  for (let s of strs) {
    // Initialize an array of size 26 to count each letter (a-z)
    const count = new Array(26).fill(0);

    // Count the frequency of each character in the string
    for (let c of s) {
      count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // Convert frequency array into a unique string key
    const key = count.join(',');

    // If this key doesn’t exist, create a new array for this group
    if (!res[key]) res[key] = [];

    // Push the current string into its corresponding anagram group
    res[key].push(s);
  }

  return Object.values(res);
}

console.log(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]));
// Output: [ [ 'act', 'cat' ], [ 'pots', 'tops', 'stop' ], [ 'hat' ] ]


//////////////////////////////////////// 15 //////////////////////////////////////////


//Top K Frequent Elements — LeetCode #347
// Find the k most frequent elements in an integer array using a bucket sort approach.

function topKFrequent(nums, k) {
  let count = {}; // Frequency map
  let freq = Array.from({ length: nums.length + 1 }, () => []); // Buckets based on frequency

  // Count the frequency of each number
  for (let n of nums) {
    count[n] = (count[n] || 0) + 1;
  }

  //Place numbers into frequency buckets
  for (let n in count) {
    freq[count[n]].push(parseInt(n)); // Push the number into the bucket matching its frequency
  }

  //Collect the k most frequent elements (from highest frequency down)
  const res = [];
  for (let i = freq.length - 1; i > 0; i--) {
    for (let n of freq[i]) {
      res.push(n);
      if (res.length === k) return res; // Stop once we have k elements
    }
  }
}


console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // Output: [1, 2]
console.log(topKFrequent([4, 4, 4, 6, 6, 7, 7, 7, 7], 1)); // Output: [7]
console.log(topKFrequent([5, 5, 5, 6, 7, 8, 8], 3)); // Output: [5, 8, 6] (depending on frequency)



//////////////////////////////////////// 16 //////////////////////////////////////////



// Encode and Decode Strings — LeetCode #271
// Design an algorithm to encode a list of strings to a single string,
// and decode the single string back to the original list.

function encode(strs) {
  let res = '';

  // For each string, store its length, a '#' delimiter, and the string itself
  for (let s of strs) {
    res += s.length + '#' + s;
  }

  return res;
}


console.log(encode(["neet", "code", "love", "you"]));
// Output: "4#neet4#code4#love3#you"


function decode(str) {
  let res = [];
  let i = 0;

  while (i < str.length) {
    let j = i;

    // Move j forward until we find the '#' separator
    while (str[j] !== '#') {
      j++;
    }

    // Extract the number before '#' to know the word length
    let length = parseInt(str.substring(i, j));

    // Move past '#' and extract the word using its length
    i = j + 1;
    j = i + length;

    res.push(str.substring(i, j));

    // Move i to the start of the next encoded word
    i = j;
  }

  return res;
}


console.log(decode("4#neet4#code4#love3#you"));
// Output: ["neet", "code", "love", "you"]


//////////////////////////////////////// 17 //////////////////////////////////////////

// Product of Array Except Self — LeetCode #238
// Return an array where each element is the product of all numbers
// in the array except the number at the current index — without using division.

function productExceptSelf(nums) {
  // Initialize result array with 1s (prefix base value)
  let result = new Array(nums.length).fill(1);

  // Prefix pass: multiply by all elements on the left
  for (let i = 1; i < nums.length; i++) {
    result[i] = nums[i - 1] * result[i - 1];
  }

  // Postfix pass: multiply by all elements on the right
  let postfix = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] *= postfix;
    postfix *= nums[j];
  }

  return result;
}


console.log(productExceptSelf([1, 2, 4, 6])); // Output: [48, 24, 12, 8]
console.log(productExceptSelf([2, 3, 4, 5])); // Output: [60, 40, 30, 24]
console.log(productExceptSelf([-1, 0, 1, 2, 3])); // Output: [0,6,0,0,0]



///////////////////////////////////////// 18 //////////////////////////////////////////


//Longest Consecutive Sequence — LeetCode #128
// Find the length of the longest consecutive sequence in an unsorted array.

function longestConsecutive(nums) {
  let longest = 0;
  let map = new Map();

  // Initialize map with each number marked as "unused" (false)
  nums.forEach(n => {
    map.set(n, false);
  });

  // Iterate through each number and expand both forward and backward
  for (let i = 0; i < nums.length; i++) {
    let count = 1;

    // Expand forward sequence
    let next = nums[i] + 1;
    while (map.has(next) && map.get(next) === false) {
      count++;
      map.set(next, true);
      next++;
    }

    // Expand backward sequence
    let prev = nums[i] - 1;
    while (map.has(prev) && map.get(prev) === false) {
      count++;
      map.set(prev, true);
      prev--;
    }

    // Track the maximum sequence length
    longest = Math.max(longest, count);
  }

  return longest;
}


console.log(longestConsecutive([2, 20, 4, 10, 3, 4, 5])); // Output: 4  (sequence: 2,3,4,5)
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));   // Output: 4  (sequence: 1,2,3,4)
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));   // Output: 9  (sequence: 0-8)




///////////////////////////////////////// 19 //////////////////////////////////////////

// Best Time to Buy and Sell Stock — LeetCode #121
// Find the maximum profit from a single buy-sell transaction.
// You must buy before you sell.

function maxProfit(prices) {
  let maxProfit = 0;

  let left = 0;   // Buy pointer
  let right = 1;  // Sell pointer

  // Slide the window across the array
  while (right < prices.length) {
    // If selling price is higher → profit possible
    if (prices[left] < prices[right]) {
      maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
    } else {
      // Move buy pointer to the cheaper price
      left = right;
    }

    right++;
  }

  return maxProfit;
}


console.log(maxProfit([10, 1, 5, 6, 7, 1])); // Output: 6  (Buy 1 → Sell 7)
console.log(maxProfit([10, 8, 7, 5, 2]));    // Output: 0  (No profit possible)


/////////////////////////////////////20////////////////////////////////////////////////

// Longest Repeating Character Replacement — LeetCode #424
// Find the length of the longest substring that can be turned into repeating characters
// by replacing at most k characters.

function characterReplacement(s, k) {
  let count = new Map(); // Frequency map for characters in window
  let left = 0;
  let maxFreq = 0; // Highest character frequency in the current window
  let result = 0;

  // Expand window with right pointer
  for (let right = 0; right < s.length; right++) {
    count.set(s[right], (count.get(s[right]) || 0) + 1);
    maxFreq = Math.max(maxFreq, count.get(s[right]));

    // If replacements needed > k → shrink window
    while (right - left + 1 - maxFreq > k) {
      count.set(s[left], count.get(s[left]) - 1);
      left++;
    }

    // Track longest valid window
    result = Math.max(result, right - left + 1);
  }

  return result;
}

console.log(characterReplacement("ABAB", 2));     // Output: 4
console.log(characterReplacement("AABABBA", 1));  // Output: 4
console.log(characterReplacement("AAAA", 2));     // Output: 4




/////////////////////////////////////21////////////////////////////////////////////////



// Minimum Window Substring — LeetCode #76
// Find the smallest substring of s that contains all characters of t (including frequency).

function minWindow(s, t) {
  if (t === '') return '';

  let countT = {};   // Required character frequency from t
  let window = {};   // Current window character frequency

  // Build frequency map for t
  for (let c of t) {
    countT[c] = (countT[c] || 0) + 1;
  }

  let have = 0;
  let need = Object.keys(countT).length;

  let res = [-1, -1];
  let resLen = Infinity;
  let left = 0;

  // Expand sliding window with right pointer
  for (let right = 0; right < s.length; right++) {
    let c = s[right];
    window[c] = (window[c] || 0) + 1;

    // If this character frequency matches t's requirement
    if (countT[c] && window[c] === countT[c]) {
      have++;
    }

    // When we have all required characters, try to shrink window
    while (have === need) {
      // Update result if smaller window found
      if (right - left + 1 < resLen) {
        res = [left, right];
        resLen = right - left + 1;
      }

      // Pop from the left of window
      window[s[left]]--;
      if (countT[s[left]] && window[s[left]] < countT[s[left]]) {
        have--;
      }

      left++; // shrink window
    }
  }

  return resLen === Infinity ? '' : s.slice(res[0], res[1] + 1);
}


console.log(minWindow("ADOBECODEBANC", "ABC")); // Output: "BANC"
console.log(minWindow("a", "a"));               // Output: "a"
console.log(minWindow("a", "aa"));              // Output: ""



/////////////////////////////////////22////////////////////////////////////////////////

// Checks if parentheses/brackets/braces are valid and properly nested
var isValid = function (s) {

  // Map closing brackets to their corresponding opening bracket
  let check = {
    '}': '{',
    ')': '(',
    ']': '['
  };

  let stack = [];

  for (let c of s) {
    // If character is a closing bracket
    if (check[c]) {
      // Check if top of stack matches required opening bracket
      if (stack.length > 0 && stack[stack.length - 1] === check[c]) {
        stack.pop();
      } else {
        return false; // Mismatch
      }
    } else {
      // It's an opening bracket → push to stack
      stack.push(c);
    }
  }

  // Valid only if stack is empty
  return stack.length === 0;
};

// Input: s = "[]" == Output: true
// Input: s = "([{}])" === Output: true
// Input: s = "[(])" === Output: false>

/////////////////////////////////////23////////////////////////////////////////////////

///////////////////////////////////Binary Search///////////////////////////////////////

// Find Minimum in Rotated Sorted Array — LeetCode #153
// Using Binary Search (O(log n))

function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  // We search until both pointers meet
  while (left < right) {

    // Midpoint calculation
    let mid = Math.floor(left + (right - left) / 2);

    // If middle element is greater than the right element,
    // it means the minimum is in the RIGHT half.
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      // Otherwise, the minimum is in the LEFT half (including mid)
      right = mid;
    }
  }

  // Left will land exactly on the minimum element
  return nums[left];
}

console.log(findMin([3, 4, 5, 1, 2])); // 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // 0
console.log(findMin([11, 13, 15, 17])); // 11


/////////////////////////////////////24////////////////////////////////////////////////


// Search in Rotated Sorted Array — LeetCode #33
// Modified Binary Search (O(log n))

const search = (n, t) => {

  let left = 0;
  let right = n.length - 1;

  // Binary search while pointers don't cross
  while (left <= right) {

    // Middle index
    let mid = Math.floor(left + (right - left) / 2);

    // If target found → return index
    if (n[mid] === t) return mid;

    // Check if LEFT half is sorted
    if (n[left] <= n[mid]) {
      // If target is inside this left sorted range
      if (n[left] <= t && t <= n[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }

    } else {
      // Otherwise, the RIGHT half must be sorted
      if (n[mid] <= t && t <= n[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  // Target not found
  return -1;
};

console.log(search([3, 4, 5, 6, 1, 2], 1));  // → 4
console.log(search([3, 5, 6, 0, 1, 2], 4));  // → -1
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // → 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // → -1

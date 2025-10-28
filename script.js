// Function: Find common strings with the least index sum between two lists
// LeetCode 599 Pattern

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

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

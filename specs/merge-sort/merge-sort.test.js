/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  // base case
  if (nums.length < 2) {
    return nums;
  }

  let length = nums.length;
  let midPoint = Math.floor(length / 2);

  let leftArray = nums.slice(0, midPoint);
  let rightArray = nums.slice(midPoint);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
  // code goes here
};

const merge = (leftArray, rightArray) => {
  const results = [];

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      results.push(leftArray.shift());
    } else {
      results.push(rightArray.shift());
    }
  }

  return results.concat(leftArray, rightArray);
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

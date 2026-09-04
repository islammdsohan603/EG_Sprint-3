// contains Duplicate

var containsDuplicate = function (nums) {
  const uniqueNumbers = new Set(nums);
  return uniqueNumbers.size !== nums.length;
}

console.log(containsDuplicate([1, 2, 3, 1]));  
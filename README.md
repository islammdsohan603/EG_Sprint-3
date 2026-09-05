JavaScript DSA Practice

A collection of 10 JavaScript Data Structures & Algorithms practice problems.

 

* Excluding the output array.

01. Contains Duplicate

Checks whether an array contains any duplicate value.

var containsDuplicate = function(nums) {
    const uniqueNumbers = new Set(nums);
    return uniqueNumbers.size !== nums.length;
};

02. Move Zeroes

Moves all zeroes to the end while keeping the relative order of non-zero elements.

var moveZeroes = function(nums) {
    let position = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[position] = nums[i];
            position++;
        }
    }

    while (position < nums.length) {
        nums[position] = 0;
        position++;
    }
};

03. Valid Anagram

Checks whether two strings are anagrams.

var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sortedS = s.split("").sort().join("");
    const sortedT = t.split("").sort().join("");

    return sortedS === sortedT;
};

04. Ransom Note

Checks whether the ransom note can be constructed using characters from the magazine.

var canConstruct = function(ransomNote, magazine) {
    const count = {};

    for (let char of magazine) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of ransomNote) {
        if (!count[char]) {
            return false;
        }

        count[char]--;
    }

    return true;
};

05. Majority Element

Finds the element that appears more than n / 2 times using the Boyer-Moore Voting Algorithm.

var majorityElement = function(nums) {
    let candidate = null;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }

        if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }

    return candidate;
};

06. 3Sum

Finds all unique triplets whose sum is zero.

var threeSum = function(nums) {
    const result = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                left++;
                right--;

                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }

                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }

            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};

07. Subarray Sum Equals K

Counts the number of continuous subarrays whose sum equals k.

var subarraySum = function(nums, k) {
    let count = 0;
    let prefixSum = 0;

    const map = new Map();
    map.set(0, 1);

    for (let num of nums) {
        prefixSum += num;

        if (map.has(prefixSum - k)) {
            count += map.get(prefixSum - k);
        }

        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }

    return count;
};

08. Top K Frequent Elements

Returns the k most frequent elements.

var topKFrequent = function(nums, k) {
    const frequency = new Map();

    for (let num of nums) {
        frequency.set(num, (frequency.get(num) || 0) + 1);
    }

    const sorted = [...frequency.entries()]
        .sort((a, b) => b[1] - a[1]);

    return sorted.slice(0, k).map(item => item[0]);
};

09. Longest Consecutive Sequence

Finds the length of the longest sequence of consecutive integers in an unsorted array.

Example:

Input:  [100, 4, 200, 1, 3, 2]
Output: 4

var longestConsecutive = function(nums) {
    const numSet = new Set(nums);
    let longest = 0;

    for (let num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentLength = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentLength++;
            }

            longest = Math.max(longest, currentLength);
        }
    }

    return longest;
};

10. Sort Colors

Sorts an array containing only 0, 1, and 2 in ascending order using the Dutch National Flag algorithm.

Example:

Input:  [2, 0, 2, 1, 1, 0]
Output: [0, 0, 1, 1, 2, 2]

var sortColors = function(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
};

Important Note

sortColors() modifies the original array in-place, so it does not return the array.

const nums = [2, 0, 2, 1, 1, 0];

sortColors(nums);

console.log(nums);
// [0, 0, 1, 1, 2, 2]

Learning Goals

Improve JavaScript problem-solving skills

Understand common DSA patterns

Practice Hash Map / Set

Practice Two Pointer techniques

Understand Prefix Sum

Learn sorting-based approaches

Prepare for coding interviews

Improve time and space complexity analysis



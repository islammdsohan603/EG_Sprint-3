// Longest Consecutive Sequence

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

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
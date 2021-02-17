/**
 A peak element is an element that is strictly greater than its neighbors.
 Given an integer array nums, find a peak element, and return its index.
 If the array contains multiple peaks, return the index to any of the peaks.
 */

var findPeakElement = function(nums) {
    if (nums.length <= 3) {
        var max = Math.max(...nums)

        return nums.indexOf(max)
    }

    if (nums[nums.length - 2] < nums[nums.length - 1]) {
        return nums.length - 1
    }

    if (nums[0] > nums[1]) {
        return 0
    }


    var binarySearch = (arr, startIndex, endIndex) => {
        var middle = Math.floor((endIndex-startIndex) / 2) + startIndex

        var val = arr[middle]
        var prev = arr[middle - 1]
        var next = arr[middle + 1]

        if (val > prev && val > next) { // 1 3 2
            return middle
        }

        if (val > prev && val < next) { // 1 2 3
            return binarySearch(arr, middle, endIndex)
        }

        if (val < prev && val > next) { // 3 2 1
            return binarySearch(arr, startIndex, middle)
        }

        if (val < prev && val < next) { // 3 1 2
            return binarySearch(arr, middle, endIndex)
        }
    }

    return binarySearch(nums, 0, nums.length - 1)
};

findPeakElement([1,2,1,2,1]) // index: 1 or 3
findPeakElement([3,4,3,2,1]) // index: 1
findPeakElement([1,2,1,3,5,6,4]) // index: 5

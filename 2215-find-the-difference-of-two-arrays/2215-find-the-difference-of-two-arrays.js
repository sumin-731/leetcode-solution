/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    
    let arr1 = [];
    let arr2 = [];
    for(nums of set1){
        if(!set2.has(nums)){
            arr1.push(nums);
        }
    }

    for(nums of set2){
        if(!set1.has(nums)){
            arr2.push(nums);
        }
    }

    return new Array(arr1, arr2);
};
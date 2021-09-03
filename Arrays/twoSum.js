let twoSum = (arr,tar) => {
    for(let i =0;i<=arr.length;i++){
        if(arr[i] + arr[i+1] === tar){
            let res = [i,i+1];
            console.log(res);
        }
    }
};

twoSum([3,3],6);


// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].


// Input: nums = [3,2,4], target = 6
// Output: [1,2]
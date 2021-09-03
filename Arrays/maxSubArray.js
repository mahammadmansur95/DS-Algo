// let maxSubArray = arr => {
//     let maxSub = arr[0]; // give first elements as first maxSub array
//     curSum = 0; // leve if the prefix is less than zero
//     for(let i = 0; i < arr.length; i++){
//         if(curSum<0){
//             curSum = 0;
//         }
//         curSum += i;
//         maxSub = Math.max(maxSub,curSum);
//     }
//     console.log("result :" , maxSub);
   
// };

var maxSequence = function(arr){

    var curr_max = 0, max_so_far = 0;
  
    for(var i = 0; i < arr.length; i++){  
      curr_max = Math.max(0, curr_max + arr[i]);
      max_so_far = Math.max(curr_max, max_so_far);
    }
    return max_so_far;
}
  
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
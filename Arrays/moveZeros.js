// let moveZeros = arr =>{
//     for(let i=0;i<=arr.length -1;i++){
//         if(arr[i] == 0){

//         }else{
//             console.log("not zero");
//         }
//     }
//     console.log(arr);
// };


function moveZeros(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            arr.push(0);
        }
    }
    console.log(arr);
}

moveZeros([0, 1, 0, 3, 12]);

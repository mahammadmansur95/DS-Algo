let revStr  = str => {
    const backwards  =[];
    const totalItems  = str.length -1;
    for (let i = totalItems;i>=0;i--){
        backwards.push(str[i]);
    }

    console.log(backwards.join(''));
};


// //Built in methods
// let revStr = str => {
//     if(!str || str.length < 2 || typeof str !== 'string'){
//         console.log('Not a string');
//     }else{
//         let arr = str.split('');
//         arr.reverse();
//         console.log(arr.join(''));
//     }
// };

revStr('mansur is a good boy');

// str to arr
// let str1 = 'humera';
// console.log([...str1]); 

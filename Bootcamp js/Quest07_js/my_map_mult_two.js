function my_map_mult_two(array) {

    let newArray = [];

    for (var i = 0; i < array.length; i++) 
    {
       newArray.push(array[i]*2);

    }
    return newArray;

};
//console.log(my_map_mult_two([1,2,3,4,5]));
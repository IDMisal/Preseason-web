function my_average_mark(mark_str) {
    if (mark_str.length == 0){
        return 0,0;
    }
    let sum = 0;
    for (i = 0; i < mark_str.length; i++){
        sum = sum + mark_str[i]["integer"];
    }
    return (sum / mark_str.length).toFixed(1);
};

   /*function my_average_mark(mark_str): This line declares a function called my_average_mark which takes in a single argument, mark_str.
    if (mark_str.length == 0): This line checks if the length of the mark_str argument is equal to 0. If it is, the code block within the curly braces will execute.
    return 0,0;: If the length of mark_str is 0, this line will return the values 0 and 0.
    let sum = 0;: This line declares a variable sum and initializes it to 0.
    for (i = 0; i < mark_str.length; i++): This line starts a for loop that will iterate for as many times as the length of the mark_str argument. The variable i is initialized to 0 and will be incremented by 1 with each iteration.
    sum = sum + mark_str[i]["integer"];: This line adds the value of the "integer" key of the ith element of the mark_str array to the current value of the sum variable.
    return (sum / mark_str.length).toFixed(1);: This line divides the value of sum by the length of the mark_str argument, then rounds the result to 1 decimal place and returns it.
    */
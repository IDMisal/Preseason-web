function my_string_index(haystack, needle){
    index = 0;
    
    while (index < haystack.length) {
        if (haystack[index] == needle){
            return index
        }
        index++;
    }
    return -1;

};
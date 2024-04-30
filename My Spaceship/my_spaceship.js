
function my_spaceship(flightPath){
    flightPath = flightPath.toUpperCase();
    
    rotation = ["up", "down", "left", "up", "right", "down", "left"];
    index = 3;
    x = 0;
    y = 0;
    output = "";
    
	for(i = 0; i<flightPath.length; i++){
        
	    while(flightPath[i]!="R"&&flightPath[i]!="L"&&flightPathUpper[i]!="A"){
	        console.log("invalid");
	    }
	    if(flightPathUpper[i] == "A" && index == 3){
	        y--;
	    }else if(flightPathUpper[i] == "R"){
	        rotation[index];
	        index++;
	    }else if(flightPathUpper[i] == "L"){
	        rotation[index];
	        index--;
	    }else if(flightPathUpper[i] == "A" && rotation[index] == "right"){
	        x++;
	    }else if(flightPathUpper[i] == "A" && rotation[index] == "down"){
	        y++;
	    }else if(flightPathUpper[i] == "A" && rotation[index] == "left"){
	        x--;
	    }else if(flightPathUpper[i] == "A" && rotation[index] == "up"){
	        y--;
	    }
	
	}
	output = `{x: ${x}, y: ${y}, direction: '${rotation[index]}'}`;
	return output;
}
//console.log(my_spaceship("RAALALL"));
//console.log(my_spaceship("AAAA"));
//console.log(my_spaceship(""));
//console.log(my_spaceship("RAARA"));
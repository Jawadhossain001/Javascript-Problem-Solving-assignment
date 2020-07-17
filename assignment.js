// <---- Function->1) Feet to Mile ---->


function feetToMile(feet) {
    const mile = feet / 5280;
    return mile;
}



// <---- Function->2) Wood Calculator ---->


function woodCalculator(chair, table, bed) {
    const chairCount = chair * 1;
    const tableCount = table * 3;
    const bedCount = bed * 5;
    const total = chairCount + tableCount + bedCount;
    return total;
}



// <---- Function->3) Brick Calculator ---->


function brickCalculator(calculation){
    const oneFeet   = 1000;
    const tenFloors    = 15;
    const twentyFloors   = 12;
    const overTwenty   = 10;
    if(calculation <= 10){
        var multiply = calculation * tenFloors;
        var result = multiply  * oneFeet;
        return result;
    }else if(calculation <=20){
        var subtract = calculation - 10;
        var multiply = subtract * twentyFloors;
        var firstTen = 10 * 15;
        var total  = multiply + firstTen;
        var result = total * oneFeet;
        return result;
    }else if(calculation > 20){
        var subtract = calculation - 20;
        var multiply = subtract * overTwenty;
        var firstTen = 10*15;
        var secondTen = 10*12;
        var total = multiply + firstTen + secondTen;
        var result = total  *oneFeet;
        return result;
    }
}



// <---- Function->4) Tiny Friend ---->


function tinyFriend(name){
    var smallest = name[0];
    for(var i = 0; i < name.length; i++){
        var currentNames = name[i];
        if(currentNames.length < smallest.length){
            smallest = currentNames;
        }
	}
	return smallest;
}



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
    const overTwentyFloor   = 10;
    if(calculation <= 10){
        let multiplyBy = calculation * tenFloors;
        let result = multiplyBy  * oneFeet;
        return result;
    }else if(calculation <=20){
        let subtractNumbers = calculation - 10;
        let multiplyBy = subtractNumbers * twentyFloors;
        let firstTen = 10 * 15;
        let total  = multiplyBy + firstTen;
        let result = total * oneFeet;
        return result;
    }else if(calculation > 20){
        let subtractNumbers = calculation - 20;
        let multiplyBy = subtractNumbers * overTwentyFloor;
        let firstTen = 10 * 15;
        let secondTen = 10 * 12;
        let total = multiplyBy + firstTen + secondTen;
        let result = total  * oneFeet;
        return result;
    }
}



// <---- Function->4) Tiny Friend ---->


function tinyFriend(name){
    let smallest = name[0];
    for(let i = 0; i < name.length; i++){
        let currentNames = name[i];
        if(currentNames.length < smallest.length){
            smallest = currentNames;
        }
	}
	return smallest;
}



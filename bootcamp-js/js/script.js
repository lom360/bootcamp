// // Step 1
// var todos = [];
// var todoOne = promp("What do you want to do this weekend?");
// var todoTwo = prompt("W");
//
// // Step 2
// var todosWithDays = [];
// for(let i = )
//
// var sortedWithINdices = [];
// let j = 0;
// var now = new Date().getTime(); // Converts 35 Date object to ms
// while(j < todoWithDays.length) {
//     let oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
//     var diffDays = Math.round((todosWithDays[j][1].getTime() - now)/oneDay);
//     sortedWithIndices.push([diffDays, todosWithDays[j]]);
//     j++;
// }
//
// sortedWithIndices.sort();
//
// console.log(sortedWithIndices[sortedWithIndices.length - 1][1], ' will take the longest');
//
//
// var myFunc = function() {
//     console.log('You fired your anonymous function');
// };
// myFunc();
//
//
// function givesMeBestNumber(number) {
//     if(number === 42) {
//         return `${number} is the best number!`;
//     }else {
//         alert(`${number} sucks!!!!!`);
//     }
// }
//
// let message = givesMeBestNumber(42);
//
// alert(message);

// var maxAge = prompt("How long do you think you'll live.");
// const yourAge = prompt("How old are you now?");
// const neededItems = prompt("How many bottles of coconut water you consume per day.");
//
// var calcLifeSupply = function(age, items) {
//     parseInt(age);
//     parseInt(items);
//     if(isNaN(age) || isNaN(items)){
//         alert("Please take this seriously");
//         calcLifeSupply(age, items);
//     }else {
//         let x = maxAge - age;
//         let y = x * items * 365;
//         alert("You will need " + y + " to last you until you're " + maxAge);
//     }
// }
//
// calcLifeSupply(yourAge, neededItems);


/****************************DAY 5 TAKE HOME BELOW ****************************/

// Find the square of a number
var squareNum = function(x) {
    return x * x;
}

// Alerts if number, calls function again if NaN
var checkIfNum = function(number) {
    if(isNaN(number)) {
        checkIfNum(prompt("Please give a real number"));
    }else {
        alert("Yes that's a number");
    }
}

// Capitalize first letter and adds period at the end if there isn't
var makeSentence = function(str) {
    str = str.charAt(0).toUpperCase() + str.slice(1);
    if(str[str.length - 1] != '.') {
        return str + '.';
    } else {
        return str;
    }
}

// Flips the first half of string with the second half
var flipString = function(myStr) {
    halfLength = myStr.length/2;
    temp1 = myStr.substr(0, halfLength);
    temp2 = myStr.substr(-1 * halfLength);
    myStr = temp2 + temp1;
    return myStr;
}

// Checks if a string is a Palindrom or not
var isPalindrome = function(checkString) {
    var cmpString = "";
    for(let i = checkString.length - 1; i >= 0; i--){
        cmpString += checkString.charAt(i);
    }
    if(cmpString == checkString) {
        return true;
    }else {
        return false;
    }
}

// function call
console.log(squareNum(3));
checkIfNum(10);
checkIfNum(NaN);
console.log(makeSentence("don't be a wise guy"));
console.log(makeSentence("Time to rest."))
console.log(flipString("abcdef"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));


myArray = [3, 6, -2, -5, 7, 3];
array2 = [-23, 4, -3, 8, -12];

var highestPair = function(inputArray) {
    var maxNum = -1000;
    for(i = 0; i < inputArray.length - 1; i++){
        if(maxNum < (inputArray[i] * inputArray[i+1])){
            maxNum = inputArray[i] * inputArray[i+1];
        }
    }
    return maxNum;
}

console.log(highestPair(myArray));
console.log(highestPair(array2));

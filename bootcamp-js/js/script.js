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


var squareNum = function(x) {
    return x * x;
}

var checkIfNum = function(number) {
    if(isNaN(number)) {
        checkIfNum(prompt("Please give a real number"));
    }else {
        alert("Yes that's a number");
    }
}

var makeSentence = function(str) {
    str = str.charAt(0).toUpperCase() + str.slice(1);
    if(str[str.length - 1] != '.') {
        return str + '.';
    } else {
        return str;
    }
}

var flipString = function(myStr) {
    halfLength = myStr.length/2;
    temp1 = myStr.substr(0, halfLength);
    temp2 = myStr.substr(-1 * halfLength);
    myStr = temp2 + temp1;
    return myStr;
}

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

console.log(squareNum(3));
checkIfNum(10);
checkIfNum(NaN);
console.log(makeSentence("don't be a wise guy"));
console.log(flipString("abcdef"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));

// const bestNumber = 42;
//
// console.log(!bestNumber);
//
// var myString = "Batman";
// var newString = new String(myString);
// console.log(myString);
// console.log(newString);
// console.log(myString == newString)
// console.log(typeof(myString));
// console.log(typeof(newString));
//
//
// var num1 = parseInt(prompt("Please enter an integer", 10));
// var num2 = parseInt(prompt("Please enter an integer", 10));
// alert(num1 + num2);
//
//
const bestMovie = 5;
//
// if(typeof(bestMovie) == 'string') {
//   alert('Yay its a string!');
// } else if(typeof(bestMovie) === 'number') {
//   alert('You gave me a number');
// } else {
//   alert('It\'s not a string');
// }


// switch(typeof(bestMovie)) {
//   case 'string':
//     alert('Yay it\'s a string!');
//     break;
//
//   case 'number':
//     alert('You sir just gave me a number');
//     break;
//
//   case 'bool':
//     alert('Stop messing around');
//     break;
//
//   case 'object':
//     alert('Please just give me a string already');
//     break;
// }

// var userAge = prompt('How old are you?', '200');
// if(userAge > 18) {
//   if(userAge < 80) {
//     var userAnswer = prompt('Do you like starwars');
//     if(userAnswer == 'yes'){
//       alert('We can\'t be friends');
//     }else {
//       alert('Cool you are awesome');
//     }
//   }else {
//     alert('You\'re too old');
//   }
// }else{
//   alert('You\'re not old enough');
// }


var userName = prompt('Give me your user name');
var favColor = prompt("What is your favorite color?", "blue or yellow");

switch(favColor.toLowerCase()) {
    case 'blue':
        alert(userName + " You're blue, da ba di da ba die...");
        break;
    case 'yellow':
        alert("You are so yellow...");
        break;
    default:
        alert("Please answer with a valid color.");
}

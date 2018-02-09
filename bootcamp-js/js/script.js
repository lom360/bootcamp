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


// var userQueryType = prompt("Which type do you want to use?", "Please use either 'tag', 'class', 'id', 'selector', 'selectorAll'");
//
// function queryDom(queryType, tagToQuery) {
//     tagToQuery = 'body';
//     switch(queryType) {
//         case 'tag':
//             console.log(document.getElementsByTagName('body')[0]);
//             break;
//         case 'class':
//             console.log(document.getElementsByClassName('body')[0]);
//             break;
//     }
// }


// var trinity = document.getElementsByTagName('p')[0];
// console.log(trinity);
//
// var justiceLeague = document.getElementsByClassName('btn');
// console.log(justiceLeague);
//
// var trinity1 = document.querySelector('p');
// console.log(trinity1);
//
// var justiceLeague1 = document.querySelectorAll('p');
// console.log(justiceLeague1);

var testing = document.getElementsByTagName('div')[0];
// var tester = document.getElementsByClassName('btn')[0];
var tester = document.querySelector('btn');

testing.addEventListener('click', function(e){
    testing.style.backgroundColor = "red";
});

tester.addEventListener('click', () =>{
    alert("I am part of the Justice League");
});

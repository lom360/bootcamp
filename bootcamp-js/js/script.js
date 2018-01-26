var randomList = [];
var starWarsFan = true;

randomList[0] = "Movies are boring";
randomList[1] = 7;
randomList[2] = !starWarsFan;
randomList[3] = 1990;

console.log(randomList);
console.log(randomList.length);

console.log(typeof(randomList));
console.log(Array.isArray(randomList));

var bestTeacher = prompt('Who is the best teacher?', 'Oniziku');
randomList.unshift(bestTeacher);
console.log(randomList);

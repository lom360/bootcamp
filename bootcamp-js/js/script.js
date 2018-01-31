// var randomList = [];
// var starWarsFan = true;
//
// randomList[0] = "Movies are boring";
// randomList[1] = 7;
// randomList[2] = !starWarsFan;
// randomList[3] = 1990;
//
// console.log(randomList);
// console.log(randomList.length);
//
// console.log(typeof(randomList));
// console.log(Array.isArray(randomList));
//
// var bestTeacher = prompt('Who is the best teacher?', 'Oniziku');
// randomList.unshift(bestTeacher);
// console.log(randomList);

var movie1 = ["National Treasure", "Ben Gates"];
var movie2 = ["Pirates of the Carribean", "Jack Sparrow"];
var movie3 = ["Mad Max", "Furiosa"];
var movie4 = ["The Dark Knight", "Batman"];
var movie5 = ["Serenty", "Malcolm Reynolds"];

var favoriteMovies = [];
favoriteMovies.push(movie1, movie2, movie3, movie4, movie5);

var topMovieTitles = [];
topMovieTitles.push(favoriteMovies[0][0], favoriteMovies[1][0], favoriteMovies[2][0], favoriteMovies[3][0], favoriteMovies[4][0]);
alert("My favorite movies are " + topMovieTitles[0] + ", " + topMovieTitles[1] + ", " + topMovieTitles[2] + ", "  + topMovieTitles[3] + ", " + topMovieTitles[4]);

var worseAndBest = [favoriteMovies[0][0], favoriteMovies[4][0]];

console.log("The best movie ever is " + worseAndBest[0] + " and " + "the worst movie ever is " + worseAndBest[1]);

alert("Array length is " + favoriteMovies.length);

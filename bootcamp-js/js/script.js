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

var movie1 = ["National Treasure", "Ben Gates", 2000];
var movie2 = ["Pirates of the Carribean", "Jack Sparrow", 2005];
var movie3 = ["Mad Max", "Furiosa", 2015];
var movie4 = ["The Dark Knight", "Batman", 2007];
var movie5 = ["Serenity", "Malcolm Reynolds", 2005];

var favoriteMovies = [];
favoriteMovies.push(movie1, movie2, movie3, movie4, movie5);
//
// var topMovieTitles = [];
// topMovieTitles.push(favoriteMovies[0][0], favoriteMovies[1][0], favoriteMovies[2][0], favoriteMovies[3][0], favoriteMovies[4][0]);
// alert("My favorite movies are " + topMovieTitles[0] + ", " + topMovieTitles[1] + ", " + topMovieTitles[2] + ", "  + topMovieTitles[3] + ", " + topMovieTitles[4]);
//
// var worseAndBest = [favoriteMovies[0][0], favoriteMovies[4][0]];
//
// console.log("The best movie ever is " + worseAndBest[0] + " and " + "the worst movie ever is " + worseAndBest[1]);
//
// alert("Array length is " + favoriteMovies.length);

var n = 0;
var topMovie = 0;
var topMovieTitles = [];

// while(n < favoriteMovies.length) {
//     topMoviesTitles.push(favoriteMovies[n][0]);
//     n++;
// }

// while(topMovie < favoriteMovies.length) {
//     if(favoriteMovies[topMovie][0] == 'Serenity'){
//         alert('The best movie ever made is ' + favoriteMovies[topMovie][0] + ' where release date was ' + favoriteMovies[topMovie][2]);
//         break;
//     }
//     topMovie++;
// }

for(var i = 0; i <= favoriteMovies.length - 1; i++) {
    console.log(i);
    if(favoriteMovies[i][0] == 'National Treasure'){
        alert('The best movie ever made is ' + favoriteMovies[i][0] + ' where release date was ' + favoriteMovies[i][2]);
        // break;
    }
}

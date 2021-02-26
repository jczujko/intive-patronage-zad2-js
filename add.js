import setCounterTo from './movies-counter.js';

let anotherMoviesCounterAll = document.getElementById("anotherMoviesCounterAll");
let anotherMoviesCounterSeen = document.getElementById("anotherMoviesCounterSeen");

let anotherMoviesList = JSON.parse(localStorage.movies)

function countMovies() {
    console.log("Counting movies...")
    let counterAll = 0;
    let counterSeen = 0;
    counterAll = anotherMoviesList.length;
    anotherMoviesList.forEach(element => {
        if (element.seen === "T") {
            counterSeen += 1;
        }
    });
    setCounterTo(anotherMoviesCounterAll, counterAll);
    setCounterTo(anotherMoviesCounterSeen, counterSeen);
}

countMovies();
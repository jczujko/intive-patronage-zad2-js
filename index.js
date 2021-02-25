import MoviesStorage from './movies-storage.js';
import setCounterTo from './movies-counter.js';
let moviesCounterAll = document.getElementById("moviesCounterAll");
let moviesCounterSeen = document.getElementById("moviesCounterSeen");
let moviesList = new MoviesStorage();

function countMovies() {
    console.log("Counting movies...")
    let counterAll = 0;
    let counterSeen = 0;
    counterAll = moviesList.movies.length;
    moviesList.movies.forEach(element => {
        if (element.seen === "T") {
            counterSeen += 1;
        }
    });
    setCounterTo(moviesCounterAll, counterAll);
    setCounterTo(moviesCounterSeen, counterSeen);
}

function parseMovies() {
    console.log("Parsing movies...")
    let moviesUnorderedList = document.getElementById("moviesList");
    delete moviesUnorderedList.children;
    moviesList.movies.forEach(element => {
        let movieListItem = document.createElement("li");
        let moviePictogram = document.createElement("img");
        movieListItem.setAttribute("id", `movie-${element.id}`);
        if (element.seen === "T") {
            moviePictogram.setAttribute("src", "seen.png");
        } else if (element.seen === "F") {
            moviePictogram.setAttribute("src", "not-seen.png");
        }
        moviePictogram.setAttribute("onclick", "doMagic(this)");
        let movieSpan = document.createElement("span");
        movieSpan.append(`${element.title}`, moviePictogram, document.createElement("br"),
            `Year: ${element.year}`, document.createElement("br"),
            `Genre: ${element.genre}`, document.createElement("br"),
            `Summary: ${element.summary}`
        );
        movieListItem.appendChild(movieSpan);
        moviesUnorderedList.appendChild(movieListItem);
    });
}

function doMagic(elem) {
    console.log("Doing magic...");
    let listElementId = elem.parentNode.parentNode.id;
    let movieId = listElementId.replace(/^(movie-)/g, "");
    let item = moviesList.movies.findIndex(item => item.id === parseInt(movieId));
    if (moviesList.movies[item].seen === "T") {
        elem.setAttribute("src", "not-seen.png");
        moviesList.movies[item].seen = "F";
        setCounterTo(moviesCounterSeen, (parseInt(moviesCounterSeen.innerText) - 1));
    } else if (moviesList.movies[item].seen === "F") {
        elem.setAttribute("src", "seen.png");
        moviesList.movies[item].seen = "T";
        setCounterTo(moviesCounterSeen, (parseInt(moviesCounterSeen.innerText) + 1));
    }
}

window.doMagic = doMagic;

countMovies();
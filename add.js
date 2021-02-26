import setCounterTo from './movies-counter.js';
import MoviesStorage from './movies-storage.js';

let anotherMoviesCounterAll = document.getElementById("anotherMoviesCounterAll");
let anotherMoviesCounterSeen = document.getElementById("anotherMoviesCounterSeen");
let anotherMoviesList = new MoviesStorage();

function countMovies() {
    console.log("Counting movies...")
    let counterAll = 0;
    let counterSeen = 0;
    counterAll = anotherMoviesList.movies.length;
    anotherMoviesList.movies.forEach(element => {
        if (element.seen === "T") {
            counterSeen += 1;
        }
    });
    setCounterTo(anotherMoviesCounterAll, counterAll);
    setCounterTo(anotherMoviesCounterSeen, counterSeen);
}

function validateAddForm() {
    let formTitle = document.getElementById("formTitle");
    let formYear = document.getElementById("formYear");
    let formGenre = document.getElementById("formGenre");
    let formSummary = document.getElementById("formSummary");
    if (formTitle.value === "") {
        alert("Field \"Title\" is required");
    }
    if (formYear.value === "") {
        alert("Field \"Year\" is required");
    } else if (!/^[0-9]{4}$/.test(formYear.value)) {
        alert("Year must be a correct 4 digit number");
    }
    if (formGenre.value === "") {
        alert("Field \"Genre\" is required");
    }
    let randId = 0;
    do {
        randId = anotherMoviesList.movies.length * Math.floor(Math.random() * 10);
        console.log(randId);
    } while (anotherMoviesList.movies.findIndex(element => element.id === randId) != -1)
    let movieInstance = {};
    movieInstance.id = randId;
    movieInstance.title = formTitle.value;
    movieInstance.year = formYear.value;
    movieInstance.genre = formGenre.value;
    movieInstance.summary = formSummary.value;
    movieInstance.seen = formSeen.value;
    anotherMoviesList.set(movieInstance);
    countMovies();
}

window.validateAddForm = validateAddForm;

countMovies();
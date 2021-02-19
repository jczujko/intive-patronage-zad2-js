let moviesCounterAll = document.getElementById("moviesCounterAll");
let moviesCounterSeen = document.getElementById("moviesCounterSeen");

function countMovies() {
    console.log("Counting movies...")
    let counterAll = 0;
    let counterSeen = 0;
    moviesList.forEach(element => {
        counterAll += 1;
        if (element.seen === "T") {
            counterSeen += 1;
        }
    });
    moviesCounterAll.innerText = counterAll;
    moviesCounterSeen.innerText = counterSeen;
}

function parseMovies() {
    console.log("Parsing movies...")
    let moviesUnorderedList = document.getElementById("moviesList");
    moviesList.forEach(element => {
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
    let item = moviesList.findIndex(item => item.id === parseInt(movieId));
    if (moviesList[item].seen === "T") {
        elem.setAttribute("src", "not-seen.png");
        moviesList[item].seen = "F";
        moviesCounterSeen.innerText = parseInt(moviesCounterSeen.innerText) - 1;
    } else if (moviesList[item].seen === "F") {
        elem.setAttribute("src", "seen.png");
        moviesList[item].seen = "T";
        moviesCounterSeen.innerText = parseInt(moviesCounterSeen.innerText) + 1;
    }
}
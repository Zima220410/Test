let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы просмотрели?", "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы просмотрели?", "");
    }
};
start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Какой фильм', '');
        let b = prompt('Оценка', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("Done");
        } else {
            i--;
            console.log('Error');
        }
    }
};
// rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Мало');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Norm');
    } else if (personalMovieDB.count >= 30) {
        console.log("Cool");
    } else {
        console.log('Error');
    };
};
// detectPersonalLevel();

function showMyBD() {
    if(personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    };
};
// showMyBD();

function writeYourGenres() {
    for(let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}?`, '');
    };
};
writeYourGenres();

console.log(personalMovieDB);
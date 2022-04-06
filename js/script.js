let numberOfFilms = +prompt("Сколько фильмов вы просмотрели?", "");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

let a = prompt('Какой фильм', '');
let b = prompt('Оценка', '');
let c = prompt('Какой фильм', '');
let d = prompt('Оценка', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
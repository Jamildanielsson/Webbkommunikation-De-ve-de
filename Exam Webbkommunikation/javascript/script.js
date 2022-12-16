// Det vi har kvar i index/script.js här nedan är nödvändiga variabler och 
// olika klick-event för att kalla på de funktioner som vi använder i vår app.

import { saveToDatabase, getMovies, removeFromDatabase } from "./modules/saveGetDelete.js"
import { displayFavoritesDiv } from "./modules/display.js"
import { manageSearchData } from "./modules/search.js"

const titleInput = document.querySelector(`#titleInput`)
const genreInput = document.querySelector(`#genreInput`)
const dateInput = document.querySelector(`#dateInput`)

const addMovieBtn = document.querySelector(`#addMovieBtn`)

const FavoriteMoviesDiv = document.querySelector(`#favoriteMoviesDiv`)
const displayMoviesBtn = document.querySelector(`#displayMovies`)
const mainElem = document.querySelector(`main`)
const searchDiv = document.querySelector(`#searchDiv`)

FavoriteMoviesDiv.style.display = `none`
searchDiv.style.display = `none`

const searchInput = document.querySelector(`#searchInput`)
const searchBtn = document.querySelector(`#searchMovieBtn`)

let searchData = searchInput.value;
let movie = {
    title: '',
    genre: '',
    releasedate: ''
};

async function addSaveClick(movieTitle, movieGenre, movieDate) {
    addMovieBtn.addEventListener(`click`, async () => {

        const movieTitle = titleInput.value;
        const movieGenre = genreInput.value;
        const movieDate = dateInput.value;

        await saveToDatabase(movieTitle, movieGenre, movieDate)

        let allInputs = document.querySelectorAll(`input`)
        allInputs.forEach(input => {
            input.value = ``;
        })
    })
}

addSaveClick()
displayFavoritesDiv()


async function removeClickEvent() {
    const movieObjects = document.querySelectorAll('.removeFavorite')

    movieObjects.forEach((movieObject) => {
        movieObject.addEventListener(`click`, async (event) => {

            const movieId = event.target.getAttribute(`data-movie-id`);

            await removeFromDatabase(movieId)
            alert(`You removed a movie from favorites`)
        });
    })
}

async function searchClick() {
    searchBtn.addEventListener(`click`, () => {
        const searchData = searchInput.value;

        manageSearchData(searchData)
        if (searchInput.value == ``) {
            alert(`Please add a title to search for..`)
        }

        searchDiv.addEventListener(`click`, () => {
            searchInput.value = ``;
            searchDiv.innerHTML = ``;
            searchDiv.style.display = `none`
            mainElem.style.display = `grid`

        })
    })
}

searchClick()

// Exporterar variabler för sig och funktioner för sig själv för min egen ordnings skull.

export { titleInput, genreInput, dateInput, FavoriteMoviesDiv, displayMoviesBtn, mainElem, searchDiv } /* to saveGetDelete */
export { removeClickEvent }
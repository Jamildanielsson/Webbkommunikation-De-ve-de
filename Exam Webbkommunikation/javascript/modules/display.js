// Display, hur data från databasen skall presenteras för klienten, visas här och jag tycker att det är värt en egen modul,
// då det är en egen sektion av funktioner även om vi använder oss av andra funktioner som att hämta data från databasen.
// Dessa två funktioner fungerar som presentatörer av det material vi hämtar och har det gemensamt vilket fick mig att sätta dem i samma modul.

import { displayMoviesBtn, FavoriteMoviesDiv, mainElem, removeClickEvent, searchDiv } from "../script.js"
import { getMovies } from "./saveGetDelete.js"

async function displayFavoritesDiv() {
    displayMoviesBtn.addEventListener(`click`, () => {

        FavoriteMoviesDiv.style.display = `grid`
        FavoriteMoviesDiv.innerHTML =
            `
        <section>
            <h1>Favorite Movies:</h1>
            <button id="backToStart">Back to Start</button>            
            <article>
                <ul>
                </ul>
            </article>
        </section>
        `
        getMovies()

        mainElem.style.display = `none`

        const backToStart = document.querySelector(`#backToStart`)
        backToStart.addEventListener(`click`, () => {
            FavoriteMoviesDiv.style.display = `none`;
            mainElem.style.display = `grid`

        })
    })
}

async function showTitleSearch(movie) {

    const elem = `
    <h1>SEARCH:</h1>
    <li>
    <h2>Title:</h2>
    <h3>${movie.data().title}</h3>
    <br>
    <h2>Genre:</h2>
    <h3>${movie.data().genre}</h3>
    <br>
    <h2>Release:</h2>
    <h3>${movie.data().releasedate}</h3>
    <br>
    </li>
    <br><br>
    <button id="backToStart">Back to Start</button>
    `
    searchDiv.insertAdjacentHTML(`beforeend`, elem)

}

export { displayFavoritesDiv, showTitleSearch }
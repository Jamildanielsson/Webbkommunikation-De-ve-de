// Här har vi "Spara", "Hämta", "Ta bort"-data från vår databas och jag har skapat en egen modul för dessa då de olika funktionerna
// är själva essensen här, att skapa data eller radera vår information. Att hämta data behövs också för att kunna presentera information
// som vi har sparat. Dessa samspelar med varandra och därför har de fått en egen modul.

import { addDoc, collection, db, getDocs, deleteDoc, doc } from "./firebaseConfig.js"
import { titleInput, genreInput, dateInput, FavoriteMoviesDiv } from "../script.js"
import { removeClickEvent } from "../script.js"

async function saveToDatabase(movieTitle, movieGenre, movieDate) {
    if (titleInput.value == ``) {
        alert(`Write a title to proceed..`)
    }
    else if (genreInput.value == ``) {
        alert(`Write a genre to proceed..`)
    }
    else if (dateInput.value == ``) {
        alert(`Write a releasedate to proceed..`)
    }
    else {
        try {
            await addDoc(collection(db, `moviecollection`), {
                title: movieTitle,
                genre: movieGenre,
                releasedate: movieDate
            })
            alert(`Your movie has been added`)
        }
        catch (error) {
            console.log(`error`, error);
        }
    }
}

async function getMovies() {

    const allMovies = await getDocs(collection(db, `moviecollection`));
    allMovies.forEach((movie) => {
        const elem =

            `
            <li>
            <button data-movie-id="${movie.id}" class="removeFavorite">Remove Favorite</button>
            <h1>Title:</h1>
            <h2>${movie.data().title}</h2>
            <br>
            <h1>Genre:</h1>
            <h2>${movie.data().genre}</h2>
            <br>
            <h1>Utgivningsdatum:</h1>
            <h2>${movie.data().releasedate}</h2>
            <br>
            </li>    
            `
        FavoriteMoviesDiv.insertAdjacentHTML
            (`beforeend`, elem)
    })
    removeClickEvent()

}

async function removeFromDatabase(movieId) {
    try {
        await deleteDoc(doc(db, `moviecollection`, movieId));
    }
    catch (error) {
        console.log(`ERROR`, error)
    }
}

export { saveToDatabase, getMovies, removeFromDatabase }

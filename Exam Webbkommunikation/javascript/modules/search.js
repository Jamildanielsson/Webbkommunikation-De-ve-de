// Här har jag valt att spara dessa två sökfunktions-delarna för att sökningen i databasen är ett eget kapitel och det känns logiskt att
// de får en egen modul.

import { query, db, collection, where, getDocs } from "./firebaseConfig.js"
import { searchDiv, mainElem } from "../script.js";
import { showTitleSearch } from "./display.js";

async function checkIfTitleExists(searchData) {
    try {
        const titleQuery = query(collection(db, 'moviecollection'), where('title', '==', searchData));
        const result = await getDocs(titleQuery);
        let resultTitle = {};

        result.forEach((title) => {
            resultTitle = title;
        });

        return resultTitle;

    } catch (error) {
        console.log(error);
    }
}

async function manageSearchData(searchData) {
    const movieName = await checkIfTitleExists(searchData)
    const movieId = movieName.id
    if (movieId) {
        searchDiv.style.display = `flex`
        mainElem.style.display = `none`
        showTitleSearch(movieName)

    } else {
        searchDiv.style.display = `none`
        mainElem.style.display = `grid`
        alert(`Title could not be found in database`)
    }
}

export { checkIfTitleExists, manageSearchData }
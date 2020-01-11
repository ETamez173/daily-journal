/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */
// Tell it where to store the data in array
let entries = []

// ask Steve or Mo what is setNotes for???
const setJournals = (journalArray) => {
    entries = journalArray.slice()

    const sortedByDate = entries.sort(
                (currentEntry, nextEntry) =>
                    Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
                    return sortedByDate


}

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
// from line 10 in NoteProvdier.js 



// const dateSorted = sortedByDate = () => {

//     const sortedByDate = entries.sort(
//         (currentEntry, nextEntry) =>
//             Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
// )
//             // return sortedByDate




export const useJournals = () => entries.slice()
// export const useJournals = () => dateSorted.slice()



// export const useJournalEntries = () => {

// export const useJournalEntries = () => {
//     const sortedByDate = entries.sort(
//         (currentEntry, nextEntry) =>
//             Date.parse(currentEntry.date) - Date.parse(nextEntry.date)


//             // const entriesBatch = entries

//     // console.log(sortedByDate)
//     // console.log(sortedByDate)
//     // return entriesBatch
//         return sortedByDate

// }


export const deleteJournalEntry = (entryId) => {
    console.log(entryId);
        return fetch(`http://localhost:8088/entries/${entryId}`, 
       
        {
        method: "DELETE"
    })
    .then(getJournals)
}





export const saveJournalEntry = journal => {

// Replace "url" with your API's URL
    return fetch("http://localhost:8088/entries", {  
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(journal)
        // body: JSON.stringify(newJournalEntry)
    })
        .then(getJournals)  // <-- Get all journal entries

}


export const getJournals = () => {
    // Load database state into application state
    return fetch("http://localhost:8088/entries")
        .then(response => response.json())
        .then((journalArray) => {
            entries = journalArray.slice()
            
            // return getJournals
        })
       
}


// json-server -p 8088 -w journals.json
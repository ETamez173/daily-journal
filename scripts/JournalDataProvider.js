/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data. Can't Touch This.
const journal = [
    {   id: 1,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },
    {   id: 2,
        date: "11/25/2019",
        concept: "Automating Javascript",
        entry: "We talked about how to automate our javasript to create HTML.",
        mood: "Ok"
    },
    {   id: 3,
        date: "11/26/2019",
        concept: "Data Flow and Javascript",
        entry: "We talked about how we need to understand the data flow of things when we are automating our HTML.",
        mood: "Ok"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    
    )
    console.log(sortedByDate)
    return sortedByDate

}
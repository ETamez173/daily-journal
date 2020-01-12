/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournals, getJournals, saveJournalEntry, deleteJournalEntry } from "./JournalDataProvider.js"


const eventHub = document.querySelector("#appContainer")
// const contentTarget = document.querySelector(".container")
const contentTarget = document.querySelector(".journal__listing")

// DOM reference to where all entries will be rendered
const EntryListComponent = () => {
    // same as Notelist in NoteList.js
/// steve put the DELETE event listner here
eventHub.addEventListener("journalHasBeenEdited", event => {
    const updatedJournals = useJournals()
    render(updatedJournals)

})




eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("editEntry--")) {
        const [notUsed, entryId] = clickEvent.target.id.split("--")
        // console.log(clickEvent.target.id.split("--"))
        // console.log(entryId)
        /*
            Let all other components know that the user chose
            to edit an entry, and attach data to the message
            so that any listeners know which entry should be
            edited.
        */
        // const message = new CustomEvent("entryEdited")
        // eventHub.dispatchEvent(message)

        const editEvent = new CustomEvent("editButtonClicked", {
            detail: {
                entryId: entryId
            }

        })
        eventHub.dispatchEvent(editEvent)

    }

                    


// eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEntry--")) {

        const [deletePrefix, entryId] = clickEvent.target.id.split("--")
        // console.log(clickEvent.target.id)
        console.log(clickEvent.target.id.split("--"))
        // console.log(noteId)
        deleteJournalEntry(entryId).then(
            () => {

                const theNewJournals = useJournals()
                render(theNewJournals)
            }
        )
    }

})



    const renderJournalsAgain = () => {
        const allJournals = useJournals()
                // console.log(useJournals)
        render(allJournals)

    }

   
    eventHub.addEventListener("showJournalButtonClicked", event => {
        renderJournalsAgain()
// console.log("This is a test of >>> showJournalButtonClicked ")
    })


// debugger
const render = (journalsCollection) => {
    contentTarget.innerHTML = journalsCollection.map((individualEntry) => {

            return `           
              
                    <section id="entry--${individualEntry.id}" class="journalEntry">
                <div class="concept__text"> Concept Covered:  ${individualEntry.concept}</div>
                <div class="entry__text" > Entry: ${individualEntry.entry}</div>
                <div class="entry__date"> Date: ${individualEntry.date}</div>
                <div class="entry__mood"> Mood: ${individualEntry.mood}</div>
                <br>      
                <div class="entryButton__area">
                <button id="editEntry--${individualEntry.id}" class="journal__editButton">Edit</button>
                <button id="deleteEntry--${individualEntry.id}" class="journal__deleteButton">Delete</button>
                </div>
                </section> 
        
                    `
        
                   }
                ).join("")
          }
    }
    
   
        export default EntryListComponent


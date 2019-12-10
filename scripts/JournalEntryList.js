/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries } from "./JournalDataProvider.js"
import JournalEntryComponent from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".entry__log")
// Use the journal entry data from the data provider component
const EntryListComponent = () => {
    const eachEntry = useJournalEntries()
    
    console.log(eachEntry)
    console.log("CODE TO INVOKE HTML of ENTRY NEEDED HERE #1")

    entryLog.innerHTML += `
    
    <section class=".entry__Log">
             <div class="journal__item">
             ${
             eachEntry.map(entry => JournalEntryComponent(entry)).join("")
            }
             </div>
    </section>
    
        

` 
}

console.log("CODE TO INVOKE HTML of ENTRY NEEDED HERE #2")


export default EntryListComponent


// console.log(entryLog)

// <p>TEST THE CODE !!!</p>
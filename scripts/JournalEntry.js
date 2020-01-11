import { getJournals, useJournals } from "./JournalDataProvider.js"

/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
const eventHub = document.querySelector("#appContainer")
const contentTarget = document.querySelector(".container")



 const JournalEntryComponent = (entry) => {
    return `
    
        <section id="entry--${entry.id}" class="journalEntry">
            <div class="concept__text"> Concept Covered:  ${entry.concept}</div>
            <div class="entry__text" > Entry: ${entry.entry}</div>
            <div class="entry__date"> Date: ${entry.date}</div>
            <br>
            

            
        </section> 

    `

}

export default JournalEntryComponent



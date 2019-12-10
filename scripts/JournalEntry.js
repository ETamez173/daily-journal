/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */

 const JournalEntryComponent = (entry) => {
    return `
    
        <section id="entry--${entry.id}" class="journalEntry">
            <div class="concept__text"> Concept Covered:  ${entry.concept}</div>
            <div> Entry: ${entry.entry}</div>
            <div> Date: ${entry.date}</div>
            <br>
            

            
        </section> 

    `
    // <div> Mood: ${entry.mood}</div>
    // Display the entry's full text, and the date
            //             it was entered here.

}
// console.log(JournalEntryComponent())
export default JournalEntryComponent



 //<section id="entry--${entry.id}" class="journalEntry">
        // <section id="entry--${entry.id}" class="journalEntry">
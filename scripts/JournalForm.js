//  create a JournalForm component whose responsiblity is to render the form
import { saveJournalEntry } from "./JournalDataProvider.js"


const eventHub = document.querySelector("#appContainer")
// const contentTarget = document.querySelector(".container")
const contentTarget = document.querySelector(".JournalFormContainer")
// In your JournalForm component modules, define a factory function, named createEntryObject()
// whose responsibility is to generate an object that represents a journal entry. 
// It should define a parameter for each property on a journal entry and then return a new object
// that has all the properties defined.

// const createEntryObject = (date, concept, entry, mood) => {

const JournalFormComponent = () => {

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveJournal") {

            // console.log(clickEvent.target.id)
            // Make a new object representation of a journal

            // Invoke factory function

                const createEntryObject = {

                date: document.querySelector("#journalDate").value,
                concept: document.querySelector("#concepts").value,
                entry: document.querySelector("#journalText").value,
                mood: document.querySelector("#moodSelect").value

            }

            // Send new entry object to
            saveJournalEntry(createEntryObject)
                // Dispatch new custom event that state has changed
                // Change API state and application state
               
        }
    })

    // Show Journals will go HERE >>>>>
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "showJournals") {
            const message = new CustomEvent("showJournalButtonClicked")
            eventHub.dispatchEvent(message)

        }

    })

/*Add hidden input field to the entry form to store id value of edited entry*/

    const render = () => {
        contentTarget.innerHTML = `

            <h1></h1>
            <section class="form__fields">
            <div class="dj">

                <input type="hidden" name="entryId" id="entryId">
                
                <fieldset class="fs">
                    <label for="journalDate">Date of Entry</label>
                    <input type="date" name="journalDate" id="journalDate">
                </fieldset>
                
                <fieldset class="fs">
                    <label for="concepts">Concepts Covered</label>
                    <input type="text" id="concepts" name="concepts" required minlength="25" maxlength="100" size="30">
                </fieldset>

            
                <fieldset class="fs">
                    <label for="journalEntry">Journal Entry</label>
                    <textarea id="journalText" rows="5" cols="30"></textarea>
                </fieldset>

                <fieldset class="fs">
                    <label for="mood">How did you feel about the topic?</label>
                    
                    <select class="dropdown" id="moodSelect">
                        <option value="">Pick a Mood!</option>
                        <option value="Great">Great!</option>
                        <option value="Good">Good</option>
                        <option value="Sad">Sad</option>
                        <option value="???">???</option>
                    </select>
                </fieldset>
            <div class="journalButton__area"> 
            <button id="saveJournal" type="button">Record Journal Entry</button>
            <button id="showJournals" type="button">Show  Journals Entry</button>
            </div>
            <br>
            <br>

            </div>
            </section>

`
    }

    render()
}

export default JournalFormComponent

// Once the save operation is complete dispatch
//  a new event to the Event Hub that the state of the entries data provider has changed.


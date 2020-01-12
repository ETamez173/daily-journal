//  create a JournalForm component whose responsiblity is to render the form
import { saveJournalEntry, useJournals, editJournal } from "./JournalDataProvider.js"
const eventHub = document.querySelector("#appContainer")
// const contentTarget = document.querySelector(".container")
const contentTarget = document.querySelector(".JournalFormContainer")
// In your JournalForm component modules, define a factory function, named createEntryObject()
// whose responsibility is to generate an object that represents a journal entry. 
// It should define a parameter for each property on a journal entry and then return a new object
// that has all the properties defined.

// const createEntryObject = (date, concept, entry, mood) => {

const JournalFormComponent = () => {

    eventHub.addEventListener("editButtonClicked", clickEvent => {
        const journalToBeEdited = event.detail.entryId
//// I was STUCK and it would not EDIT,  I found that I had the wrong ID entryID was the detail not noteId
        const allJournalsArray = useJournals()

        const theFoundJournal = allJournalsArray.find(
            (currentJournalObject) => {
                // return currentNoteObject.id === parseInt(noteToBeEdited, 10)
                return currentJournalObject.id === parseInt(journalToBeEdited, 10)
            }


        )

        document.querySelector("#entryId").value = theFoundJournal.id
        document.querySelector("#journalText").value = theFoundJournal.entry
        document.querySelector("#concepts").value = theFoundJournal.concept

        // id="concepts"
        // id="entryId"
        // id="journalText"

    })


    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveJournal") {

            // console.log(clickEvent.target.id)
            // Make a new object representation of a journal
            const hiddenInputValue = document.querySelector("#entryId").value
            // Invoke factory function

            // If so, edit the note with a PUT operation
            console.log(hiddenInputValue)

            if (hiddenInputValue !== "") {
                const editedJournal = {


                    date: new Date(Date.now()).toLocaleString("us-en"),
                    concept: document.querySelector("#concepts").value,
                    entry: document.querySelector("#journalText").value,
                    mood: document.querySelector("#moodSelect").value,
                    id: parseInt(document.querySelector("#entryId").value, 10)


                }
                editJournal(editedJournal).then(() => {

                    eventHub.dispatchEvent(new CustomEvent("journalHasBeenEdited"))

                })

            } else {



                const createEntryObject = {

                    date: document.querySelector("#journalDate").value,
                    concept: document.querySelector("#concepts").value,
                    entry: document.querySelector("#journalText").value,
                    mood: document.querySelector("#moodSelect").value

                }

                // Send new entry object to
                saveJournalEntry(createEntryObject).then(
                    () => {
                        const message = new CustomEvent("journalCreated")
                        eventHub.dispatchEvent(message)
                    }

                )
            }

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
                    <section class="journalDate__align">
                      <div class="date__input">
                        <label for="journalDate">Date of Entry</label>
                        <input type="date" name="journalDate" id="journalDate">
                      </div>
                    </section>
                </fieldset>
                
                <fieldset class="fs">
                    <div class="concepts__input">
                        <label for="concepts">Concepts Covered</label>
                        <input type="text" id="concepts" name="concepts" required minlength="15" maxlength="150" size="16">
                    </div>
                </fieldset>

            
                <fieldset class="fs">
                    <div class="journal__input">
                        <label for="journalEntry">Journal Entry</label>
                        <textarea id="journalText" rows="7" cols="20"></textarea>
                    </div>
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

                <section class="journalButton__align">
                    <div class="journalButton__area"> 
                        <button id="saveJournal" type="button">Record Journal Entry</button>
                        <button id="showJournals" type="button">Show  Journal Entries</button>
                    </div>
                </section>
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


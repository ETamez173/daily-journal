import EntryListComponent from "./JournalEntryList.js"

import { useJournals, getJournals } from "./JournalDataProvider.js"
import JournalEntryComponent from "./JournalEntry.js"
import JournalFormComponent from "./JournalForm.js"
import MoodFilter from "./MoodFilter.js"

import FilterBar from "./FilterBar.js"

EntryListComponent()
useJournals()
getJournals()
// JournalEntryComponent()
JournalFormComponent()
// saveJournalEntry()


MoodFilter().then
FilterBar()

// FilterBar().then
// MoodFilter()

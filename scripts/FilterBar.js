import MoodFilter from "./MoodFilter.js"
const eventHub = document.querySelector("#appContainer")

/*
Make a new HTML element with class of "filters" in index.html
*/

const contentTarget = document.querySelector(".filter__radioButtons")

const FilterBar = () => {


// had to add the const because it kept saying remder not defined
   const render = () => {
        contentTarget.innerHTML = `
             ${MoodFilter()}

`
// return FilterBar
    }
    render()

}

export default FilterBar
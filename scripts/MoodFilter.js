const MoodFilter = () => {
    
    
    return `
        




        <div class="radio__buttonAlign">
        <form>

      <section class="fieldset_align">
        <fieldset class="fieldset">

        <legend></legend>

        <label for="journalDate" class="radio__buttonContainer">Filter Journal Entries by Mood:</label>
   <br>
        
        <form class="form_align">

                <div name="mood" id="mood" class="radio__buttonAlign">
                
                
             
<div class="radioButton__label">
                    <input type="radio" id="moodChoice1"
                    name="moodFilter" value="Good">
                    <label  class="mood__text" for="contactChoice1">Good!</label>
</div>                
<div class="radioButton__label">
                    <input type="radio" id="moodChoice2"
                        name="moodFilter" value="Great">
                    <label  class="mood__text" for="moodChoice2">Great!</label>
</div> 
<div class="radioButton__label">
                    <input type="radio" id="moodChoice3"
                    name="moodFilter" value="Sad">
                    <label  class="mood__text" for="moodChoice3">Sad</label>
</div> 
<div class="radioButton__label">
                    <input type="radio" id="moodChoice4"
                    name="moodFilter" value="???">
                    <label class="mood__text" for="moodChoice4">???</label>
</div> 

                
                </div>
                <div class="submit__buttonAlign">
                    <button class="submitMood" type="submit">Submit</button>
                </div>
        
        </form>


        </fieldset>
       <section>

     
      




        `
}

export default MoodFilter

///Using <fieldset>, <legend>, <input type="radio">, and <label>
// HTML components, construct a set of radio buttons for selecting 
//one of the moods. It's important that each of the radio buttons has 
//the same value for the name attribute, but each should a different value for the value attribute.



// <fieldset class="fieldset">
//             <label for="journalDate">Mood for the day</label>
//             <select name="mood" id="mood">
//                 <option value="sad">Sad</option>
//                 <option value="ok">Ok</option>
//                 <option value="happy">Happy</option>
//                 <option value="???">Happy</option>
//             </select>
//         </fieldset>



{/* <select name="mood" id="mood"> */}
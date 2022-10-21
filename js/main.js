
/* toggle Note form box */ 
const noteForm = document.getElementById('note-form');

const openForm = function (){
    noteForm.classList.remove('d-none');
}

const closeForm = function(){
    noteForm.classList.add('d-none');
}


/* Add new note */ 
let noteFormTitle = document.getElementById('note-form-title');
let noteFormDesc = document.getElementById('note-form-desc');
// const noteFormBtn = document.getElementById('note-form-btn');

const addBtn = function(){ 
    // let title = noteFormTitle.value;
    // let desc = noteFormDesc.value;
    // var noteInfo = {
    //     title: title,
    //     desc: desc
    // };
    // console.log(noteInfo);
    console.log(noteFormTitle.value, noteFormDesc.value);

}




/* Display notes card */ 
const noteTitle = document.getElementById('note-form');
const noteDesc = document.getElementById('note-form');
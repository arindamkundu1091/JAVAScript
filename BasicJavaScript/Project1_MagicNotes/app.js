showNotes();
// if user add some notes...add it to the localStorage...
//? To delete all notes from Local Storage and Refresh the Page using Delete All Notes button...
let delAllNotes = document.getElementById('delAllNotes');
delAllNotes.addEventListener('click', () => {
    let check = confirm("Are you sure, You want to delete all notes ?");
    if(check == true) {
        localStorage.clear();
        let notes = localStorage.getItem('notes');
        if(notes == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes);
        }
        localStorage.setItem('notes', JSON.stringify(notesObj));
        showNotes();
    } else {
        let notes = localStorage.getItem('notes');
        if(notes == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes);
        }
        localStorage.setItem('notes', JSON.stringify(notesObj));
        showNotes();
    }
});

//? Function to add notes from Local Storage using Add Notes button...
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function(e) {

    let addText = document.getElementById('addText');
    let addTitle = document.getElementById('addTitle');
    let notes = localStorage.getItem('notes');
    if(notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title: addTitle.value,
        text: addText.value
    };
    notesObj.push(myObj);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addText.value = "";
    addTitle.value = "";
    showNotes();
});

//? Function to show Elements from Local Storage...
function showNotes() {
    let notes = localStorage.getItem('notes');
    if(notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {
        html += `
            <div class="card noteCard my-2 mx-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title" id="noteTitle">${element.title}</h5>
                    <p class="card-text">${element.text}</p>
                    <a id = "${index}" onclick = "deleteNote(this.id)" class="btn btn-outline-danger my-2" roll="button">Delete Note</a>
                </div>
            </div> 
        `;
    });
    let notesElem = document.getElementById('notes');
    if(notesObj.length != 0){
        notesElem.innerHTML = html;
    } else {
        notesElem.innerHTML = `<p style="color: red;"> Nothing to show! Use <b>"Add Note"</b> section above to add notes.</p>`;
    }
}

//? Function to delete note using Delete Note button...
function deleteNote(index) {
    let notes = localStorage.getItem('notes');
    if(notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}

//? Function to search notes...
let searchText = document.getElementById('searchText');
let searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', function() {
    let inputVal = searchText.value.toLowerCase();
    let noteCard = document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach(function(element) {
        let cardText = element.getElementsByTagName('p')[0].innerText.toLowerCase();
        if(cardText.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })
    searchText.value = "";
});



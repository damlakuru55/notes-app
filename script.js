const noteInput = document.getElementById("noteInput");
const addButton = document.getElementById("addButton");
const notes = document.getElementById("notes");

let noteList = JSON.parse(localStorage.getItem("notes")) || [];

function showNotes() {
    notes.innerHTML = "";

    noteList.forEach((note, index) => {
        const noteDiv = document.createElement("div");
        noteDiv.className = "note";

        noteDiv.innerHTML = `
            <span>${note}</span>
            <button class="deleteButton" onclick="deleteNote(${index})">
                Sil
            </button>
        `;

        notes.appendChild(noteDiv);
    });
}

function addNote() {
    const note = noteInput.value.trim();

    if (note === "") {
        return;
    }

    noteList.push(note);

    localStorage.setItem("notes", JSON.stringify(noteList));

    noteInput.value = "";

    showNotes();
}

function deleteNote(index) {
    noteList.splice(index, 1);

    localStorage.setItem("notes", JSON.stringify(noteList));

    showNotes();
}

addButton.addEventListener("click", addNote);

noteInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addNote();
    }
});

showNotes();
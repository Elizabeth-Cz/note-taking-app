const notes = [];

const filters = {
  searchText: "",
};

// add note to notes array

const titleInput = document.querySelector("#input-title");
const bodyInput = document.querySelector("#input-body");
// render last note of array

const createNote = function (note) {
  note = notes[notes.length - 1];
  const newNoteDiv = document.createElement("div");
  newNoteDiv.setAttribute("class", "note");
  const noteTextDiv = document.createElement("div");
  noteTextDiv.setAttribute("class", "note-text");
  const noteTitleEl = document.createElement("h2");
  const noteBodyEl = document.createElement("p");
  noteTitleEl.textContent = note.title;
  noteBodyEl.textContent = note.body;
  noteTextDiv.append(noteTitleEl, noteBodyEl);
  const deleteIcon = document.createElement("i");
  deleteIcon.setAttribute("class", "fa-solid fa-trash");
  newNoteDiv.append(noteTextDiv, deleteIcon);
  document.querySelector("#notes").appendChild(newNoteDiv);
};

// reset function
const reset = function () {
  titleInput.value = "";
  bodyInput.value = "";
};

// inner search, re-renderes with every input
const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter((note) => {
    return (
      note.title.toLowerCase().includes(filters.searchText.toLowerCase()) +
      note.body.toLowerCase().includes(filters.searchText.toLowerCase())
    );
  });
  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach((note) => {
    note = notes[notes.length - 1];
    createNote();
  });
};

// renderNotes(notes, filters);
document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

const addBtn = document.querySelector("#add-note");
addBtn.addEventListener("click", function () {
  if (titleInput.value || bodyInput.value) {
    notes.push({
      title: titleInput.value,
      body: bodyInput.value,
    });
    createNote();
    reset();
  }
});

const editToggle = document.querySelector(".fa-pencil");

editToggle.addEventListener("click", function () {
  document.querySelectorAll(".fa-trash").forEach((icon) => {
    icon.classList.toggle("fa-toggled");
  });
});

const delBtn = document.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-trash")) {
    setTimeout(function () {
      e.target.parentElement.remove();
    }, 200);
  }
});

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
  deleteIcon.setAttribute("id", "del-btn");
  newNoteDiv.append(noteTextDiv, deleteIcon);
  document.querySelector("#notes").appendChild(newNoteDiv);
};

// const lastNote = function (note) {
//   note = notes[notes.length - 1];
//   const newNoteDiv = document.createElement("div");
//   newNoteDiv.setAttribute("class", "note");
//   const noteTitleEl = document.createElement("h2");
//   noteTitleEl.textContent = note.title;
//   const noteBodyEl = document.createElement("p");
//   noteBodyEl.textContent = note.body;
// document.querySelector("#notes").appendChild(newNoteDiv);
//   newNoteDiv.appendChild(noteTitleEl).appendChild(noteBodyEl);
// };

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

//delete button
// const getDelInd = function () {
//   console.log(notes.indexOf(deleteIcon));
// };
const editBtn = document.querySelector(".fa-pencil");

editBtn.addEventListener("click", function (e) {
  // console.log(e.target);
  document.querySelector("#del-btn").style.fontSize = "16px";
});

const DelBtn = document.addEventListener("click", function (e) {
  if (e.target.id === "del-btn") {
    setTimeout(function () {
      e.target.parentElement.remove();
    }, 200);
  }
});

const notes = [
  {
    title: "Title",
    body: "Body",
  },
];

const filters = {
  searchText: "",
};

// add note to notes array

const titleInput = document.querySelector("#input-title");
const bodyInput = document.querySelector("#input-body");

// render last note of array

const lastNote = function (note) {
  note = notes[notes.length - 1];
  const newNoteDiv = document.createElement("div");
  newNoteDiv.setAttribute("class", "note");
  const noteTitleEl = document.createElement("h2");
  noteTitleEl.textContent = note.title;
  const noteBodyEl = document.createElement("p");
  noteBodyEl.textContent = note.body;
  const deleteIcon = document.createElement("i");
  deleteIcon.setAttribute("class", "fa-solid fa-trash");
  deleteIcon.setAttribute("id", "del-btn");
  document.querySelector("#notes").appendChild(newNoteDiv);
  newNoteDiv.appendChild(noteTitleEl).appendChild(noteBodyEl);
  newNoteDiv.appendChild(deleteIcon);
};
// reset function
const reset = function () {
  titleInput.value = "";
  bodyInput.value = "";
};

// delete from array function
//get index

//delete function
// deleteIcon.addEventListener("click", () => {
//   const deleteFromArray = function () {};
//   deleteIcon.parentNode.remove();
// });

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
    lastNote();
    // const newNoteDiv = document.createElement("div");
    // newNoteDiv.setAttribute("class", "note");
    // const noteTitleEl = document.createElement("h2");
    // noteTitleEl.textContent = note.title;
    // const noteBodyEl = document.createElement("p");
    // noteBodyEl.textContent = note.body;
    // document.querySelector("#notes").appendChild(newNoteDiv);
    // newNoteDiv.appendChild(noteTitleEl).appendChild(noteBodyEl);
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
    lastNote();
    reset();
  }
});

//delete button

const DelBtn = document.addEventListener("click", function (e) {
  if (e.target.id === "del-btn") {
    setTimeout(function () {
      e.target.parentElement.remove();
    }, 200);
  }
});

// deleteIcon.addEventListener("click", function () {
//   console.log(e.target);
// });

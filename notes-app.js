const notes = [];

const filters = {
  searchText: "",
};

// add note to notes array

const editToggle = document.querySelector(".fa-pencil");
const swatchContainer = document.querySelector(".container-swatches");
const titleInput = document.querySelector("#input-title");
const bodyInput = document.querySelector("#input-body");
// const searchBtn = document.querySelector(".fa-magnifying-glass");

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
  //reset icon toggle
  if (titleInput.value || bodyInput.value) {
    document.querySelectorAll(".fa-toggled").forEach((icon) => {
      icon.classList.remove("fa-toggled");
    });
  }
  //reset swatches container
  swatchContainer.classList.remove("container-swatches-on");
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

editToggle.addEventListener("click", function () {
  swatchContainer.classList.toggle("radio-toolbar-on");
  document.querySelectorAll(".fa-trash").forEach((icon) => {
    icon.classList.toggle("fa-toggled");
  });
});

const delBtn = document.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-trash")) {
    setTimeout(function () {
      e.target.parentElement.remove();
    }, 200);
    console.log(notes);
  }
});

window.onload = searchVisible;
document.getElementById("search-icon").addEventListener("click", searchVisible);
function searchVisible() {
  searchInput = document.querySelector("#search-text");
  if (searchInput.style.display == "none") {
    searchInput.style.display = "inline";
  } else if ((searchInput.style.display = "inline")) {
    searchInput.style.display = "none";
  }
}
const container = document.querySelector(".container");
const swatchList = document.querySelectorAll(".swatch");

swatchList.forEach((swatch) => {
  swatch.addEventListener("click", (e) => {
    container.setAttribute("id", swatch.id);
  });
});

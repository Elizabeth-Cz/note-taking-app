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
  swatchContainer.classList.toggle("container-swatches-on");
  document.querySelectorAll(".fa-trash").forEach((icon) => {
    icon.classList.toggle("fa-toggled");
  });
});

//only removes index 0 of array

const delBtn = document.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-trash")) {
    setTimeout(function () {
      e.target.parentElement.remove();
    }, 200);
    console.log(notes);
  }
});

// function searchVisible() {
//   if (searchInput.style.display === "none") {
//     searchInput.style.display = "block";
//   }
//    else if (searchInput.style.display === "block") {
//     searchInput.style.display = "none";
//   }
// }
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

// document.getElementById("search-icon").addEventListener("click", function (e) {
//   const searchInput = document.querySelector("#search-text");

// if (searchInput.style.display == "none") {
//   searchInput.style.display = "block";
// } else if ((searchInput.style.display = "block")) {
//   searchInput.style.display = "none";
// }
//   // console.log(searchInput);
//   console.log(e);
// });
// HAVING FUN
// const redToggle = document.getElementsByClassName("red");
// const tealToggle = document.getElementsByClassName("teal");
// const purpleToggle = document.getElementsByClassName("purple");
// const yellowToggle = document.getElementsByClassName("yellow");
// const greenToggle = document.getElementsByClassName("green");

// const swatches = document.querySelectorAll(".swatch");
// swatches.forEach((swatch) => {
//   console.log(swatch);
// });

const container = document.querySelector(".container");
const changeColor = document.addEventListener("click", function (e) {
  if (e.target.classList.contains("swatch")) {
    container.classList.toggle(e.target.classList[1]);
    console.log(e);
  }
  console.log(container.classList);
});
// console.log(e.target.classList[1]);
// console.log(container);
// const swatchColor = e.target.classList[1];
// container.setAttribute("class", swatchColor);
// const getNotes = document.querySelectorAll(".note");
// getNotes.forEach((note) => {
//   reset classes to .note
//   add new note in theme color
//   note.setAttribute("class", "note");
//   note.classList.toggle(swatchColor);
//   console.log(note.classList);
// });
// console.log();

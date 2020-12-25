const noteData = require("../../../db/db.json");
const fs = require("fs");
const path = require("path");

module.exports = function deleteSelectedNote(id) {
  //find the index of the note we're deleting
  index = noteData.findIndex((note) => note.id === id);
  //remove the note, stringify it, then update the json file
  noteData.splice(index, 1);
  stringifieNoteData = JSON.stringify(noteData);

  fs.writeFile(
    path.join(__dirname, "../../../db/db.json"),
    stringifieNoteData,
    "utf8",
    (err) =>
      err
        ? console.log(err)
        : console.log("You have successfully updated the JSON file!")
  );
};

//checks to see if the module was imported or called
//true if called, false if imported
//don't run this function if the module is just imported, only run it
//when i run it with node directly...aka do a 'node apiRoutes.js' in terminal
if (require.main === module) {
  //directly insert the id of an object here if testing
  deleteSelectedNote("0.39820110449263924");
}

// module.exports.deleteSelectedNote = deleteSelectedNote;

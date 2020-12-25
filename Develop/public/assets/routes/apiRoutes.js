// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold a notes array
// ===============================================================================

const noteData = require("../../../db/db.json");
const fs = require("fs");
const { cwd } = require("process");
const path = require("path");
const { Z_FILTERED } = require("zlib");
// const { tryStuff } = require("../../operations/delete");
const deleteSelectedNote = require("../operations/delete");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // localhost:PORT/api/notes... they are shown a JSON of the data in the table
  // ---------------------------------------------------------------------------
  app.get("/api/notes", function (req, res) {
    res.json(noteData);
  });

  // API POST Requests
  // Below code handles when a user creates a note
  // ---------------------------------------------------------------------------
  app.post("/api/notes", function (req, res) {
    // add the note from the post request
    // req.body is available since we're using the body parsing middleware
    noteData.push(req.body);
    stringifiedStuff = JSON.stringify(noteData);
    res.json(true);
    console.log(res);
    fs.writeFile(
      path.join(__dirname, "../../../db/db.json"),
      stringifiedStuff,
      "utf8",
      (err) =>
        err
          ? console.log(err)
          : console.log("You have successfully updated the JSON file!")
    );
  });

  // ---------------------------------------------------------------------------
  // ability to delete notes goes here
  app.delete("/api/notes/:id", (req, res) => {
    // add the note from the post request
    // req.body is available since we're using the body parsing middleware
    res.json({ success: true });

    deleteSelectedNote(req.params.id);
  });
  // -------------------------------------
};

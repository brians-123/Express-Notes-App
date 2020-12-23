// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold a notes array
// ===============================================================================

var noteData = require("../../../db/db.json");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a different page)
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
    res.json(true);
  });

  // ---------------------------------------------------------------------------
  // ability to delete notes goes here

  // -------------------------------------
};

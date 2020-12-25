// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // HTML GET Requests
  // Below code handles when users visit a page to point to /notes or index
  // for all other routes
  // ---------------------------------------------------------------------------

  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../../notes.html"));
  });

  // If no matching route is found default to index
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../../index.html"));
  });
};

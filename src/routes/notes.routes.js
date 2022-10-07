const { Router } = require("express");
const NoteController = require("../controllers/NotesController");

const notesRoutes = Router();
const noteController = new NoteController();

notesRoutes.post("/:user_id", noteController.create);
notesRoutes.get("/:id",noteController.show);
notesRoutes.delete("/:id",noteController.delete);
notesRoutes.get("/",noteController.index);

module.exports = notesRoutes;
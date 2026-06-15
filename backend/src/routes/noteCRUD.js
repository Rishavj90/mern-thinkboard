import express from "express"
import {getNotes, getNoteById, newNote, updateNote, delNote} from "../controllers/noteFun.js"
export const router = express.Router()

router.get('/', getNotes)
router.get('/:id', getNoteById)
router.post('/', newNote)
router.put('/:id', updateNote)
router.delete('/:id', delNote)

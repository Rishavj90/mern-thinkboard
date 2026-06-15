import { note } from "../models/note.js"

export async function getNotes(req, res) {
    const notes = await note.find()
    return res.status(200).json(notes)    
}

export async function getNoteById(req, res) {
    const TheNote = await note.findById(req.params.id)
    return res.status(200).json(TheNote)    
}

export async function newNote(req, res) {
    const new_note = await note.create({
        "title" : req.body.title,
        "body" : req.body.body
    })
    return res.status(200).json({note : new_note})
}

export async function updateNote(req, res) {
    const new_note = await note.findByIdAndUpdate(req.params.id, {
        "title" : req.body.title,
        "body" : req.body.body
    })
    return res.status(200).json({
        msg : "note Updated",    
        note : new_note
    })
}

export async function delNote(req, res) {
    const deleted =  await note.findByIdAndDelete(req.params.id)
    return res.status(200).json({
        msg : "note deleted",    
        note : deleted
    }) 
}

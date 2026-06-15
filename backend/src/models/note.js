import mongodb from "mongoose"

const mySchema = new mongodb.Schema({
    "title" : {type: String, required:true},
    "body" : {type: String, required:true}
}, {timestamps: true})

export const note = mongodb.model("note", mySchema)
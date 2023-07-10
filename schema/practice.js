import { Schema, SchemaTypes, model } from "mongoose";


const api = new Schema({
    name: {
        type: SchemaTypes.String,
        required: true
    },
    img:{
        type: SchemaTypes.String,
    }
})
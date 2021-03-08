import mongoose from "mongoose";

const { Schema, model } = mongoose;

const AdminSchema = new Schema({

    name: String,
    email: String,
});

export default model('Admin', AdminSchema);
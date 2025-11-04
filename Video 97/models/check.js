import mongoose from "mongoose";

const checkSchema = new mongoose.Schema({
    name: { type: String, required: true },
    salary: { type: Number, required: true },
    language: { type: String, required: true },
    city: { type: String, required: true },
    isManager: { type: Boolean, required: true, default: false }
});

const check = mongoose.model("ex16", checkSchema);
export default check;
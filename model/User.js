import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, require: true },
    phone: { type: String },
})

const User = mongoose.model("User", userSchema);

export default User;
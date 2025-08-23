import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, require: true },
    price: { type: String, require: true },
})

const Menu = mongoose.model("Menu", menuSchema);

export default Menu;
import User from "../model/User.js";

const userService = {
    getAllUsers: async () => await User.find(),
    getUserById: async (id) => await User.findById(id),
    createUser: async (name, age, phone) => await User.create({ name, age, phone }),
    updateUserById: async (id, data) => await User.findByIdAndUpdate(id, data),
    deleteUserById: async (id) => await User.findByIdAndDelete(id),
}

export default userService;
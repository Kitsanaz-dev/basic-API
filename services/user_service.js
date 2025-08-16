import User from "../model/User.js";

const userService = {

    getAllUsers: async () => {
        const users = await User.find();
        return users;
    },
    getUserById: async (id) => {
        const user = await User.findById(id);
        return user;
    },
    createUser: async (name, age, phone) => {
        const user = new User({
            name,
            age,
            phone
        });
        return await user.save();
    },
}

export default userService;
import userService from "../services/user_service.js";

const userController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await userService.getAllUsers();
            res.status(200).json(users);
        } catch (err) {
            console.error("Error fetching users", err);
            res.status(404).json({ message: "Error fetching users" });
        }
    },
    getUserById: async (req, res) => {
        try {
            const userId = req.params.id;
            const user = await userService.getUserById(userId);
            if (!user) return res.status(404).json({ message: "User not found" });
            res.status(200).json(user);
        } catch (err) {
            console.error("Error fetching user by ID", err);
            res.status(404).json({ message: "Error fetching user by ID" });
        }
    },
    createUser: async (req, res) => {
        try {
            const { name, age, phone } = req.body;
            const newUser = await userService.createUser(name, age, phone);
            res.status(201).json(newUser);
        } catch (err) {
            console.error("Error creating user:", err);
            res.status(500).json({ message: "Internal server error" });
        }
    },
    updateUserById: async (req, res) => {
        try {
            const userId = req.params.id;
            const { name, age, phone } = req.body;
            const updatedUser = await userService.updateUserById(userId, { name, age, phone });
            if (!updatedUser) return res.status(404).json({ message: "User not found" });
            res.status(200).json(updatedUser);
        } catch (err) {
            console.error("Error updating user by ID", err);
            res.status(500).json({ message: "Internal server error" });
        }
    },
    deleteUserById: async (req , res) => {
        try {
            const userId = req.params.id;
            const user = await userService.deleteUserById(userId);
            if (!user) return res.status(404).json({ message: "User not found" });
            res.status(204).json({ message: "User deleted successfully" });
        } catch (err) {
            console.error("Error deleting user by ID", err);
            res.status(500).json({ message: "Internal server error" });
        }
    },
}

export default userController;
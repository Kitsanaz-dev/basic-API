import userController from "../controller/user_controller.js";
const userRouter = (router) => {
    router.get("/users", userController.getAllUsers);
    router.get("/users/:id", userController.getUserById);
    router.post("/users", userController.createUser);
    router.put("/users/:id", userController.updateUserById);
    router.delete("/users/:id", userController.deleteUserById);
}

export default userRouter;
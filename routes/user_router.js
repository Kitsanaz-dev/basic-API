import userController from "../controller/user_controller.js";
const userRouter = (router) => {
    router.get("/users", userController.getAllUsers);
    router.get("/users/:id", userController.getUserById);
    router.post("/users", userController.createUser);
}

export default userRouter;
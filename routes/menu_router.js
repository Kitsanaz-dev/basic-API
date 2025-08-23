import menuController from "../controller/menu_controller.js";

const menuRouter = (router) => {
    router.get("/menus", menuController.getAllMenus);
    router.get("/menus/:id", menuController.getMenuById);
    router.post("/menus", menuController.createMenu);
    router.put("/menus/:id", menuController.updateMenuById);
    router.delete("/menus/:id", menuController.deleteMenuById); 
}

export default menuRouter;
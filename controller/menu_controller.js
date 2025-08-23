import menuService from "../services/menu_service.js";

const menuController = {
    getAllMenus: async (req, res) => {
        try {
            const menus = await menuService.getAllMenus();
            res.json(menus);
        } catch (err) {
            console.error("Error fetching menus", err);
            res.status(404).json({ message: "Error fetching menus" });
        }
    },
    getMenuById: async (req, res) => {
        try {
            const menu = await menuService.getMenusById(req.params.id);
            res.json(menu);
        } catch (error) {
            console.error("Error fetching menu by ID", error);
            res.status(404).json({ message: "Error fetching menu by ID" });
        }
    },
    createMenu: async (req, res) => {
        try {
            const menu = await menuService.createMenu(req.body.name, req.body.type, req.body.price);
            res.json(menu);
        } catch (error) {
            console.error("Error creating menu", error);
            res.status(500).json({ message: "Error creating menu" });
        }
    },
    updateMenuById: async (req, res) => {
        try {
            const menu = await menuService.updateMenuById(req.params.id, req.body);
            res.json(menu);
        } catch (error) {
            console.error("Error updating menu by ID", error);
            res.status(500).json({ message: "Error updating menu by ID" });

        }
    },
    deleteMenuById: async (req, res) => {
        try {
            const menu = await menuService.deleteMenuById(req.params.id);
            res.json(menu);
        } catch (error) {
            console.error("Error deleting menu by ID", error);
            res.status(500).json({ message: "Error deleting menu by ID" });
        }
    }
}

export default menuController;
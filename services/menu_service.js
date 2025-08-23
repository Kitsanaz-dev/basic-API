import Menu from "../model/Menu.js";

const menuService = {
    getAllMenus: async () => await Menu.find(),
    getMenusById: async (id) => await Menu.findById(id),
    createMenu: async (name, type, price) => await Menu.create({ name, type, price }),
    updateMenuById: async (id, data) => await Menu.findByIdAndUpdate(id, data),
    deleteMenuById: async (id) => await Menu.findByIdAndDelete(id),
}

export default menuService;
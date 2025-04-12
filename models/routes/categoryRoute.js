const express = require("express");


const {
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const {authentication} = require("../middleware/authentication");

const router = express.Router();
router.post("/category", authentication, createCategory);
router.get("/category", authentication, getCategory);
router.put("/category/:categoryId", authentication, updateCategory);
router.delete("/category/:categoryId", authentication, deleteCategory);

module.exports = {
  categoryRoutes: router,
};
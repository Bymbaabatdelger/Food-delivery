import express from "express"
import {createCategory, deleteCategoryById, getAllCategories, getCategoryById, updateCategoryById}  from "../controller/category"

const category =express.Router() 

category.route("/").post(createCategory).get(getAllCategories).put(updateCategoryById).delete(deleteCategoryById);
category.route("/get").get(getCategoryById)

export {category}
const express = require("express");
const { CategoriesController}= require("../../../controller")
const router = express.Router();

router.get("/list_categories", CategoriesController.listCategories);

module.exports = router;
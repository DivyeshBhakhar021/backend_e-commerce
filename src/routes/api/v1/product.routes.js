const express = require("express");
const { ProductController } = require("../../../controller");
const router = express.Router();

router.get("/list_product", ProductController.listproduct);

router.get("/getprodct", ProductController.getproductlist);

router.post("/filterdata",ProductController.filterdatalist)

module.exports = router;

const  express = require("express");
const router = express.Router();

const categories = require("./categories.routes");
const product = require("./product.routes")


router.use("/categories",categories);
router.use("/product",product);

module.exports = router;
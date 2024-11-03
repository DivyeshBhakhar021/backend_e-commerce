const productmodal = require("../modal/product.modal");

const listproduct = async (req, res) => {
  try {
    const product = await productmodal.getproduct();

    console.log(product, "categories");

    res.status(200).json({
      success: true,
      message: "get categories",
      data: product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error " + error.message,
    });
  }
};

module.exports = { listproduct };

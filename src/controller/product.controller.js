const productmodal = require("../modal/product.modal");

const listproduct = async (req, res) => {
  try {
    const product = await productmodal.getproduct();

    console.log(product, "product");

    res.status(200).json({
      success: true,
      message: "get product ",
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


const  getproductlist = async (req, res) => {
  try {
    console.log("Fwefnewhkfbe", req.query.page);

      const page = parseInt(req.query.page) || 1; 
      const pageSize = parseInt(req.query.pageSize) || 10; 

     const product = await productmodal.getproductpagention(page, pageSize);

     console.log(product, "product");

     res.status(200).json({
       success: true,
       message: "get product",
       data: product,
     });
  } catch (error) {
    console.log(error);
    
  }
}


module.exports = { listproduct, getproductlist };

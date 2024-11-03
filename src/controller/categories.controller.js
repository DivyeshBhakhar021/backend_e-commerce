const Categorymodal = require("../modal/categories.modal");

const listCategories = async(req,res) =>{
    try {
        const categories = await Categorymodal.getcategories();

        console.log(categories, "categories");

        res.status(200).json({
          success: true,
          message: "get categories",
          data:categories
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
          success: false,
          message: "Internal server error " + error.message,
        });
    }
}

module.exports = {listCategories}
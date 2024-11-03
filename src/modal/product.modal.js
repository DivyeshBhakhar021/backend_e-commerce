const pool = require("../db/Mysql");

const getproduct = async (req, res) => {
  try {
    const [result, field] = await pool.execute("SELECT * FROM product");

    console.log(result);

    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getproduct,
};

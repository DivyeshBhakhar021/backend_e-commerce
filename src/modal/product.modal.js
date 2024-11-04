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

const getproductpagention = async (page, pageSize) => {
  try {
    console.log("a", page, pageSize);

    const offset = (page - 1) * pageSize;

    const [result, field] = await pool.execute("SELECT * FROM product LIMIT ? OFFSET ?",[pageSize,offset]);

    console.log(result);

     const [totalResult] = await pool.execute("SELECT COUNT(*) AS total FROM product");
    const total = totalResult[0].total;

   return [
     result,
     {
       totalItems: total,
       totalPages: Math.ceil(total / pageSize),
       currentPage: page,
       pageSize: pageSize,
     },
   ];
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getproduct,
  getproductpagention,
};
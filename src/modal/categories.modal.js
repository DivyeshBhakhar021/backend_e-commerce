const pool = require("../db/Mysql");

const getcategories = async (req,res)=>{
    try {
        const [result, field] = await pool.execute("SELECT * FROM category");

        console.log(result);
        

        return result;
    } catch (error) {
        console.log(error);
        
    }
}

module.exports={
    getcategories
}

import dbConnect from '../db/dbConnect.js';

const getAllProducts=(req,res)=>{
   
        const sql = "SELECT * FROM products";
        // Execute the SQL query to retrieve all products
        dbConnect.query(sql, (err, results) => {
            if (err) {
                return res.status(500).json({ error: "Error retrieving products from database" });
            }
            // If successful, return the list of products
            return res.status(200).json(results);
        });
};

const createProduct = (req, res) => {
    const { name, description, price } = req.body;
    const image_url = req.file.path; // Get file path from Multer

    const sql = "INSERT INTO products (name, description, price, image_url) VALUES (?, ?, ?, ?)";
    const values = [name, description, price, image_path];

    // Execute the SQL query to insert the new product
    dbConnect.query(sql, values, (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Error inserting product into database" });
        }
        // If successful, return the ID of the newly inserted product
        res.status(201).json({ message: `Product created with ID ${result.insertId}` });
    });
};

export {
    getAllProducts,
    createProduct,
}
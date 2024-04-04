import { Router } from "express";
import upload from "../middleware/multer.js";
import { jwtVerify } from "../middleware/jwtVerify.js";
import { createProduct, getAllProducts } from "../controllers/prodcut.controller.js";

const productRouter = Router();

productRouter.route("/")
    .post(upload.single("image_url"),jwtVerify, createProduct)
    .get(getAllProducts)

export default productRouter;
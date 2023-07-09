const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");

const Product = require("../models/product");
const errorHandler = require("../middlewares/error-handler");

exports.postProduct = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessage = errors.array()[0].msg;
      return errorHandler(errorMessage, 422);
    }

    if (!req.file) {
      return errorHandler("Please provide a image", 422);
    }

    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const image = req.file.path;

    const product = new Product({
      name: name,
      description: description,
      price: price,
      image: image,
    });

    const result = await product.save();
    console.log(result);
    res
      .status(200)
      .json({ message: "Product added successfully", product: result });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getProducts = async (req, res, next) => {
  try {
    const currentPage = req.query.page || 1;
    const perPage = 5;
    const totalItems = await Product.countDocuments();

    const products = await Product.find()
      .skip((currentPage - 1) * perPage)
      .limit(perPage)
      .select("-createdAt -updatedAt -__v");

    if (!products) {
      return errorHandler("No product added yet!", 404);
    }

    res.status(200).json({
      message: "Products fetched successfully",
      products: products,
      totalItems: totalItems,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getProduct = async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId).select(
      "-createdAt -updatedAt -__v"
    );

    if (!product) {
      return errorHandler("Could not find product.", 404);
    }

    res
      .status(200)
      .json({ message: "Product fetched successfully", product: product });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.updateProduct = (req, res, next) => {
  const productId = req.params.productId;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessage = errors.array()[0].msg;
    errorHandler(errorMessage, 422);
  }

  const name = req.body.name;
  const description = req.body.description;
  const price = req.body.price;
  let image = req.body.image;

  if (req.file) {
    image = req.file.path;
  }

  if (!image) {
    errorHandler("No file picked", 422);
  }

  Product.findById(productId)
    .then((product) => {
      if (!product) {
        errorHandler("Could not find product.", 404);
      }
      if (image !== product.image) {
        clearImage(product.image);
      }
      product.name = name;
      product.description = description;
      product.price = price;
      product.image = image;

      return product.save();
    })
    .then((product) => {
      res.status(200).json({ message: "Product updated.", product: product });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

const clearImage = (filePath) => {
  filePath = path.join(__dirname, "..", filePath);
  fs.unlink(filePath, (err) => console.log(err));
};

exports.deleteProduct = (req, res, next) => {
  const productId = req.params.productId;
  Product.findById(productId)
    .then((product) => {
      if (!product) {
        errorHandler("Could not find product.", 404);
      }
      //Check logged in user
      clearImage(product.image);
      return Product.findByIdAndRemove(productId);
    })
    .then((result) => {
      console.log(result);
      res.status(200).json({ messge: "Product deleted." });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

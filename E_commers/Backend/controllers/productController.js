import { v2 } from "cloudinary";
import productModel from '../models/productModel.js'
//function  for add product
const addProduct = async (req, res) => {
  try {
const {
  name,
  description,
  price,
  category,
  subCategory,
  sizes,
  bestseller,
} = req.body;
console.log("SIZES RECEIVED IN BACKEND:", sizes);

// Input validation
if (!name || !description || !price || !category || !sizes) {
  return res.status(400).json({
    success: false,
    message: "Missing required fields",
  });
}

if (!req.files || !req.files.image1) {
  return res.status(400).json({
    success: false,
    message: "At least one image is required",
  });
}

const image1 = req.files.image1 && req.files.image1[0];
const image2 = req.files.image2 && req.files.image2[0];
const image3 = req.files.image3 && req.files.image3[0];
const image4 = req.files.image4 && req.files.image4[0];

const images = [image1, image2, image3, image4].filter(
  (item) => item !== undefined
);

let imageUrl = [];
try {
  imageUrl = await Promise.all(
    images.map(async (item) => {
      let result = await v2.uploader.upload(item.path, {
        resource_type: "image",
      });
      return result.secure_url;
    })
  );
} catch (imgErr) {
  console.log(imgErr);
  return res.status(500).json({
    success: false,
    message: "Image upload failed",
  });
}

let parsedSizes = [];
if (sizes && typeof sizes === "string" && sizes.trim() !== "") {
  try {
    parsedSizes = JSON.parse(sizes);
  } catch (parseErr) {
    return res.status(400).json({
      success: false,
      message: "Invalid sizes format",
    });
  }
}
console.log("PARSED SIZES:", parsedSizes);

const productData = {
  name,
  description,
  category,
  price: Number(price),
  subCategory,
  bestseller: bestseller === "true" ? true : false,
  sizes: parsedSizes,
  image: imageUrl,
  date: Date.now(),
};

console.log("PRODUCT DATA TO SAVE:", productData);

const product = new productModel(productData);
await product.save();

res.json({
  success: true,
  message: "Product Added",
});

  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

//function for list produict
const listProduct = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({success:true,products})
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        })
    }
};

//function for removing product
const removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({
            success:true,
            message:"Product Removed"
        })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        })
    }
};

//function for single product
const singleProduct = async (req, res) => {
    try {
        const {productId} = req.body
        const product = await productModel.findById(productId);
        res.json({success:true,product})
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        })
    }
};

export { addProduct, listProduct, removeProduct, singleProduct };

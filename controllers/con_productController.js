const fs = require('fs');
const { get } = require('http');
const path = require('path');

const productFilePath = path.join(__dirname,'../data.json');

const getProduct =(req, res)=>{
    if(!fs.existsSync(productFilePath)){
        return {status: 404,message: 'DATA not found'};
    }
    const row = fs.readFileSync(productFilePath, 'utf-8');
    const data = JSON.parse(row);

    const summarized = data.map((product)=>({
        id: product.id,
        productName: product.productName,
        productPrice: product.productPrice,
        productCategory: product.productCategory,
        productRating: product.productRating,
        totalReviews : product.productReviews.length,
    }));
    return res.json(summarized);

}


const getProductById = (req, res)=>{
    const id = parseInt(req.params.id);

  if (!fs.existsSync(productFilePath)) {
    return res.status(404).json({ error: "Product data file not found." });
  }

  const raw = fs.readFileSync(productFilePath, "utf-8");
  const allProducts = JSON.parse(raw);

  const product = allProducts.find((p) => p.id === id);
  if (!product) {
    return res.status(404).json({ error: `Product with ID ${id} not found.` });
  }

  return res.json(product);
}

module.exports={getProduct, getProductById};
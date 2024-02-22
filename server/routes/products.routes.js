const ProductController = require("../controllers/products.controller");


module.exports = (app)=>{
    app.get("/api/hello", ProductController.helloWorld);
    app.get("/api/products", ProductController.findAllProducts);
    app.post("/api/products", ProductController.createProduct);
    app.get("/api/products/:id", ProductController.findOneProduct);
    app.put("/api/products/:id", ProductController.updateProduct);
    app.delete("/api/products/:id", ProductController.deleteProduct);
}

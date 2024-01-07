const express = require("express");
const cors = require("cors");
const Product = require("./product");

// Container for all products
let products = [];

//Create my Products (These are just temporary for demo purposes)
function productsInit(){
  let titles = ["A", "B", "C", "D", "E"];
  let prices = [12, 5, 7, 3, 10];
  let descriptions = ["Watch", "t-shirt", "Shirt", "Bag of Candy", "Bible"];
  let imageURL = ["images/watch.jpg", "T-Shirt.jpg", "shirt.jpg", "Colorful_candy.jpg", "The_Holy_Bible.png"];

  for(let i= 0; i < 5; i++){
    let id = i;
    let newProduct = new Product(id, titles[i], prices[i], descriptions[i], imageURL[i]);
    products = [...products, newProduct]; 
  }
}

productsInit();


const app = express();
const port = 3000;
const hostname = "localhost";
const router = express.Router();

app.use(express.json());
app.use(cors());

// Setting up Routes for App.

//Route for getting all products
router.get("/products", (req, res) => {
  if(isEmpty(products)){
    res.status(200).json({message: "No products found!"});
  }
  else {
    res.status(200).json(products);
  }
  
});

//Route for getting a product by ID
router.get("/products/:id", (req, res) => {
  
  const productID = parseInt(req.params.id); 
  getProductByID(productID, res);
});

// Help Methods for routes

function getProductByID(productID, res) {
  let index = products.findIndex((product) => product.id === productID);
  if(index !== -1){
    res.status(200).json(products[index]);
  }
  else {
    res.status(400).json({message: `No product with Products ID ${productID}`});
  }
}

function isEmpty(array){
  return array.length === 0;
}

// Management



// Launch App

app.use("/CART", router);

app.listen(port, hostname, ()=> {
  console.log(`Server is running on http://${hostname}:${port}`);
});





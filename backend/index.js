const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");


// Middlewares
app.use(express.json());
app.use(cors());

// Database connection with MongoDB
mongoose.connect("mongodb+srv://areesha:intel84533@cluster01.ga9soet.mongodb.net/e-commerce-website", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected successfully"))
.catch((err) => console.log("❌ MongoDB connection error:", err));

// Default route
app.get("/", (req, res) => {
    res.send("Express app is running");
});

// Image storage engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

// Static folder for images (FIXED: wrong path in your original code)
app.use('/images', express.static('upload/images'));

// Upload endpoint (FIXED: small typo in image_url path)
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

// Schema for creating products (FIXED: minor formatting + good practice)
const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        required: true,
    },
});


app.post('./addproduct', async (req,res)=>{
    const product = new Product({
        id:req.body.id,
       name:req.body.name,
       image:req.body.image,
       category:req.body.category,
       new_price:req.body.new_price,
       old_price:req.body.old_price,
    });

console.log(product);
await product.save();
console.log("Save")
res.json({
    success:true,
    name:req.body.name,
})
})


// Start server
app.listen(port, (error) => {
    if (!error) {
        console.log(`🚀 Server is running on http://localhost:${port}`);
    } else {
        console.log("❌ Server Error:", error);
    }
});

 
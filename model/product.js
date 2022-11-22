const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName:{
        type : String,
        required: true,
    },
    productDescription:{
        type:String,
        required : true,
    },
    productPrice:{
        type:String,
        required : true,
    },
    categoryId:{
            type: String,
            required: true
        },
        subCategoryId:{
            type: String,
            required: true
        },
    },{ collection: "product", timestamps: true}
)

const Product = new mongoose.model('Product', productSchema);

module.exports = Product;
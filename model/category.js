const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
        categoryName:{
            type : String,
            required: true,
        },
        categoryDescription:{
            type:String,
            required : true,
        },
    },{ collection: "category", timestamps: true}
)

const Category = new mongoose.model('Category', categorySchema);

module.exports = Category;
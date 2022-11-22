const mongoose = require('mongoose')

const subCategorySchema = new mongoose.Schema({
    categoryId:{
        type: String,
        required: true
    },
    subCategoryName:{
        type : String,
        required: true,
    },
    subCategoryDescription:{
        type:String,
        required : true,
    },
    },{ collection: "subCategory", timestamps: true}
)

const SubCategory = new mongoose.model('SubCategory', subCategorySchema);

module.exports = SubCategory;
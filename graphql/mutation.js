const {GraphQLString} = require('graphql')
const {categoryType,subCategoryType,productType} = require('./type')
const categoryModel = require('../model/category')
const subCategoryModel = require('../model/subCategory')
const productModel = require('../model/product')

/* Add new category mutation */

const addCategory = {
    type:categoryType,
    description:'Create new category',
    args:{
        categoryName:{type: GraphQLString},
        categoryDescription:{type:GraphQLString},
    },
     resolve(parent,args){
        const {categoryName,categoryDescription} = args
        const category = new categoryModel({
            categoryName,categoryDescription
        })
        return category.save()
    }
}

/* Update category mutation */

const updateCategory = {
    type:categoryType,
    description: 'Update category',
    args: {
        id:{type:GraphQLString},
        categoryName: {type:GraphQLString},
        categoryDescription: {type:GraphQLString}
    },
    async resolve(parent,args){
        const categoryUpdated = await categoryModel.findOneAndUpdate(
            {
                _id:args.id,

            },
            {
                categoryName:args.categoryName,
                categoryDescription:args.categoryDescription
            },
            {
                new:true,
                runValidators:true,
            }
        )
        if(!updateCategory){
            throw new Error("category does not found.")
        }
        return categoryUpdated
    }
}

/* Delete category mutation */

const deleteCategory ={
    type: GraphQLString,
    description:'Delete Category',
    args:{
        categoryId:{type:GraphQLString},
    },
    async resolve(parent,args){
        const categoryDeleted = await categoryModel.findOneAndDelete({
            _id:args.categoryId
        })
        if (!categoryDeleted){
            throw new Error("category does not found.")
        }
        return "category Deleted Successfully"
    }
}

/* Add new subCategory mutation */

const addSubCategory = {
    type:subCategoryType,
    description:'Create new subCategory',
    args:{
        subCategoryName:{type: GraphQLString},
        subCategoryDescription:{type:GraphQLString},
        categoryId:{type: GraphQLString},

    },
    resolve(parent,args){
        const {subCategoryName,subCategoryDescription,categoryId} = args
        const subCategory = new subCategoryModel({
            subCategoryName,subCategoryDescription,categoryId
        })
        return subCategory.save()
    }
}

/* Update subCategory mutation */

const updateSubCategory = {
    type:subCategoryType,
    description: 'Update subCategory',
    args: {
        id:{type:GraphQLString},
        subCategoryName: {type:GraphQLString},
        subCategoryDescription: {type:GraphQLString}
    },
    async resolve(parent,args){
        const subCategoryUpdated = await subCategoryModel.findOneAndUpdate(
            {
                _id:args.id,
            },
            {
                subCategoryName:args.subCategoryName,
                subCategoryDescription:args.subCategoryDescription
            },
            {
                new:true,
                // runValidators:true,
            }
        )
        if(!updateSubCategory){
            throw new Error("subCategory does not found.")
        }
        return subCategoryUpdated
    }
}

/* Delete subCategory mutation */

const deleteSubCategory ={
    type: GraphQLString,
    description:'Delete subCategory',
    args:{
        subCategoryId:{type:GraphQLString},
    },
    async resolve(parent,args){
        const subCategoryDeleted = await subCategoryModel.findOneAndDelete({
            _id:args.subCategoryId,
        })
        if (!subCategoryDeleted){
            throw new Error("subCategory does not found.")
        }
        return "subCategory Deleted Successfully"
    }
}

/* Add new product mutation */

const addProduct = {
    type:productType,
    description:'Create new product',
    args:{
        productName:{type: GraphQLString},
        productDescription:{type:GraphQLString},
        productPrice:{type:GraphQLString},
        categoryId:{type: GraphQLString},
        subCategoryId:{type: GraphQLString},

    },
    resolve(parent,args){
        const {productName,productDescription,productPrice,categoryId,subCategoryId} = args
        const product = new productModel({
            productName,productDescription,productPrice,categoryId,subCategoryId
        })
        return product.save()
    }
}

/* Update product mutation */

const updateProduct = {
    type:productType,
    description: 'Update product',
    args: {
        id:{type:GraphQLString},
        productName: {type:GraphQLString},
        productDescription: {type:GraphQLString},
        productPrice:{type:GraphQLString},
    },
    async resolve(parent,args){
        const productUpdated = await productModel.findOneAndUpdate(
            {
                _id:args.id,

            },
            {
                productName:args.productName,
                productDescription:args.productDescription,
                productPrice:args.productPrice,
            },
            {
                new:true,
                // runValidators:true,
            }
        )
        if(!updateProduct){
            throw new Error("product does not found.")
        }
        return productUpdated
    }
}

/* Delete product mutation */

const deleteProduct ={
    type: GraphQLString,
    description:'Delete product',
    args:{
        productId:{type:GraphQLString},
    },
    async resolve(parent,args){
        const productDeleted = await productModel.findOneAndDelete({
            _id:args.productId,
        })
        if (!productDeleted){
            throw new Error("product does not found.")
        }
        return "product Deleted Successfully"
    }
}



module.exports = {addCategory,updateCategory,deleteCategory,addSubCategory,updateSubCategory,deleteSubCategory,addProduct,updateProduct,deleteProduct}
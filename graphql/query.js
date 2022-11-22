const {GraphQLList,GraphQLID} = require('graphql')
const {categoryType,subCategoryType,productType} = require('./type')
const categoryModel = require('../model/category')
const subCategoryModel = require('../model/subCategory')
const productModel = require('../model/product')


/* List all category query */
const categories = {
    type:new GraphQLList(categoryType),
    description:"Retrieves list of categories",
    resolve(parent,args){
        return categoryModel.find()
    }
}

/* List single category query */
const category = {
    type: categoryType,
    description:"Retrieves single category",
    args:{id:{type:GraphQLID}},
    resolve(parent,args){
        return categoryModel.findById(args.id)
    }
}

/* List all subCategory query */
const subCategories = {
    type:new GraphQLList(subCategoryType),
    description:"Retrieves list of subcategories",
    resolve(parent,args){
        return subCategoryModel.find()
    }
}

/* List single subcategory query */
const subCategory = {
    type: subCategoryType,
    description:"Retrieves single subCategory",
    args:{id:{type:GraphQLID}},
    resolve(parent,args){
        return subCategoryModel.findById(args.id)
    }
}

/* List all product query */
const products = {
    type:new GraphQLList(productType),
    description:"Retrieves list of products",
    resolve(parent,args){
        return productModel.find()
    }
}

/* List single product query */
const product = {
    type: productType,
    description:"Retrieves single product",
    args:{id:{type:GraphQLID}},
    resolve(parent,args){
        return productModel.findById(args.id)
    }
}

module.exports = {categories,category,subCategories,subCategory,products,product}
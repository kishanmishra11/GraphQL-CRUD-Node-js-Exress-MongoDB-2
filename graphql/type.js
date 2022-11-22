const {GraphQLObjectType,GraphQLID,GraphQLString,GraphQLList} = require('graphql')

const categoryModel = require('../model/category')
const subCategoryModel = require('../model/subCategory')
const productModel = require('../model/product')

/* category Type */
const categoryType = new GraphQLObjectType({
    name:'Category',
    description:'category Type',
    fields:()=>({
        id:{type:GraphQLID},
        categoryName:{type:GraphQLString},
        categoryDescription:{type:GraphQLString},
    })
})

/* subCategory Type */
const subCategoryType = new GraphQLObjectType({
    name:'SubCategory',
    description:'SubCategory Type',
    fields:()=>({
        id:{type:GraphQLID},
        subCategoryName:{type:GraphQLString},
        subCategoryDescription:{type:GraphQLString},
        category:{
            type:categoryType,
            resolve(parent,args){
                return categoryModel.findById(parent.categoryId)
            }
        }
    })
})

/* product Type */
const productType = new GraphQLObjectType({
    name:'Product',
    description:'Product Type',
    fields:()=>({
        id:{type:GraphQLID},
        productName:{type:GraphQLString},
        productDescription:{type:GraphQLString},
        productPrice:{type:GraphQLString},
        category:{
            type:categoryType,
            resolve(parent,args){
                return categoryModel.findById(parent.categoryId)
            }
        },
        subCategory:{
            type:subCategoryType,
            resolve(parent,args){
                return subCategoryModel.findById(parent.subCategoryId)
            }
        }
    })
})

module.exports = {categoryType,subCategoryType,productType}
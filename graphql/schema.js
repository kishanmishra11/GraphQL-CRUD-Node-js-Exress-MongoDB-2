const  {GraphQLSchema,GraphQLObjectType} = require ('graphql')

const {categories,category,subCategories,subCategory,products,product} = require('./query')

const {addCategory,updateCategory,deleteCategory,addSubCategory,updateSubCategory,deleteSubCategory,addProduct,updateProduct,deleteProduct} = require('./mutation')


/* Query Schema For Queries */
const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description:"Queries",
    fields:{categories,category,subCategories,subCategory,products,product},
})

/* Mutation Schema For Mutations*/
const MutationType = new GraphQLObjectType({
    name:"MutationType",
    description:"Mutation",
    fields:{addCategory,updateCategory,deleteCategory,addSubCategory,updateSubCategory,deleteSubCategory,addProduct,updateProduct,deleteProduct},
})

module.exports = new GraphQLSchema({
    query: QueryType,
    mutation:MutationType

})
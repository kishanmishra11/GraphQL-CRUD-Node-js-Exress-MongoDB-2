const express = require('express')
const db = require('./db/conn')
const app = express()
const dotenv = require('dotenv')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./graphql/schema')
dotenv.config()


app.get('/',(req,res)=>{
    res.json({message:"Welcome to GraphQL E-Commerce"})
})

app.use('/',graphqlHTTP({
    schema:schema,
    graphiql : true
}))

app.listen(process.env.PORT,()=>{
    console.log(`Connection is established on port no ${process.env.PORT}`)
})
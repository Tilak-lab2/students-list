const express = require('express')
const {ApolloServer} = require('apollo-server')
const graphql = require('graphql')
const app = express()
const {fileLoader,mergeTypes,mergeResolvers} = require('merge-graphql-schemas')
const port=3000
const path=require('path')
const typeDefs=mergeTypes(fileLoader(path.join(__dirname,"./typedefs")))
const resolvers=mergeResolvers(fileLoader(path.join(__dirname,"./resolvers")))
const db=require('./config/mongoose')

const Server =new ApolloServer({
    typeDefs,
    resolvers,

})


app.get("/rest",(req,res)=>{
    res.json({data:"welcome"})
})
Server.listen(3000, function(err) {
    if(err) {
        console.log(err)
    }
    console.log(`Running on port${port}`)
})
const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')

const schema = require('./schema/schema.js')
const connectDB = require('./config/db.js')

const port = process.env.PORT || 5000

const {graphqlHTTP} = require('express-graphql')

const app = express()

connectDB()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, console.log(`Server running on ${port}`))




























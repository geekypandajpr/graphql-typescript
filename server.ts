const express = require('express')
const expressGraphQL = require('express-graphql')
const { GraphQLSchema} = require('graphql')
const app = express()
import {RootQueryType, RootMutationType} from './resolver';


const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType
})

app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true
}))
app.listen(5000, () => console.log('Server Running'))
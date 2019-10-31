const express = require("express")
const graphqlHTTP = require('express-graphql')
const schema = require("./schema/schema")
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://ayobami:Olympus1@graphqlcluster-ccqdl.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser : true, useUnifiedTopology: true})
mongoose.connection.once('open', () => {
    console.log("connected to the database")
})
const app = express();

app.use ('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}))
app.listen(4000, ()=> {
    console.log('Now Listen to request on port 4000');
})
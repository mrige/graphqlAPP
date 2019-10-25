const graphql = require('graphql');
const _ = require("lodash");

const books = [ 
    {name:'Game of Thrones', genre: 'fantasy', id:'1'},
    {name:'Lord of the Rings', genre: 'fantasy', id:'2'},
    {name:'Chronicles of Narnia', genre: 'fantasy', id:'3'},
]

const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id:{type: GraphQLString },
        name:{type: GraphQLString},
        genre:{type: GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book:{
            type: BookType,
            args:{id: {type:GraphQLString}},
            resolve(parent, args){
                return _.find(books, {id:args.id});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})
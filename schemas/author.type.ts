
import {books} from '../data';
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull
  } = require('graphql')
import {BookType} from './book.type';
export const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: 'This represents a author of a book',
    fields: () => ({
      id: { type: GraphQLNonNull(GraphQLInt) },
      name: { type: GraphQLNonNull(GraphQLString) },
      books: {
        type: new GraphQLList(BookType),
        resolve: (author) => {
          return books.filter(book => book.authorId === author.id)
        }
      }
    })
  })
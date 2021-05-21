
import {authors} from '../data';
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull
  } = require('graphql')
import {AuthorType} from './author.type';
export const BookType = new GraphQLObjectType({
    name: 'Book',
    description: 'This represents a book written by an author',
    fields: () => ({
      id: { type: GraphQLNonNull(GraphQLInt) },
      name: { type: GraphQLNonNull(GraphQLString) },
      authorId: { type: GraphQLNonNull(GraphQLInt) },
      author: {
        type: AuthorType,
        resolve: (book) => {
          return authors.find(author => author.id === book.authorId)
        }
      }
    })
  })
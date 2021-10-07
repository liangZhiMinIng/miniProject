import { ApolloServer,gql } from "apollo-server-express";

import * as gr from "./graphqlResolvers"
import {defs} from "./graphqlTypeDefs"
const typeDefs = gql`${defs}`
const resolvers  = {
  Query:{
    hello:function(){
      return "hello graphql"
    },
    booktopdata:gr.BookListDb,
    goodbookdata:gr.GoodBookListDb,
    category:gr.CategroyDb,
    lowPricedata:gr.LowPriceDb
    },
  BigCategory:{
    smallCategory:gr.GetSmallCategroyDb,
  }
}
export const server = new ApolloServer({
  typeDefs,
  resolvers,
  //默认为false，打开网页找不到，开发一般打开用true
  playground:true
})
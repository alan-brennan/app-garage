import React from 'react';
import ApolloClient from 'apollo-client';
import  { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import AppsList from './AppsList';
import CreateApp from './CreateApp';


const httpLink = createHttpLink({uri: "http://localhost:3000/graphql"});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

class RootComponent extends React.Component {

  render(){

     return(
       <ApolloProvider client={client}>
       <div> <AppsList/> </div>
       <div> <CreateApp/> </div>
       </ApolloProvider>
     ) // end return
   } // end render
  } // end class


export default RootComponent;

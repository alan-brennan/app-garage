import React from 'react';
import ApolloClient from 'apollo-client';
import  { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo'
import OneAppDetails from './OneAppDetails';


const httpLink = createHttpLink({uri: "http://localhost:3000/graphql"});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

class AppsList extends React.Component {

  renderApps() {
    return this.props.data.apps.map( app => {
      return(
              <OneAppDetails app={app} />

              );
    });
  }

  render(){

    if(this.props.data.loading) {return <div> Loading.... </div>; }
    console.log(this.props);

     return(
       <div>
       <div className="ui divider"></div>
       <div className="ui link cards app-cards">
       { this.renderApps()}
       </div>
       </div>

     )
    }
  }


const ALL_APPS_QUERY = gql`
  {
   apps {
     name
     author
     description
     rating 
    }
  }
 `;


    //export default graphql(query)(AppsList);
    export default graphql(ALL_APPS_QUERY)(AppsList); // creates .data property on props object returned

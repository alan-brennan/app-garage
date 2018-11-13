import React from 'react';
import AppDetails from './AppDetails';
import ExtraDetails from './ExtraDetails';
import OneAppDetails from './OneAppDetails';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

export default class RatedApps extends React.Component {


  render(){

    const httpLink = createHttpLink({uri: "http://localhost:3000/graphql"});
    const client = new ApolloClient({
      link: httpLink,
      cache: new InMemoryCache()
    });

    const ALL_APPS_QUERY = gql`
      query ALL_APPS_QUERY {
        app {
            id
            name
            rating
        }
      }`;

    client.query({query: ALL_APPS_QUERY
})
  .then(data => console.log(data))
  .catch(error => console.error(error));


    var header = this.props.header.toString()

    var app_list = this.props.app_list.map((app) => {
      return(
          <OneAppDetails app={app}/>
      )
     })

     return(
       <div>
        <h1 className="header">{header}</h1>
        <div className="ui divider"></div>
        <div className="ui link cards app-cards">
          {app_list}</div>
       </div>

     )
    }
  }

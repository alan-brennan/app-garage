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
import { graphql } from 'react-apollo';

const httpLink = createHttpLink({uri: "http://localhost:3000/graphql"});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});


class RatedApps extends React.Component {




  render(){

    console.log(this.props);
    var app_list;




  //client.query({query: ALL_APPS_QUERY
//    })
//  .then((data) => {}

//  )
//  .catch(error => console.error(error));

    //console.log("app list "+app_list);
    var header = this.props.header.toString()

    // var app_list = this.props.app_list.map((app) => {
    //   return(
    //       <OneAppDetails app={app}/>
    //   )
    //  })

     return(
       <ApolloProvider client={client}><div>
        <h1 className="header">{header}</h1>
        <div className="ui divider"></div>
        <div className="ui link cards app-cards">
           {app_list}</div>
       </div> </ApolloProvider>

     )
    }
  }

  const ALL_APPS_QUERY = gql`
    query ALL_APPS_QUERY {
      apps {
          id
          name
          rating
      }
    }`;

    export default RatedApps;

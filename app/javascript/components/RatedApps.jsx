import React from 'react';
import AppDetails from './AppDetails';
import ExtraDetails from './ExtraDetails';
import OneAppDetails from './OneAppDetails';

export default class RatedApps extends React.Component {


  render(){

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

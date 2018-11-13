import React from 'react';
import AppDetails from './AppDetails';
import ExtraDetails from './ExtraDetails';
import OneAppDetails from './OneAppDetails';

export default class AllApps extends React.Component {


  render(){

    // var header = this.props.header.toString()
    fetch('./graphql/', {
                          method: 'post',
                          headers: {
                                    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                                    },
                          body: 'query={apps {id name rating}}' }
  )
  .then(function(response) { return response.json();
 })

  .then(function(data) {
                        //var app_list = data.data.apps.map((app) => {return(
                        //      <OneAppDetails app={app}/>
                        // );});
                        console.log(data);


    }); //end function

     return(
       <div>
        <h1 className="header"></h1>
        <div className="ui divider"></div>

        </div>
     ) // end return
   } // end render
  } // end class Export

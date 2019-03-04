import React from 'react';
import gql from 'graphql-tag';

class CreateApp extends React.Component {
  constructor() {
    super();
    this.state = { name: ''};
    this.state = { description: ''};
    this.state = { author: ''};
  }


  render(){

     return(
       <div>
          <div className="ui divider"></div>
          <h3> Create a new App </h3>
          <div className="ui link cards app-cards">
            <div className="card">
              <div className="content">

                <form>
                  <label> App Name: </label>
                  <input onChange={event => this.setState({name: event.target.value})}
                  value={this.state.title}
                  />

                  <label> App Description: </label>
                  <input onChange={event => this.setState({description: event.target.value})}
                  value={this.state.description}
                  />

                  <label> App Author: </label>
                  <input onChange={event => this.setState({description: event.target.value})}
                  value={this.state.author}
                  />

                  <button>Submit</button>

                </form>
              </div>
            </div>
          </div>
       </div>
     )

   } // end render
  } // end class

const mutation = gql`

mutation {

createApp(name: "Alans Cool App III", rating: 6.0, description: "lors ipsum dias, in hortor sendent", downloads: 4000, ratedTimes: 7, author: "Alan", version: 1.2){
  id
 name
 }

}


`;

    //export default graphql(query)(AppsList);
    export default CreateApp; // creates .data property on props object returned

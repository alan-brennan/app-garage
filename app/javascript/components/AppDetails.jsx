import React from 'react';

export default ({details}) => (
  <div className="content">
    <div className="header">{details.name } </div>
    <div className="meta"> {details.author}</div>
    <div className="description"> {details.description.substring(0, 100)} </div>
    <div className="description"> <p> {details.children} </p> </div>
    <div className="description"> <p> added in AppDetails  </p> </div>
  </div>
);

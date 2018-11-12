import React from 'react';

export default ({ details }) => (
  <div className="extra content">
    <span className="right floated">
      <i className="star icon"></i> {parseFloat(details.rating).toFixed(1)}
    </span>
    <span>
      <i className="arrow alternate circle down outline icon"></i> {details.downloads}
    </span>
  </div>

);

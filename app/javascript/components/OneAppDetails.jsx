import React from 'react';
import AppDetails from './AppDetails'
import ExtraDetails from './ExtraDetails'

function color(){
return (Math.floor(Math.random()*16777215).toString(16)
)}

export default ({app}) => (
  <a className="card" href="http://www.google.com">

    <div className="image">
    <img src={`https://dummyimage.com/200x200/${color()}/${color()}.png&text=${app.name}`}/>
    </div>

    <AppDetails details = {app}> Some more app details passed as a child</AppDetails>
    <ExtraDetails details = {app} />
  </a>
);

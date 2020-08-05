import React from 'react';

const staty = (props)=> {

    return (
        <div className={props.styleP}>
         <h3 className="statText">  {props.name}: <input className="statInput" defaultValue={props.value} />  </h3>
        </div>
    )}


export default staty;
import React from 'react';


const skills = (props)=> {
    let skillsToRender = (<div className="skillWrap"></div> );
if (props.nameM){
    skillsToRender = 
         (<div className="skillWrap">
         <div className="skillContener"><h5>  {props.nameM}  </h5></div>
         <div className="skillContener"><p>  {props.name1}  <input className="statInput" defaultValue={props.value1} /></p></div>
         <div className="skillContener"><p>  {props.name2}  <input className="statInput" defaultValue={props.value2} /></p></div>
         <div className="skillContener"><p>  {props.name3}  <input className="statInput" defaultValue={props.value3} /></p></div>
        </div>)
    
}

    return (
        skillsToRender
    )}


export default skills;
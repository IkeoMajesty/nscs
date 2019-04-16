import React from 'react';


const skills = (props)=> {
    let skillsToRender = (<div className="skillWrap"></div> );
if (props.nameM){
    skillsToRender = 
         (<div className="skillWrap">
         <div className={props.styleP}><h6>  {props.nameM}  </h6></div>
         <div className="skillContener"><p>  {props.name1}  <input className="statInputS" defaultValue={props.value1} /></p></div>
         <div className="skillContener"><p>  {props.name2}  <input className="statInputS" defaultValue={props.value2} /></p></div>
         <div className="skillContener"><p>  {props.name3}  <input className="statInputS" defaultValue={props.value3} /></p></div>
        </div>)
    
}

    return (
        skillsToRender
    )}


export default skills;
import React from 'react';
import {  Label, Input } from "reactstrap";


const text = (props)=> {
    
    return (
        <div className={props.type}>
          
           <Label for={props.name} > {props.name} </Label>
           <Input type="text" name={props.name} id={props.id} defaultValue={props.value} />  
         
        </div>
    )}


export default text;



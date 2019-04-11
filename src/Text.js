import React from 'react';
import { FormGroup, Label, Input } from "reactstrap";


const text = (props)=> {
    const classNameInput = "longTextInput";
    return (
        <div className={props.type}>
          
           <Label for={props.name} > {props.name} </Label>
           <Input className={classNameInput} type="text" name={props.name} id={props.id} defaultValue={props.value} />  
         
        </div>
    )}


export default text;



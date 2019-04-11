import React from 'react';
import Staty from "./Staty.js"

const statLine = (props)=> {

    return (
        <div className="dataHeader">
        <Staty name="Zrecznosc" value={props.zr} /> 
        <Staty name="Budowa" value={props.bu} /> 
        <Staty name="Percepcja" value={props.pr} /> 
        <Staty name="Spryt" value={props.sp} /> 
        <Staty name="Charakter" value={props.ch} />
        </div>
    )}


export default statLine;






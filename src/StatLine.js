import React from 'react';
import Staty from "./Staty.js"

const statLine = (props)=> {

    return (
        <div className="dataHeader">
        <Staty style="statyContenerZr" name="Zrecznosc" value={props.zr} /> 
        <Staty style="statyContenerBu" name="Budowa" value={props.bu} /> 
        <Staty style="statyContenerPr" name="Percepcja" value={props.pr} /> 
        <Staty style="statyContenerSp" name="Spryt" value={props.sp} /> 
        <Staty style="statyContenerCh" name="Charakter" value={props.ch} />
        </div>
      
    )}


export default statLine;






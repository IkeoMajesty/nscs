import React from 'react';
import Staty from "./Staty.js"

const statLine = (props)=> {

    return (
        <div className="dataHeader">
        <Staty styleP="statyContenerZr" name="Zrecznosc" value={props.zr} /> 
        <Staty styleP="statyContenerBu" name="Budowa" value={props.bu} /> 
        <Staty styleP="statyContenerPr" name="Percepcja" value={props.pr} /> 
        <Staty styleP="statyContenerSp" name="Spryt" value={props.sp} /> 
        <Staty styleP="statyContenerCh" name="Charakter" value={props.ch} />
        </div>
      
    )}


export default statLine;






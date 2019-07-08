import React, { Component } from 'react';
import './App.scss';
import StatLine from "./StatLine.js";
import Text from "./Text.js";
import { skillDice, tricksRoll, gender, imionaM, imionaF, nazwiska, profesje, pochodzenia, wiek, wzrost, waga, oczy, wlosy, spec, choroba, d20avfrom3, skillsRoll } from "./Rngs.js";
import SkillsGrid from './SkillsGrid.js'
import Button from './Button.js'
import Popup from "./Popup.js"




class App extends Component {
  state = {
    basic: {
      plec:'',
      imie:'',
      nazwisko:'',
      poch:'',
      pro:'',
      wiek:'',
      wzrost:'',
      waga:'',
      oczy:'',
      wlosy:'',
      spec:'',
      choroba:'',
      zr:'',
      bu:'',
      pr:'',
      sp:'',
      ch:'',
    },
    skills:{},
    tricks:[],
    showinfo: false,
    showRM: false,
    showCred: false,
  }
  
  infoToggle = ()=>{
    this.setState({showinfo: !this.state.showinfo, showRM: false, showCred: false})
    
    console.log("Info",this.state.showinfo);  
  }
  rmToggle = ()=>{
    this.setState({showRM: !this.state.showRM, showinfo: false, showCred: false})
    console.log("RM",this.state.showRM);
  }
  cToggle = ()=>{
    this.setState({showCred: !this.state.showCred, showRM: false, showinfo: false})
    console.log("Cred",this.state.showCred);
  }
  rngMagicOld = ()=> {
    const genderOutcome = gender();
    const pro = profesje();
    const poch = pochodzenia();
    console.log()
    this.setState({
      
      basic: {
        plec: genderOutcome.gender,
        imie: imionaM(),
        nazwisko:nazwiska(),
        poch:poch[0],
        pro:pro[0],
        wiek:wiek(),
        wzrost:wzrost(),
        waga:waga(),
        oczy:oczy(),
        wlosy:wlosy(),
        spec:spec(),
        choroba:choroba(),
        zr:d20avfrom3(),
        bu:d20avfrom3(),
        pr:d20avfrom3(),
        sp:d20avfrom3(),
        ch:d20avfrom3(),
      },
      skills:{},
      tricks:{}
    })
  }
  rngMagic = () => {
  let randomName;
  let genderOutcome = gender();
  (genderOutcome.gender === "M") ? randomName = imionaM() : randomName = imionaF();
  let profesja = profesje();
  let priorityStat1 = profesja[1];
  let priorityStat2 = profesja[2];
  let sixRolls = [d20avfrom3(),d20avfrom3(),d20avfrom3(),d20avfrom3(),d20avfrom3(),d20avfrom3()];
  console.log("First Roll:",sixRolls);
  sixRolls.sort(function(a, b){return b-a});
  sixRolls.pop();
  let priorityRoll1= sixRolls.shift();
  let priorityRoll2= sixRolls.shift();
  sixRolls.shuffle();
  const statRolls = sixRolls;
  const statsFinal = {[priorityStat1]:priorityRoll1, [priorityStat2]:priorityRoll2 }
  !("bu" in statsFinal) && (statsFinal.bu = statRolls.shift())
  !("zr" in statsFinal) && (statsFinal.zr = statRolls.shift())
  !("sp" in statsFinal) && (statsFinal.sp = statRolls.shift())
  !("ch" in statsFinal) && (statsFinal.ch = statRolls.shift())
  !("pr" in statsFinal) && (statsFinal.pr = statRolls.shift())
  const pochodzenie = pochodzenia();
  statsFinal[pochodzenie[1]]=(statsFinal[pochodzenie[1]]+1);
  let skillsFinal = {};
  let skillsFromProf = profesja[3];
  const randomSkills = skillsRoll(skillsFromProf);
  randomSkills.forEach(skill => {
    let skillLvl = (Math.floor(((Math.random()*10)+1)));
    skillsFinal[skill] = skillLvl;
  });
  skillsFromProf.forEach(skill => {
    let skillLvl = skillDice();
    skillsFinal[skill] = skillLvl;
  });
  const currentStats={...skillsFinal, ...statsFinal};
  // console.log(currentStats);
  let tricks = tricksRoll(currentStats);
  
    this.setState({
      basic: {
        plec: genderOutcome.gender,
        imie: randomName,
        nazwisko:nazwiska(),
        poch: pochodzenie[0],
        pro: profesja[0],
        wiek:wiek(),
        wzrost:wzrost(),
        waga:waga(),
        oczy:oczy(),
        wlosy:wlosy(),
        spec:spec(),
        choroba:choroba(),
        zr: statsFinal.zr,
        bu: statsFinal.bu,
        pr: statsFinal.pr,
        sp: statsFinal.sp,
        ch: statsFinal.ch,
      },
      skills: skillsFinal,
      tricks: tricks
    })
    // console.log(this.state);
    
    
  };
  render() {
    let popup = null;
     if (this.state.showinfo) {
       popup = (
        <Popup text="info" close={this.infoToggle} />
       );
     }
     if (this.state.showRM){
      popup = (
        <Popup text="rm" close={this.rmToggle} />
       );
     }
     if (this.state.showCred){
      popup = (
        <Popup text='details' close={this.cToggle} />
       );
     }
     const buttonclass = "buttonRng menuButton"
    return (
      <div>
        {popup}
        <div className="navBar"><Button name="INFO" action={this.infoToggle}/><Button name="ROADMAP" action={this.rmToggle}/><Button name="DETAILS" action={this.cToggle}/><button className={buttonclass} onClick={this.rngMagic}>RNG!</button></div>
        
        <div className="dataHeader">
          <Text type="longText" name="Imie" id="imie" change={this.manualInput} value={this.state.basic.imie} /> 
          <Text type="longText" name="Nazwisko" id="nazwisko" change={this.manualInput} value={this.state.basic.nazwisko} /> 
          <Text type="longText" name="Pochodzenie" id="poch" change={this.manualInput} value={this.state.basic.poch}/> 
          <Text type="longText" name="Profesja" id="pro" change={this.manualInput} value={this.state.basic.pro}/> 
        </div>
        <div className="dataHeader">
          <Text type="shortText" name="Plec" id="plec" change={this.manualInput} value={this.state.basic.plec} />
          <Text type="shortText" name="Wiek" id="wiek" change={this.manualInput} value={this.state.basic.wiek} /> 
          <Text type="mediumText" name="Wzrost" id="wzrost" change={this.manualInput} value={this.state.basic.wzrost}/> 
          <Text type="mediumText" name="Waga" id="waga" change={this.manualInput} value={this.state.basic.waga} /> 
          <Text type="mediumText" name="Oczy" id="oczy" change={this.manualInput} value={this.state.basic.oczy} /> 
          <Text type="mediumText" name="Wlosy" id="wlosy" change={this.manualInput} value={this.state.basic.wlosy} /> 
          <Text type="mediumText" name="Spec." id="spec" change={this.manualInput}value={this.state.basic.spec}/> 
          <Text type="longText" name="Choroba" id="choroba" change={this.manualInput} value={this.state.basic.choroba}/>
        </div>
        
        <StatLine bu={this.state.basic.bu} zr={this.state.basic.zr} sp={this.state.basic.sp} pr={this.state.basic.pr} ch={this.state.basic.ch}/>
        <div className="skillsGrid">
          <SkillsGrid  skills={this.state.skills} />
        <div className="tricks">
          <h3>Sztuczki</h3>
          {this.state.tricks.map(trick=>{return (<li key={trick[0]}>{trick[0]}</li>)})}
        </div>
          <div className="buttonContainer"></div>
        </div>
        
      </div>
      
    );
  }
}

export default App;


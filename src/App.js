import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StatLine from "./StatLine.js";
import Text from "./Text.js";
import { imiona, nazwiska, profesje, pochodzenia, wiek, wzrost, waga, oczy, wlosy, spec, choroba, d20avfrom3 } from "./Rngs.js";





class App extends Component {
  state = {
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

  }
  manualInput =  (event)=>  {
    let position = event.target.id
    this.setState({
      position: event.target.value
    })
    
  }
  rngMagic = ()=> {
    
    // console.log('Clicked!')
    this.setState({
      imie: imiona(),
      nazwisko:nazwiska(),
      poch:pochodzenia(),
      pro:profesje(),
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
    })
  }
  showPersons = () => {
    this.state.showPersons ? this.setState({showPersons: false}) : this.setState({showPersons: true})
    
  };
  render() {
    return (
      <div>
       <div className="dataHeader">
       <Text type="longText" name="Imie" id="imie" change={this.manualInput} value={this.state.imie} /> 
       <Text type="longText" name="Nazwisko" id="nazwisko" change={this.manualInput} value={this.state.nazwisko} /> 
       <Text type="longText" name="Pochodzenie" id="poch" change={this.manualInput} value={this.state.poch}/> 
       <Text type="longText" name="Profesja" id="pro" change={this.manualInput} value={this.state.pro}/> 
       </div>
       <div className="dataHeader">
       <Text type="shortText" name="Wiek" id="wiek" change={this.manualInput} value={this.state.wiek} /> 
       <Text type="shortText" name="Wzrost" id="wzrost" change={this.manualInput} value={this.state.wzrost}/> 
       <Text type="shortText" name="Waga" id="waga" change={this.manualInput} value={this.state.waga} /> 
       <Text type="mediumText" name="Oczy" id="oczy" change={this.manualInput} value={this.state.oczy} /> 
       <Text type="mediumText" name="Wlosy" id="wlosy" change={this.manualInput} value={this.state.wlosy} /> 
       <Text type="mediumText" name="Spec." id="spec" change={this.manualInput}value={this.state.spec}/> 
       <Text type="longText" name="Choroba" id="choroba" change={this.manualInput} value={this.state.choroba}/>
       </div>
       <StatLine bu={this.state.bu} zr={this.state.zr} sp={this.state.sp} pr={this.state.pr} ch={this.state.ch}/>
       <button className="buttonRng" onClick={this.rngMagic}>RNG!</button>
      </div>
      
    );
  }
}

export default App;


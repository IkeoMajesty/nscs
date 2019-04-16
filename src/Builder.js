import { skillDice, skillsRoll, gender, imionaM, imionaF, nazwiska, profesje, pochodzenia, wiek, wzrost, waga, oczy, wlosy, spec, choroba, d20avfrom3 } from "./Rngs";

const buildDependencies = ()=> {
   
    let randomName;
    let genderOutcome = gender();
    if (genderOutcome == "M"){
            randomName = imionaM();
    }else{
            randomName = imionaF();
    };
    let profesja = profesje();
    let priorityStat1 = profesja[1];
    let priorityStat2 = profesja[2];
    let sixRolls = [d20avfrom3(),d20avfrom3(),d20avfrom3(),d20avfrom3(),d20avfrom3(),d20avfrom3()];
    sixRolls.sort(function(a, b){return b-a});
    sixRolls.pop();
    let priorityRoll1= sixRolls.shift();
    let priorityRoll2= sixRolls.shift();
    sixRolls.shuffle();
    const statRolls = shuffle(sixRolls);
    const statsFinal = {[priorityStat1]:priorityRoll1, [priorityStat2]:priorityRoll2 }
    
    // !("Bu" in statsFinal) ? statsFinal.Bu = statRolls.shift() : null;
    // statsFinal.Bu = statsFinal.hasOwnProperty('Bu') ? statRolls.shift() : null


    !("bu" in statsFinal) ? statsFinal.bu = statRolls.shift() : null;
    !("zr" in statsFinal) ? statsFinal.zr = statRolls.shift() : null;
    !("sp" in statsFinal) ? statsFinal.sp = statRolls.shift() : null;
    !("ch" in statsFinal) ? statsFinal.ch = statRolls.shift() : null;
    !("pr" in statsFinal) ? statsFinal.bu = statRolls.shift() : null;
    const pochodzenie = pochodzenia();
    statsFinal[pochodzenie[1]]=(statsFinal[pochodzenie[1]]+1);
    let skillsFinal = {};
    let skillsFromProf = profesja[3];
    const rollForSkills = (skill) => {
        let skillLvl = skillDice();
    skillsFinal[skill] = skillLvl;
    }
    skillsFromProf.forEach(rollForSkills());
    let skills = skillsRoll();
    console.log(skills, skillsFinal, pochodzenie, statsFinal, profesja,randomName);
    







export const skillsRoll = (skillsFromProf)=> {
    let chance = 9;
    let skillsListUnfiltered = ["kondycja", "plywanie","wspinaczka", "jazdaKonna", "powozenie", "ujezdzanie", "bijatyka", "bronReczna", "rzucanie", "samochod", "motocykl", "ciezarowka", "kradziezKieszonkowa", "otwieranieZamkow", "zwinneDlonie", "pistolety", "karabiny", "bronMaszynowa", "luk", "kusza", "proca", "zastraszanie", "perswazja", "zdolnosciPrzywodcze", "postrzeganieEmocji", "blef", "opiekaNadZwierzetami", "odpornoscNaBol", "niezlomnosc", "morale", "pierwszaPomoc", "leczenieRan", "leczenieChorob", "mechanika", "elektronika", "komputery", "maszynyCiezkie", "wozyBojowe", "kutry", "rusznikarstwo", "wyrzutnie", "materialyWybuchowe", "wyczucieKierunku", "przygotowaniePulapki", "tropienie", "nasluchiwanie", "wypatrywanie", "czujnosc", "skradanieSie", "ukrywanieSie", "maskowanie", "lowiectwo", "znajomoscTerenu", "zdobywanieWody",];
    let skillsList = [];
    let skills = [];
    filteringList(skillsFromProf);
    rollingChance();
    return skills;
    function filteringList(skillsFromProf){
        skillsListUnfiltered.forEach(skill=>{
            !skillsFromProf[skill] && skillsList.shift(skill); 
        })
    }
    function rollingChance(){
      if (Math.floor(((Math.random()*10)+1))<=chance){
        let trickLength;
        let trickIndex;
        switch (chance) {
          case 9:
            trickLength = skillsList.length;
            trickIndex = (Math.floor(((Math.random()*trickLength)+1)))
            skills.push(skillsList[trickIndex]);
            skillsList.splice(trickIndex, 1);
            chance = 6;
            break;
          case 6: 
            trickLength = skillsList.length;
            trickIndex = (Math.floor(((Math.random()*trickLength)+1)))
            skills.push(skillsList[trickIndex]);
            skillsList.splice(trickIndex, 1);
            chance = 3;
            break;
          case 3: 
            trickLength = skillsList.length;
            trickIndex = (Math.floor(((Math.random()*trickLength)+1)))
            skills.push(skillsList[trickIndex]);
            skillsList.splice(trickIndex, 1);
            chance = 1;
            break; 
          default: 
            trickLength = skillsList.length;
            trickIndex = (Math.floor(((Math.random()*trickLength)+1)))
            skills.push(skillsList[trickIndex]);
            skillsList.splice(trickIndex, 1);
            chance = 1;
            break; 
        }
        rollingChance();
    }else{
     
      console.log("Skills From the function:",skills);
      
      
    }
    
}
}
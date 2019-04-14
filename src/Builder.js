import { skillDice, tricksRoll, gender, imionaM, imionaF, nazwiska, profesje, pochodzenia, wiek, wzrost, waga, oczy, wlosy, spec, choroba, d20avfrom3 } from "./Rngs";

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
    let tricks = tricksRoll();
    console.log(tricks, skillsFinal, pochodzenie, statsFinal, profesja,randomName);
    







}
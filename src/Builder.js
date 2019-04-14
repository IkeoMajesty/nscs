const buildDependencies = ()=> {
    const shuffle= (array)=> {
        return array.slice().sort(() => Math.random() - 0.5);
      }
      


    let randomName;
    let genderOutcome = gender();
    if (genderOutcome == "M"){
            randomName = imieM();
    }else{
            randomName = imieF();
    };
    let profesja = profesje();
    let priorityStat1 = profesja[1];
    let priorityStat2 = profesja[2];
    let sixRolls = [d20avfrom3(),d20avfrom3(),d20avfrom3(),d20avfrom3(),d20avfrom3(),d20avfrom3()];
    (function myFunction() {
        sixRolls.sort(function(a, b){return b-a});
    })();
    sixRolls.pop();
    let priorityRoll1= sixRolls.shift();
    let priorityRoll2= sixRolls.shift();






}
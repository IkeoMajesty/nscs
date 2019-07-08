rngMagic = ()=> {
    const genderOutcome = gender();
    
    console.log(this.state)
    this.setState({
      male:genderOutcome.male,
      basic: {
        plec: genderOutcome.gender,
        imie: this.state.male ? imionaM() : imionaF(),
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
      },
      
    })
  }
dsds
  const tricksRoll = (props)=> {
    let chance = 9;
    let tricksList = [
    ["3,2,1 Bum", 				{Mechanika: 3, MaterialyWybuchowe: 3}],
    ["Aramis", 				{Zrecznosc: 14, BronReczna: 5}],
    ["Asekuracja",				{Wspinaczka: 2}],
    ["Aspiryna i Tik-Taki",			{LeczenieChorob: 4, Blef: 3}],
    ["Barbarka",				{Bijatyka: 5, Budowa: 14}],
    ["Berserker",				{OdpornoscNaBol: 6, Budowa: 12}],
    ["Bez Oddechu",				{Plywanie: 4}],
    ["Bez sprzętu, bez zabezpieczenia",	{Wspinaczka: 6, Zrecznosc: 10}],
    ["Bez sznurków",			{Pistolety: 3, Zrecznosc: 13, Percepcja: 12}],
    ["Bieg w ciszy",			{Kondycja: 3, Budowa: 12}],
    ["Bierz go!",				{OpiekaNadZwierzetami: 4, Charakter: 6}],
    ["Boa",					{BronReczna: 5, Zrecznosc: 12}],
    ["Cassanova/Mata Hari",			{Blef: 2, Perswazja: 2, ZwinneDlonie: 3}],
    ["Chłodnym okiem",			{Spryt: 14}],
    ["Ciszej niz cień",			{SkradanieSie: 6}],
    ["Człowiek, który kulom się nie kładnia",	{Morale: 3, Percepcja: 8}],
    ["Czterej pancerni",			{WozyBojowe: 3, MaszynyCiezkie: 3, OpiekaNadZwierzetami: 2}],  //Maszyny bojowe albo ciezkie
    ["Czuły spust",				{Percepcja: 14, BronMaszynowa: 4}],
    ["Dalszy zasięg",			{Kusza: 9, Budowa: 12}],
    ["Dawid",				{Proca: 4}],
    ["Dłuzszy strzaz",			{Luk: 9, Budowa: 12}],
    ["Dobry i zły glina",			{Spryt: 12}],
    ["Dobywanie",				{Pistolety: 5, BronReczna: 5, Zrecznosc: 12}],  //Pistolety albo reczna
    ["Dom na plecach",			{Kondycja: 4, Budowa: 13}],
    ["Doświadczony",			{Kondycja: 5, Budowa: 12}],
    ["Dystans",				{Rzucanie: 6, Budowa: 10}],
    ["Dziś wszystko, jutro nic",		{Kondycja: 3}],
    ["Flash",				{Bijatyka: 4, Kondycja: 3}],
    ["Garda",				{Bijatyka: 4, Budowa: 12}],
    ["Głaz",				{PrzygotowaniePulapki: 3, Charakter: 12}],
    ["Goła ręka",				{ZwienneDlonie: 4}],
    ["Granie na nerwach",			{Perswazja: 9, Spryt: 10}],
    ["Gunfight",				{Pistolety: 4, Zrecznosc: 14}],
    ["Hej, przystojniaku!",			{Perswazja: 4, Charakter: 14}], //tylko kobiety
    ["Hokus pokus",				{ZwinneDlonie: 4}],
    ["Immunitet",				{LeczenieChorob: 4, Budowa: 12}],
    ["Inspiracja",				{ZdolnosciPrzywodcze: 3}],
    ["Jest zajebiście",			{Blef: 6, Charakter: 16}],
    ["Kanały",				{WyczucieKierunku: 4, Spryt: 12}],
    ["Komandos",				{Zrecznosc: 14, Czujnosc: 3}],
    ["Kop z obrotu",			{Bijatyka: 4, Budowa: 8, Zrecznosc: 14}],
    ["Kot",					{Wspinaczka: 4, Zrecznosc: 12}],
    ["Kradziez w tłumie",			{KradziezKieszonkowa: 2, UkrywanieSie: 2}],
    ["Leśny diabeł",			{UkrywanieSie: 5, Lowiectwo: 2}],
    ["Ładowanie kuszy",			{Kusza: 6}],
    ["Ławnik",				{Budowa: 14}],
    ["Magazynek",				{Zrecznosc: 12, Pistolety: 3, Karabiny: 3}],  //Pistolety lub karabiny
    ["Mech bojowy",				{MaszynyCiezkie: 4, Spryt: 12}],
    ["Miotacz kul",				{Zrecznosc: 12, Percepcja: 10, WyczucieKierunku: 1, Rzucanie: 2}],
    ["Mistrz opacji uciskowej",		{PierwszaPomoc: 3, Blef: 3, Zrecznosc: 12}],
    ["Mistrz włóczni",			{BronReczna: 6, Zrecznosc: 14}],
    ["Myśleć jak maszyna",			{PostrzeganieEmocji: 11, Elektronika: 11, Mechanika: 11}], //Elektronika lub mechanika
    ["Na pewno działa",			{Rusznikarstwo: 4}],
    ["Naprawdę, to nie moja wina",		{Mechanika: 3, Spryt: 13}],
    ["Nauyczyciel",				{WiedzaOgolna: 4}],  //Tutaj nie wiedzialem co zrobic, bo to jednak dosc ruchoma umiejetnosc
    ["Niewrazliwość na lekkie rany",	{OdpornoscNaBol: 4, Charakter: 12}],
    ["No strzelaj, złomie!",		{Rusznikarstwo: 4}],
    ["Nozownik",				{Zrecznosc: 12, BronReczna: 6}],
    ["Obezwładnienie",			{Bijatyka: 2}],
    ["Odnjadywanie właściwej osoby",	{Spryt: 12, Charakter: 12}],
    ["Odporność na pogodę",			{ZnajomoscTerenu: 4}],
    ["Odtrucie zarcia",			{ZdobywanieWody: 6}],
    ["Odwrócenie uwagi",			{KradziezKieszonkowa: 4, Spryt: 10}],
    ["Origami",				{Bijatyka: 6, Zrecznosc: 12}],
    ["Ośmiornica",				{Bijatyka: 4, BronReczna: 4, Kondycja: 2, Spryt: 12}], //Bijatyka lub reczna
    ["Otwieranie zamków elektroniczntych",	{Elektronika: 2, OtwieranieZamkow: 2}],
    ["Padnij/powstań",			{Zrecznosc: 12, Budowa: 12}],
    ["Pajπk",				{Zrecznosc: 14, Wspinaczka: 8}],
    ["Pakowanie",				{Spryt: 10}],
    ["Pan plaster",				{PierwszaPomoc: 4, Spryt: 14}], //tylko kobieta
    ["Pewna ręka",				{Pistolety: 3, Karabiny: 3, Charakter: 12, Zrecznosc: 12}], //Pistolety lub karabiny
    ["Pierwotny instynkt",			{Zrecznosc: 12, Czujnosc: 2, Bijatyka: 3}],
    ["Pitbull",				{Czujnosc: 3, Percepcja: 13, Zrecznosc: 13}],
    ["Plug&Play",				{Komputery: 2, WozyBojowe: 2, MaszynyCiezkie: 2}], //Wozy lub maszyny
    ["Po schodach",				{ProwadzenieMotocykla: 3, Zrecznosc: 12}],
    ["Podrasowanie",			{Mechanika: 6, Elektronika: 6, Spryt: 12}],
    ["Połozenie motocykla",			{ProwadzenieMotocykla: 6, Zrecznosc: 12}],
    ["Prowizorka",				{Mechnika: 3, Elektronika: 3}], //Jedno z tych
    ["Rappelig", 				{Wspinaczka: 3}],
    ["Rodeo",				{Ujezdzanie: 5, JazdaKonna: 3}],
    ["Rozróba",				{Bijatyka: 6, Budowa: 12, Zrecznosc: 12}],
    ["Rrrroooaaarrr",			{Bijatyka: 3, Charakter: 16}],
    ["Ruchome gniazdo CKM",			{Budowa: 16, BronMaszynowa: 6}],
    ["Ruchomy cel",				{Pistolety: 4, Karabiny: 4, BronMaszynowa: 4, Spryt: 12, Percepcja: 10}],  //jedna z broni ma byc na 4
    ["Rzut oka",				{Mechanika: 4, Elektronika: 4, Spryt: 10}], //mechanika lub elektronika
    ["Sama se skocz po piwo",		{Niezlomnosc: 6, Charakter: 12}],
    ["Samuraj",				{Zrecznosc: 10, BronReczna: 3}],
    ["Sherlock Holmes",			{Tropienie: 6}],
    ["Siekierezada",			{Budowa: 13, Rzucanie: 4}],
    ["Siup dup",				{Zrecznosc: 14, Bijatyka: 4}],
    ["Skład amunicji",			{Proca: 2, Percepcja: 10}],
    ["Skok",				{Motocykl: 4, Charakter: 14}],
    ["Słuch absolutny",			{Nasluchiwanie: 4}],
    ["Snajper",				{Karabiny: 6, Percepcja: 14}],
    ["Spać na wodzie",			{Plywanie: 6}],
    ["Strzelec kieszonkowy",		{Pistolety: 2, Spryt: 10, Percepcja: 10}],
    ["Szachista",				{Bijatyka: 4, BronReczna: 4}], //Jedno z tych dwoch
    ["Szósty zmysł",			{Czujnosc: 7, Percepcja: 14}],
    ["Sztuczki karciane",			{ZwinneDlonie: 8, Spryt: 12}],
    ["Sztuka jest sztuka",			{Rusznikarstwo: 2}],
    ["Szybki Bill",				{Zrecznosc: 14}],
    ["Szybki rzut",				{Rzucanie: 4, Zrecznosc: 12}],
    ["Szybkie strzelanie",			{Luk: 4, Budowa: 12}],
    ["Śrutobranie",				{Karabiny: 4}],
    ["Taran",				{BronReczna: 4, Budowa: 14}],
    ["Taranowanie",				{Ciezarowka: 3, Samochod: 3}], //Jedno z dwoch
    ["Targowanie się",			{Niezlomnosc: 7, Perswazja: 4}],
    ["To się robi tak",			{ZadolnosciPrzywodcze: 3}],
    ["W mgnieniu oka",			{Percepcja: 12, Wypatrywanie: 4}],
    ["Walka dwiema broniami",		{BronReczna: 5, Zrecznosc: 12}],
    ["Wiatrak",				{Bijatyka: 2, Charakter: 12}],
    ["Wilk morski",				{}], //brak
    ["Właściwa twarz",			{Blef: 3, Percepcja: 10, Charakter: 10}],
    ["Wracajπcy bumerang",			{Bumerang: 4, Zrecznosc: 12}],
    ["Wyczekanie",				{Bijatyka: 6, BronReczna: 6, Percepcja: 12}], //bijatyka lub reczna
    ["Wyczucie emocji zwierzπt",		{PostrzeganieEmocji: 2, OpiekaNadZwierzetami: 2}],
    ["Wyczucie promieniowania",		{Czujnosc: 4, Spryt: 12}],
    ["Wyczucie zmian pogody",		{ZnajomoscTerenu: 2, Percepcja: 12}],
    ["Wyrabianie strzał lub bełtów",	{Luk: 2, Kusza: 2, Spryt: 10}],//kusza lub luk
    ["Wytrych",				{OtwieranieZamkow: 4, Zrecznosc: 12}],
    ["Zagadanie",				{Spryt: 12, Blef: 2, ZwinneDlonie: 2}],
    ["Zasłona",				{Bijatyka: 2, Budowa: 12}],
    ["Zgranie",				{Rzucanie: 2, Zrecznosc: 12}],
    ["Zielony balonik",			{Pistolety: 3, Percepcja: 14, Spryt: 10, Zrecznosc: 10}],
    ["Zły",					{Zastraszanie: 4, Charakter: 12}],
    ["Zmyłka",				{Bijatyka: 5, BronReczna: 5, Spryt: 12}], //Bijatyka lub reczna
    ["zelazne Racje",			{Lowiectwo: 2}]];
    let tricks = [];
    rollingChance();
    
    const rollingChnce = () => {
      if (Math.floor(((Math.random()*10)+1))<=chance){
        let trickLength;
        let trickIndex;
        switch (chance) {
          case 9:
            trickLength = tricksList.length;
            trickIndex = (Math.floor(((Math.random()*trickLength)+1)))
            tricks.push(tricksList[trickIndex]);
            array.splice(trickIndex, 1);
            chance = 6;
            break;
          case 6: 
            trickLength = tricksList.length;
            trickIndex = (Math.floor(((Math.random()*trickLength)+1)))
            tricks.push(tricksList[trickIndex]);
            array.splice(trickIndex, 1);
            chance = 3;
            break;
          case 3: 
            trickLength = tricksList.length;
            trickIndex = (Math.floor(((Math.random()*trickLength)+1)))
            tricks.push(tricksList[trickIndex]);
            array.splice(trickIndex, 1);
            chance = 1;
            break; 
          case 1: 
            trickLength = tricksList.length;
            trickIndex = (Math.floor(((Math.random()*trickLength)+1)))
            tricks.push(tricksList[trickIndex]);
            array.splice(trickIndex, 1);
            chance = 1;
            break; 
        }
        rollingChance();
    }else{
      return tricks;
    }
  }
} 

library underscore //TODO

["Dobywanie",				{pistolety: 5, bronReczna: 5, zr: 12}]

let profile = {};

const o2 = {p:0, ...profile[2]}

const compare = (requirements, o2) => {
  const result = true;
  Object.keys(requirements).forEach(key => {

  if (o2.hasOWnPorprtt(key) && o2[key] !== requirements[key]) {
    result = false;
  }
  
  })

}





    ["Mafiozo", "ch", "sp", ["zastraszanie", "perswazja", "blef", "niezlomnosc", "pistolety", "postrzeganieEmocji", "elektronika" ]],
    ["Medyk", "sp", "pr", ["pierwszaPomoc", "leczenieRan", "leczenieChorob", "czujnosc", "odpornoscNaBol", "morale", "wypatrywanie" ]],
    ["Monter", "sp", "pr", ["komputery", "elektronika", "mechanika", "samochody", "ciezarowki", "matematyka", "fizyka" ]],
    ["Najemnik", "zr", "bu", ["karabiny", "bronReczna", "kondycja", "odpornoscNaBol", "niezlomnosc", "samochod", "plywanie" ]],
    ["Ochroniarz", "bu", "zr", ["kondycja", "bijatyka", "bronReczna", "pistolety", "niezlomnosc", "odpornoscNaBol", "czujnosc" ]],
    ["Sędzia", "ch", "zr", ["postrzeganieEmocji", "perswazja", "karabiny", "zdolnosciPrzywodcze", "morale", "zastraszanie", "pistolety"]],
    ["Spec", "sp", "pr", ["elektronika", "matematyka", "rusznikarstwo", "materialyWybuchowe", "mechanika", "maszynyCiezkie", "wozyBojowe" ]],
    ["Szaman", "ch", "pr", ["niezlomnosc", "zdolnosciPrzywodcze", "nasluchiwanie", "znajomoscTerenu", "odpornoscNaBol", "zdobywanieWody", "postrzeganieEmocji" ]],
    ["Szczur", "pr", "sp", ["znajomoscTerenu", "maskowanie", "ukrywanieSie", "czujnosc", "wyczucieKierunku", "perswazja", "niezlomnosc" ]],
    ["Treser bestii", "ch", "zr", ["opiekaNadZwierzetami", "perswazja", "pistolety", "niezlomnosc", "zastraszanie", "bijatyka", "odpornoscNaBol" ]],
    ["Tropiciel", "pr", "zr", ["tropienie", "karabiny", "wyczucieKierunku", "znajomoscTerenu", "bronReczna", "skradanieSie", "przygotowaniePulapek" ]],
    ["Wojownik autostrady", "zr", "bu", ["samochody", "pistolety", "morale", "rzucanie", "niezlomnosc", "zastraszanie", "kondycja" ]],
    ["Wojownik klanu", "bu", "zr", ["kondycja", "bronReczna", "wspinaczka", "niezlomnosc", "bijatyka", "rzucanie", "luk" ]],
    ["Zabójca", "zr", "sp", ["bronReczna", "pistolety", "skradanieSie", "maskowanie", "morale", "czujnosc", "niezlomnosc" ]],
    ["Zabójca maszyn", "zr", "sp", ["karabiny", "rzucanie", "elektronika", "komputery", "ciezarowki", "matematyka", "maszynyCiezkie"]],
    ["Złodziej", "zr", "sp", ["kradziezKieszonkowa", "otwieranieZamkow", "elektronika", "zwinneDlonie", "bronReczna", "skradanieSie" ]],
    ["Żołnierz", "zr", "bu", ["karabiny", "odpornoscNaBol", "bronReczna", "bijatyka", "kondycja", "plywanie", "morale" ]],







    skillsFromProf.forEach(skill => {
      let skillLvl = skillDice();
  skillsFinal[skill] = skillLvl;

     
      // !("Bu" in statsFinal) ? statsFinal.Bu = statRolls.shift() : null;
      // statsFinal.Bu = statsFinal.hasOwnProperty('Bu') ? statRolls.shift() : null
  
  




export const skillsRoll = (skillsFromProf)=> {
    let chance = 9;
    let tricksListUnfiltered = ["kondycja", "plywanie","wspinaczka", "jazdaKonna", "powozenie", "ujezdzanie", "bijatyka", "bronReczna", "rzucanie", "samochod", "motocykl", "ciezarowka", "kradziezKieszonkowa", "otwieranieZamkow", "zwinneDlonie", "pistolety", "karabiny", "bronMaszynowa", "luk", "kusza", "proca", "zastraszanie", "perswazja", "zdolnosciPrzywodcze", "postrzeganieEmocji", "blef", "opiekaNadZwierzetami", "odpornoscNaBol", "niezlomnosc", "morale", "pierwszaPomoc", "leczenieRan", "leczenieChorob", "mechanika", "elektronika", "komputery", "maszynyCiezkie", "wozyBojowe", "kutry", "rusznikarstwo", "wyrzutnie", "materialyWybuchowe", "wyczucieKierunku", "przygotowaniePulapki", "tropienie", "nasluchiwanie", "wypatrywanie", "czujnosc", "skradanieSie", "ukrywanieSie", "maskowanie", "lowiectwo", "znajomoscTerenu", "zdobywanieWody",];
    let tricksList = [];
    let tricks = [];
    filteringList(skillsFromProf);
    rollingChance();
    return tricks;
    function filteringList(skillsFromProf){
        tricksListUnfiltered.forEach(skill=>{
            !skillsFromProf[skill] && tricksList.shift(skill); 
        })
    }
    function rollingChance(){
      if (Math.floor(((Math.random()*10)+1))<=chance){
        let trickLength;
        let trickIndex;
        switch (chance) {
          case 9:
            trickLength = tricksList.length;
            trickIndex = (Math.floor(((Math.random()*trickLength)+1)))
            tricks.push(tricksList[trickIndex]);
            tricksList.splice(trickIndex, 1);
            chance = 6;
            break;
          case 6: 
            trickLength = tricksList.length;
            trickIndex = (Math.floor(((Math.random()*trickLength)+1)))
            tricks.push(tricksList[trickIndex]);
            tricksList.splice(trickIndex, 1);
            chance = 3;
            break;
          case 3: 
            trickLength = tricksList.length;
            trickIndex = (Math.floor(((Math.random()*trickLength)+1)))
            tricks.push(tricksList[trickIndex]);
            tricksList.splice(trickIndex, 1);
            chance = 1;
            break; 
          default: 
            trickLength = tricksList.length;
            trickIndex = (Math.floor(((Math.random()*trickLength)+1)))
            tricks.push(tricksList[trickIndex]);
            tricksList.splice(trickIndex, 1);
            chance = 1;
            break; 
        }
        rollingChance();
    }else{
     
      console.log("From the function:",tricks);
      
      
    }
    
}
}
const tricks = [["name", {stat:2, stat2:3, stat3:4}]]
const currentStats={...skillsFinal, ...statsFinal}
let filteredTricks = [];
const filterTricks = (currentStats){
  tricks.forEach(trick=>{
    trick[1].forEach(req=>{
      (currentStats[req]==req)&&filteredTricks.push(trick)
    })
  })
}





const roll = () => {

  const dice = Math.floor((Math.random()*20)+1)
  if (dice < 6){
    dice = 6
  }
  return dice;

}
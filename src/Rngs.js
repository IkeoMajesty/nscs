

export const gender = (props)=> {

    return [{gender:"M", male: true}, {gender: "F", male: false}].rngsus()
};
export const imionaM = (props)=> {

    return ['Adam','Adrian','Alan','Alexander','Andrew','Anthony','Austin','Benjamin','Blake','Boris','Brandon','Brian','Cameron','Carl','Charles','Christian','Christopher','Colin','Connor','Dan','David','Dominic','Dylan','Edward','Eric','Evan','Frank','Gavin','Gordon','Harry','Ian','Isaac','Jack','Jacob','Jake','James','Jason','Joe','John','Jonathan','Joseph','Joshua','Julian','Justin','Keith','Kevin','Leonard','Liam','Lucas','Luke','Matt','Max','Michael','Nathan','Neil','Nicholas','Oliver','Owen','Paul','Peter','Phil','Piers','Richard','Robert','Ryan','Sam','Sean','Sebastian','Simon','Stephen','Steven','Stewart','Thomas','Tim','Trevor','Victor','Warren','William'].rngsus()
};
export const imionaF = (props)=> {

    return ['Abigail','Alexandra','Alison','Amanda','Amelia','Amy','Andrea','Angela','Anna','Anne','Audrey','Ava','Bella','Bernadette','Carol','Caroline','Carolyn','Chloe','Claire','Deirdre','Diana','Diane','Donna','Dorothy','Elizabeth','Ella','Emily','Emma','Faith','Felicity','Fiona','Gabrielle','Grace','Hannah','Heather','Irene','Jan','Jane','Jasmine','Jennifer','Jessica','Joan','Joanne','Julia','Karen','Katherine','Kimberly','Kylie','Lauren','Leah','Lillian','Lily','Lisa','Madeleine','Maria','Mary','Megan','Melanie','Michelle','Molly','Natalie','Nicola','Olivia','Penelope','Pippa','Rachel','Rebecca','Rose','Ruth','Sally','Samantha','Sarah','Sonia','Sophie','Stephanie','Sue','Theresa','Tracey','Una','Vanessa','Victoria','Virginia','Wanda','Wendy','Yvonne','Zoe'].rngsus()
};
export const nazwiska = (props)=> {

    return ['Abraham','Allan','Alsop','Anderson','Arnold','Avery','Bailey','Baker','Ball','Bell','Berry','Black','Blake','Bond','Bower','Brown','Buckland','Burgess','Butler','Cameron','Campbell','Carr','Chapman','Churchill','Clark','Clarkson','Coleman','Cornish','Davidson','Davies','Dickens','Dowd','Duncan','Dyer','Edmunds','Ellison','Ferguson','Fisher','Forsyth','Fraser','Gibson','Gill','Glover','Graham','Grant','Gray','Greene','Hamilton','Hardacre','Harris','Hart','Hemmings','Henderson','Hill','Hodges','Howard','Hudson','Hughes','Hunter','Ince','Jackson','James','Johnston','Jones','Kelly','Kerr','King','Knox','Lambert','Langdon','Lawrence','Lee','Lewis','Lyman','MacDonald','Mackay','Mackenzie','MacLeod','Manning','Marshall','Martin','Mathis','May','McDonald','McLean','McGrath','Metcalfe','Miller','Mills','Mitchell','Morgan','Morrison','Murray','Nash','Newman','Nolan','North','Ogden','Oliver','Paige','Parr','Parsons','Paterson','Payne','Peake','Peters','Piper','Poole','Powell','Pullman','Quinn','Rampling','Randall','Rees','Reid','Roberts','Robertson','Ross','Russell','Rutherford','Sanderson','Scott','Sharp','Short','Simpson','Skinner','Slater','Smith','Springer','Stewart','Sutherland','Taylor','Terry','Thomson','Tucker','Turner','Underwood','Vance','Vaughan','Walker','Wallace','Walsh','Watson','Welch','White','Wilkins','Wilson','Wright','Young'].rngsus()
};
export const profesje = (props)=> {
   return [
    ["Chemik", "sp", "pr", ["pierwszaPomoc", "leczenieRan", "leczenieChorob", "materialyWybuchowe", "zdobywanieWody" ]], 
    ["Ganger", "zr", "bu", ["kodycja", "bijatyka", "bronReczna", "motocykl", "samochod", "pistolety", "karabiny", "zastraszanie" ]], 
    ["Gladiator", "zr", "bu", ["kondycja", "bijatyka", "bronReczna", "rzucanie", "proca", "odpornoscNaBol", "lowiectwo" ]], 
    ["Handlarz", "ch", "sp", ["postrzeganieEmocji", "blef", "kondycja", "ciezarowka", "samochod", "perswazja"]],
    ["Kaznodzieja nowej ery", "ch", "sp", ["zdolnosciPrzywodcze", "blef", "postrzeganieEmocji", "niezlomnosc", "morale", "karabiny" ]],
    ["Kowboj", "zr", "pr", ["jazdaKonna", "powozenie", "ujezdzanie", "bijatyka", "rzucanie", "pistolety", "opiekaNadZwierzetami", "lowiectwo"]],
    ["Kurier", "zr", "ch", ["samochod", "motocykl", "zwienneDlonie", "pistolety", "perswazja", "niezlomnosc", "wyczucieKierunku", "znajomoscTerenu"]],
    ["Łowca", "pr", "zr", ["kondycja", "wspinaczka", "kradziezKieszonkowa", "otwieranieZamkow", "zwinneDlonie", "niezlomnosc", "elektronika", "mechanika", "znajomoscTerenu"]],
    ["Łowca mutantów", "zr", "bu", ["bronReczna", "karabiny", "tropienie", "przygotowaniePulapki", "skradanieSie", "ukrywanieSie", "czujnosc", "maskowanie", "lowiectwo"]],
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
    
].rngsus()};

export const pochodzenia = (props)=> {

    return [
        ["NTZI", "zr"],
        ["Detroit", "zr"],
        ["Fed. Appalachow", "ch"],
        ["Czlowiek Pustyni", "pr"], 
        ["Miami", "pr"], 
        ["Mississipi", "pr"], 
        ["Nowy Jork", "ch"], 
        ["Południowa Hagemonia", "bu"], 
        ["Posterunek", "sp"], 
        ["Salt Lake City", "sp"], 
        ["Texas", "bu"], 
        ["Vegas","zr"]].rngsus()
};
export const wiek = (props)=> {

    return Math.floor(((Math.random()*30))+18)
};
export const wzrost = (props)=> {
    return ["Olbrzymi", "Wysoki","Wysoki", "Sredni","Sredni","Sredni","Sredni","Sredni", "Niski","Niski", "Karlowatość", ].rngsus()
    //return Math.floor(((Math.random()*50))+140)
};
export const waga = (props)=> {
    return ["Otyłość", "Ponad przeciętna", "Przecietna","Przecietna","Przecietna","Przecietna","Przecietna","Przecietna", "Niedowaga", "Niedowaga", "Wychudzenie"].rngsus()
    //return Math.floor(((Math.random()*30))+40)
};
export const oczy = (props)=> {

    return ["Niebieskie", "Szare", "Zielone", "Brazowe", "Czarne"].rngsus()
};
export const wlosy = (props)=> {

    return ["Blond", "Braz", "Rude", "Czarne", "Kolorowe"].rngsus()
};
export const spec = (props)=> {

    return ["Technik", "Wojownik", "Cwaniak", "Ranger"].rngsus()
};
export const choroba = (props)=> {

    return ["Zapalenie płuc", "Gorączka SN", "PGK", "Mount Rushmore", "Syndrom Obcego", "Chore Nery", "Alergie", "Szaleństwo Bostońskie", "Syndrom Thurmana", "Drgawki", "Drętwota Hollywood", "Osteoporoza", "Zawroty Głowy", "Niewydolność krązenia", "Anemia", "Morbus Dexteri", "Syndrom Draculi", "VTDS", "Zdrowy"].rngsus()
};
export const d20avfrom3 = (props)=> {
    const d201 = Math.floor(((Math.random()*15)+6));
    const d202 = Math.floor(((Math.random()*15)+6));
    const d203 = Math.floor(((Math.random()*15)+6));
    return (Math.floor((d201+d202+d203)/3))
};
export const skillsList = (props) => {
    return ["kondycja", "plywanie","wspinaczka", "jazdaKonna", "powozenie", "ujezdzanie", "bijatyka", "bronReczna", "rzucanie", "samochod", "motocykl", "ciezarowka", "kradziezKieszonkowa", "otwieranieZamkow", "zwinneDlonie", "pistolety", "karabiny", "bronMaszynowa", "luk", "kusza", "proca", "zastraszanie", "perswazja", "zdolnosciPrzywodcze", "postrzeganieEmocji", "blef", "opiekaNadZwierzetami", "odpornoscNaBol", "niezlomnosc", "morale", "pierwszaPomoc", "leczenieRan", "leczenieChorob", "mechanika", "elektronika", "komputery", "maszynyCiezkie", "wozyBojowe", "kutry", "rusznikarstwo", "wyrzutnie", "materialyWybuchowe", "wyczucieKierunku", "przygotowaniePulapki", "tropienie", "nasluchiwanie", "wypatrywanie", "czujnosc", "skradanieSie", "ukrywanieSie", "maskowanie", "lowiectwo", "znajomoscTerenu", "zdobywanieWody",].rngsus() 
};
export const tricksRoll = (currentStats)=> {
    let chance = 9;
    let tricksUnfiltered = [
    ["3,2,1 Bum", 				{mechanika: 3, materialyWybuchowe: 3}],
    ["Aramis", 				{zr: 14, bronReczna: 5}],
    ["Asekuracja",				{wspinaczka: 2}],
    ["Aspiryna i Tik-Taki",			{leczenieChorob: 4, blef: 3}],
    ["Barbarka",				{bijatyka: 5, bu: 14}],
    ["Berserker",				{odpornoscNaBol: 6, bu: 12}],
    ["Bez Oddechu",				{plywanie: 4}],
    ["Bez sprzętu, bez zabezpieczenia",	{wspinaczka: 6, zr: 10}],
    ["Bez sznurków",			{pistolety: 3, zr: 13, pr: 12}],
    ["Bieg w ciszy",			{kondycja: 3, bu: 12}],
    ["Bierz go!",				{opiekaNadZwierzetami: 4, ch: 6}],
    ["Boa",					{bronReczna: 5, zr: 12}],
    ["Cassanova/Mata Hari",			{blef: 2, perswazja: 2, zwinneDlonie: 3}],
    ["Chłodnym okiem",			{sp: 14}],
    ["Ciszej niz cień",			{skradanieSie: 6}],
    ["Człowiek, który kulom się nie kładnia",	{morale: 3, pr: 8}],
    ["Czterej pancerni",			{wozyBojowe: 3, maszynyCiezkie: 3, opiekaNadZwierzetami: 2}],  //Maszyny bojowe albo ciezkie
    ["Czuły spust",				{pr: 14, bronMaszynowa: 4}],
    ["Dalszy zasięg",			{kusza: 9, bu: 12}],
    ["Dawid",				{proca: 4}],
    ["Dłuzszy strzaz",			{luk: 9, bu: 12}],
    ["Dobry i zły glina",			{sp: 12}],
    ["Dobywanie",				{pistolety: 5, bronReczna: 5, zr: 12}],  //Pistolety albo reczna
    ["Dom na plecach",			{kondycja: 4, bu: 13}],
    ["Doświadczony",			{kondycja: 5, bu: 12}],
    ["Dystans",				{rzucanie: 6, bu: 10}],
    ["Dziś wszystko, jutro nic",		{kondycja: 3}],
    ["Flash",				{bijatyka: 4, kondycja: 3}],
    ["Garda",				{bijatyka: 4, bu: 12}],
    ["Głaz",				{przygotowaniePulapki: 3, ch: 12}],
    ["Goła ręka",				{zwienneDlonie: 4}],
    ["Granie na nerwach",			{perswazja: 9, sp: 10}],
    ["Gunfight",				{pistolety: 4, zr: 14}],
    ["Hej, przystojniaku!",			{perswazja: 4, ch: 14}], //tylko kobiety
    ["Hokus pokus",				{zwinneDlonie: 4}],
    ["Immunitet",				{leczenieChorob: 4, bu: 12}],
    ["Inspiracja",				{zdolnosciPrzywodcze: 3}],
    ["Jest zajebiście",			{blef: 6, ch: 16}],
    ["Kanały",				{wyczucieKierunku: 4, sp: 12}],
    ["Komandos",				{zr: 14, czujnosc: 3}],
    ["Kop z obrotu",			{bijatyka: 4, bu: 8, zr: 14}],
    ["Kot",					{wspinaczka: 4, zr: 12}],
    ["Kradziez w tłumie",			{kradziezKieszonkowa: 2, ukrywanieSie: 2}],
    ["Leśny diabeł",			{ukrywanieSie: 5, lowiectwo: 2}],
    ["Ładowanie kuszy",			{kusza: 6}],
    ["Ławnik",				{bu: 14}],
    ["Magazynek",				{zr: 12, pistolety: 3, karabiny: 3}],  //Pistolety lub karabiny
    ["Mech bojowy",				{maszynyCiezkie: 4, sp: 12}],
    ["Miotacz kul",				{zr: 12, pr: 10, wyczucieKierunku: 1, rzucanie: 2}],
    ["Mistrz opacji uciskowej",		{pierwszaPomoc: 3, blef: 3, zr: 12}],
    ["Mistrz włóczni",			{bronReczna: 6, zr: 14}],
    ["Myśleć jak maszyna",			{postrzeganieEmocji: 11, elektronika: 11, mechanika: 11}], //Elektronika lub mechanika
    ["Na pewno działa",			{rusznikarstwo: 4}],
    ["Naprawdę, to nie moja wina",		{mechanika: 3, sp: 13}],
    ["Nauyczyciel",				{wiedzaOgolna: 4}],  //Tutaj nie wiedzialem co zrobic, bo to jednak dosc ruchoma umiejetnosc
    ["Niewrazliwość na lekkie rany",	{odpornoscNaBol: 4, ch: 12}],
    ["No strzelaj, złomie!",		{rusznikarstwo: 4}],
    ["Nozownik",				{zr: 12, bronReczna: 6}],
    ["Obezwładnienie",			{bijatyka: 2}],
    ["Odnjadywanie właściwej osoby",	{sp: 12, ch: 12}],
    ["Odporność na pogodę",			{znajomoscTerenu: 4}],
    ["Odtrucie zarcia",			{zdobywanieWody: 6}],
    ["Odwrócenie uwagi",			{kradziezKieszonkowa: 4, sp: 10}],
    ["Origami",				{bijatyka: 6, zr: 12}],
    ["Ośmiornica",				{bijatyka: 4, bronReczna: 4, kondycja: 2, sp: 12}], //Bijatyka lub reczna
    ["Otwieranie zamków elektroniczntych",	{elektronika: 2, otwieranieZamkow: 2}],
    ["Padnij/powstań",			{zr: 12, bu: 12}],
    ["Pajπk",				{zr: 14, wspinaczka: 8}],
    ["Pakowanie",				{sp: 10}],
    ["Pan plaster",				{pierwszaPomoc: 4, sp: 14}], //tylko kobieta
    ["Pewna ręka",				{pistolety: 3, karabiny: 3, ch: 12, zr: 12}], //Pistolety lub karabiny
    ["Pierwotny instynkt",			{zr: 12, czujnosc: 2, bijatyka: 3}],
    ["Pitbull",				{czujnosc: 3, pr: 13, zr: 13}],
    ["Plug&Play",				{komputery: 2, wozyBojowe: 2, maszynyCiezkie: 2}], //Wozy lub maszyny
    ["Po schodach",				{motocykl: 3, zr: 12}],
    ["Podrasowanie",			{mechanika: 6, elektronika: 6, sp: 12}],
    ["Połozenie motocykla",			{motocykl: 6, zr: 12}],
    ["Prowizorka",				{mechnika: 3, elektronika: 3}], //Jedno z tych
    ["Rappelig", 				{wspinaczka: 3}],
    ["Rodeo",				{ujezdzanie: 5, jazdaKonna: 3}],
    ["Rozróba",				{bijatyka: 6, bu: 12, zr: 12}],
    ["Rrrroooaaarrr",			{bijatyka: 3, ch: 16}],
    ["Ruchome gniazdo CKM",			{bu: 16, bronMaszynowa: 6}],
    ["Ruchomy cel",				{pistolety: 4, karabiny: 4, bronMaszynowa: 4, sp: 12, pr: 10}],  //jedna z broni ma byc na 4
    ["Rzut oka",				{mechanika: 4, elektronika: 4, sp: 10}], //mechanika lub elektronika
    ["Sama se skocz po piwo",		{niezlomnosc: 6, ch: 12}],
    ["Samuraj",				{zr: 10, bronReczna: 3}],
    ["Sherlock Holmes",			{tropienie: 6}],
    ["Siekierezada",			{bu: 13, rzucanie: 4}],
    ["Siup dup",				{zr: 14, bijatyka: 4}],
    ["Skład amunicji",			{proca: 2, pr: 10}],
    ["Skok",				{motocykl: 4, ch: 14}],
    ["Słuch absolutny",			{nasluchiwanie: 4}],
    ["Snajper",				{karabiny: 6, pr: 14}],
    ["Spać na wodzie",			{plywanie: 6}],
    ["Strzelec kieszonkowy",		{pistolety: 2, sp: 10, pr: 10}],
    ["Szachista",				{bijatyka: 4, bronReczna: 4}], //Jedno z tych dwoch
    ["Szósty zmysł",			{czujnosc: 7, pr: 14}],
    ["Sztuczki karciane",			{zwinneDlonie: 8, sp: 12}],
    ["Sztuka jest sztuka",			{rusznikarstwo: 2}],
    ["Szybki Bill",				{zr: 14}],
    ["Szybki rzut",				{rzucanie: 4, zr: 12}],
    ["Szybkie strzelanie",			{luk: 4, bu: 12}],
    ["Śrutobranie",				{karabiny: 4}],
    ["Taran",				{bronReczna: 4, bu: 14}],
    ["Taranowanie",				{ciezarowka: 3, samochod: 3}], //Jedno z dwoch
    ["Targowanie się",			{niezlomnosc: 7, perswazja: 4}],
    ["To się robi tak",			{zdolnosciPrzywodcze: 3}],
    ["W mgnieniu oka",			{pr: 12, wypatrywanie: 4}],
    ["Walka dwiema broniami",		{bronReczna: 5, zr: 12}],
    ["Wiatrak",				{bijatyka: 2, ch: 12}],
    ["Wilk morski",				{}], //brak
    ["Właściwa twarz",			{blef: 3, pr: 10, ch: 10}],
    ["Wracajπcy bumerang",			{bumerang: 4, zr: 12}],
    ["Wyczekanie",				{bijatyka: 6, bronReczna: 6, pr: 12}], //bijatyka lub reczna
    ["Wyczucie emocji zwierzπt",		{postrzeganieEmocji: 2, opiekaNadZwierzetami: 2}],
    ["Wyczucie promieniowania",		{czujnosc: 4, sp: 12}],
    ["Wyczucie zmian pogody",		{znajomoscTerenu: 2, pr: 12}],
    ["Wyrabianie strzał lub bełtów",	{luk: 2, kusza: 2, sp: 10}],//kusza lub luk
    ["Wytrych",				{otwieranieZamkow: 4, zr: 12}],
    ["Zagadanie",				{sp: 12, blef: 2, zwinneDlonie: 2}],
    ["Zasłona",				{bijatyka: 2, bu: 12}],
    ["Zgranie",				{rzucanie: 2, zr: 12}],
    ["Zielony balonik",			{pistolety: 3, pr: 14, sp: 10, zr: 10}],
    ["Zły",					{zastraszanie: 4, ch: 12}],
    ["Zmyłka",				{bijatyka: 5, bronReczna: 5, sp: 12}], //Bijatyka lub reczna
    ["zelazne Racje",			{lowiectwo: 2}]];
    let tricksList = [];
    let tricks = [];
    filterTricks(currentStats)
    rollingChance();
    !tricks && (tricks=[])
    console.log(tricks);
    return tricks;
    
function filterTricks(currentStats){
  tricksUnfiltered.forEach(trick=>{
      let pass=true;
      
    Object.keys(trick[1]).forEach(req=>{
      (currentStats[req]>=trick[1][req]) ? pass=pass : pass = false; 
    })
    if(pass){tricksList.push(trick); console.log(trick);
    }
  })
}
function rollingChance(){
    if(!tricksList){
        return };
      if (Math.floor(((Math.random()*10)+1))<=chance){
        let trickLength;
        let trickIndex;
        switch (chance) {
          case 9:
            trickLength = tricksList.length;
            trickIndex = (Math.floor(((Math.random()*trickLength))))
            tricks.push(tricksList[trickIndex]);
            console.log(tricks);
            tricksList.splice(trickIndex, 1);
            chance = 6;
            break;
          case 6: 
            trickLength = tricksList.length;
            trickIndex = (Math.floor(((Math.random()*trickLength))))
            tricks.push(tricksList[trickIndex]);
            tricksList.splice(trickIndex, 1);
            chance = 3;
            break;
          case 3: 
            trickLength = tricksList.length;
            trickIndex = (Math.floor(((Math.random()*trickLength))))
            tricks.push(tricksList[trickIndex]);
            tricksList.splice(trickIndex, 1);
            chance = 1;
            break; 
          default: 
            trickLength = tricksList.length;
            trickIndex = (Math.floor(((Math.random()*trickLength))))
            tricks.push(tricksList[trickIndex]);
            tricksList.splice(trickIndex, 1);
            chance = 1;
            break; 
        }
        rollingChance();
    }else{
     
      console.log('Wszystkie sztuczki wraz z wymogami zostaly spisane przez Kamila "Kowboja" Miecielica!!!');
      
      
    }
    
}
}
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
            !skillsFromProf[skill] && skillsList.push(skill);
            
             
        })
    }
    function rollingChance(){
      if (Math.floor(((Math.random()*10)+1))<=chance){
        let trickLength;
        let trickIndex;
        switch (chance) {
          case 9:
            trickLength = skillsList.length;
            trickIndex = (Math.floor(((Math.random()*trickLength))))
            skills.push(skillsList[trickIndex]);
            skillsList.splice(trickIndex, 1);
            chance = 6;
            break;
          case 6: 
            trickLength = skillsList.length;
            trickIndex = (Math.floor(((Math.random()*trickLength))))
            skills.push(skillsList[trickIndex]);
            skillsList.splice(trickIndex, 1);
            chance = 3;
            break;
          case 3: 
            trickLength = skillsList.length;
            trickIndex = (Math.floor(((Math.random()*trickLength))))
            skills.push(skillsList[trickIndex]);
            skillsList.splice(trickIndex, 1);
            chance = 1;
            break; 
          default: 
            trickLength = skillsList.length;
            trickIndex = (Math.floor(((Math.random()*trickLength))))
            skills.push(skillsList[trickIndex]);
            skillsList.splice(trickIndex, 1);
            chance = 1;
            break; 
        }
        rollingChance();
    }else{
     
      // console.log("Skills added randomly:",skills);
      
      
    }
    
}
}
export const skillDice = ()=> {
    return [1,2,2,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,6,7,8].rngsus()
};

 
       

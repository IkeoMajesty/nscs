import React from 'react'

export const imiona = (props)=> {

    return ['Adam','Adrian','Alan','Alexander','Andrew','Anthony','Austin','Benjamin','Blake','Boris','Brandon','Brian','Cameron','Carl','Charles','Christian','Christopher','Colin','Connor','Dan','David','Dominic','Dylan','Edward','Eric','Evan','Frank','Gavin','Gordon','Harry','Ian','Isaac','Jack','Jacob','Jake','James','Jason','Joe','John','Jonathan','Joseph','Joshua','Julian','Justin','Keith','Kevin','Leonard','Liam','Lucas','Luke','Matt','Max','Michael','Nathan','Neil','Nicholas','Oliver','Owen','Paul','Peter','Phil','Piers','Richard','Robert','Ryan','Sam','Sean','Sebastian','Simon','Stephen','Steven','Stewart','Thomas','Tim','Trevor','Victor','Warren','William'].rngsus()
};
export const nazwiska = (props)=> {

    return ['Abraham','Allan','Alsop','Anderson','Arnold','Avery','Bailey','Baker','Ball','Bell','Berry','Black','Blake','Bond','Bower','Brown','Buckland','Burgess','Butler','Cameron','Campbell','Carr','Chapman','Churchill','Clark','Clarkson','Coleman','Cornish','Davidson','Davies','Dickens','Dowd','Duncan','Dyer','Edmunds','Ellison','Ferguson','Fisher','Forsyth','Fraser','Gibson','Gill','Glover','Graham','Grant','Gray','Greene','Hamilton','Hardacre','Harris','Hart','Hemmings','Henderson','Hill','Hodges','Howard','Hudson','Hughes','Hunter','Ince','Jackson','James','Johnston','Jones','Kelly','Kerr','King','Knox','Lambert','Langdon','Lawrence','Lee','Lewis','Lyman','MacDonald','Mackay','Mackenzie','MacLeod','Manning','Marshall','Martin','Mathis','May','McDonald','McLean','McGrath','Metcalfe','Miller','Mills','Mitchell','Morgan','Morrison','Murray','Nash','Newman','Nolan','North','Ogden','Oliver','Paige','Parr','Parsons','Paterson','Payne','Peake','Peters','Piper','Poole','Powell','Pullman','Quinn','Rampling','Randall','Rees','Reid','Roberts','Robertson','Ross','Russell','Rutherford','Sanderson','Scott','Sharp','Short','Simpson','Skinner','Slater','Smith','Springer','Stewart','Sutherland','Taylor','Terry','Thomson','Tucker','Turner','Underwood','Vance','Vaughan','Walker','Wallace','Walsh','Watson','Welch','White','Wilkins','Wilson','Wright','Young'].rngsus()
};
export const profesje = (props)=> {

    return ["Chemik", "Ganger", "Gladiator", "Handlarz","Kaznodzieja nowej ery","Kowboj","Kurier","Łowca","Łowca mutantów","Mafiozo","Medyk","Monter","Najemnik","Ochroniarz","Sędzia","Spec","Szaman","Szczur","Treser bestii","Tropiciel","Wojownik autostrady","Wojownik klanu","Zabójca","Zabójca maszyn","Złodziej","Żołnierz",].rngsus()
};
export const pochodzenia = (props)=> {

    return ["NTZI", "Detroit", "Fed. Appalachow", "Czlowiek Pustyni", "Miami", "Mississipi", "Nowy Jork", "Południowa Hagemonia", "Posterunek", "Salt Lake City", "Texas", "Vegas"].rngsus()
};
export const wiek = (props)=> {

    return Math.floor(((Math.random()*30))+18)
};
export const wzrost = (props)=> {

    return Math.floor(((Math.random()*50))+140)
};
export const waga = (props)=> {

    return Math.floor(((Math.random()*30))+40)
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
    const d201 = Math.floor(((Math.random()*20)+1));
    const d202 = Math.floor(((Math.random()*20)+1));
    const d203 = Math.floor(((Math.random()*20)+1));
    return (Math.floor((d201+d202+d203)/3))
};



 
       



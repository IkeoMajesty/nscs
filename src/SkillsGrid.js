import React from 'react';
import Skills from "./Skills.js"

const skillsGrid = (props)=> {

    return (
    <div> 
        <div className="dataHeaderSk">
            <Skills styleP="skillContenerTZr" nameM="Walka Wrecz" name1="Bijatyka" name2="Bron reczna" name3="Rzucanie" value1={props.skills.bijatyka} value2={props.skills.bronReczna} value3={props.skills.rzucanie} /> 
            <Skills styleP="skillContenerTZr" nameM="Prowadzenie Poj." name1="Samochod" name2="Motocykl" name3="Ciezarowka" value1={props.skills.samochod} value2={props.skills.motocykl} value3={props.skills.ciezarowka} /> 
            <Skills styleP="skillContenerTZr" nameM="Bron strzelecka" name1="Pistolety" name2="Karabiny" name3="Bron Maszynowa" value1={props.skills.pistolety} value2={props.skills.karabiny} value3={props.skills.bronMaszynowa} />
            <Skills styleP="skillContenerTZr" nameM="Zdolnosci man." name1="Kradziez kiesz." name2="Otwieranie zamkow" name3="Zwinne Dłonie" value1={props.skills.kradziezKieszonkowa} value2={props.skills.otwieranieZamkow} value3={props.skills.zwinneDlonie} /> 
            <Skills styleP="skillContenerTZr" nameM="Bron dystansowa" name1="Łuk" name2="Kusza" name3="Proca" value1={props.skills.luk} value2={props.skills.kusza} value3={props.skills.proca} />
            

        </div>
        <div className="dataHeaderSk">
            <Skills styleP="skillContenerTSp" nameM="Pirotechnika" name1="Rusznikarstwo" name2="Wyrzutnie" name3="Materialy wyb." value1={props.skills.rusznikarstwo} value2={props.skills.wyrzutnie} value3={props.skills.materialyWybuchowe} /> 
            <Skills styleP="skillContenerTSp" nameM="Sprzęt" name1="Maszyny ciezkie" name2="Wozy bojowe" name3="Kutry" value1={props.skills.maszynyCiezkie} value2={props.skills.wozyBojowe} value3={props.skills.kutry} /> 
            <Skills styleP="skillContenerTSp" nameM="Technika" name1="Mechanika" name2="Elektronika" name3="Komputery" value1={props.skills.mechanika} value2={props.skills.elektronika} value3={props.skills.komputery} /> 
            <Skills styleP="skillContenerTSp" nameM="Medycyna" name1="Pierwsza pomoc" name2="Leczenie ran" name3="Leczenie chorób" value1={props.skills.pierwszaPomoc} value2={props.skills.leczenieRan} value3={props.skills.leczenieChorob} /> 
            <Skills styleP="skillContenerTSp" nameM="Wiedza ogólna" name1="Musze" name2="To" name3="Generowac losowo"  /> 
        </div>
        <div className="dataHeaderSk">
            <Skills styleP="skillContenerTBu" nameM="Jezdziectwo" name1="Jazda konna" name2="Powozenie" name3="Ujezdzanie" value1={props.skills.jazdaKonna} value2={props.skills.powozenie} value3={props.skills.ujezdzanie} /> 
            <Skills styleP="skillContenerTBu" nameM="Sprawnosc" name1="Kondycja" name2="Pływanie" name3="Wspinaczka" value1={props.skills.kondycja} value2={props.skills.plywanie} value3={props.skills.wspinaczka} /> 
            <Skills styleP="skillContenerTCh" nameM="Empatia" name1="Postrzeganie emocji" name2="Blef" name3="Opieka nad zwierz." value1={props.skills.postrzeganieEmocji} value2={props.skills.blef} value3={props.skills.opiekaNadZwierzetami} />
            <Skills styleP="skillContenerTCh" nameM="Negocjacje" name1="Zastraszanie" name2="Perswazja" name3="Zdolnosci przyw." value1={props.skills.zastraszanie} value2={props.skills.perswazja} value3={props.skills.zdolnosciPrzywodcze} />
            <Skills styleP="skillContenerTCh" nameM="Siła woli" name1="Odporność na ból" name2="Niezłomność" name3="Morale" value1={props.skills.odpornoscNaBol} value2={props.skills.niezlomnosc} value3={props.skills.morale} />
        </div>
        <div className="dataHeaderSk">
            <Skills styleP="skillContenerTPr" nameM="Spostrzegawczosc" name1="Nasłuchiwanie" name2="Wypatrywanie" name3="Czujność" value1={props.skills.nasluchiwanie} value2={props.skills.wypatrywanie} value3={props.skills.czujnosc} /> 
            <Skills styleP="skillContenerTPr" nameM="Orientacja w ter." name1="Wyczucie kierunku" name2="Przygotowanie puł." name3="Tropienie" value1={props.skills.wyczucieKierunku} value2={props.skills.przygotowaniePulapki} value3={props.skills.tropienie} /> 
            <Skills styleP="skillContenerTPr" nameM="Kamuflaz" name1="Skradanie sie" name2="Ukrywanie sie" name3="Maskowanie" value1={props.skills.skradanieSie} value2={props.skills.ukrywanieSie} value3={props.skills.maskowanie} /> 
            <Skills styleP="skillContenerTPr" nameM="Przetrwanie" name1="Łowiectwo" name2="Znajomość terenu" name3="Zdobywanie wody" value1={props.skills.lowiectwo} value2={props.skills.znajomoscTerenu} value3={props.skills.zdobywanieWody} /> 

            
        </div>
        
        
    </div>
    )}


export default skillsGrid;



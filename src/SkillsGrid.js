import React from 'react';
import Skills from "./Skills.js"

const skillsGrid = (props)=> {

    return (
    <div>
        <div className="dataHeaderSk">
            <Skills nameM="Walka Wrecz" name1="Bijatyka" name2="Bron reczna" name3="Rzucanie" value="" /> 
            <Skills nameM="Sprawnosc" name1="Kondycja" name2="Pływanie" name3="Wspinaczka" value="" /> 
            <Skills nameM="Orientacja w ter." name1="Wyczucie kierunku" name2="Przygotowanie pułapki" name3="Tropienie" value="" /> 
            <Skills nameM="Medycyna" name1="Pierwsza pomoc" name2="Leczenie ran" name3="Leczenie chorób" value="" /> 
            <Skills nameM="Negocjacje" name1="Zastraszanie" name2="Perswazja" name3="Zdolnosci przywódcze" value="" />
        </div>
        <div className="dataHeaderSk">
            <Skills nameM="Prowadzenie Poj." name1="Samochod" name2="Motocykl" name3="Ciezarowka" value="" /> 
            <Skills nameM="Jezdziectwo" name1="Jazda konna" name2="Powozenie" name3="Ujezdzanie" value="" /> 
            <Skills nameM="Spostrzegawczosc" name1="Nasłuchiwanie" name2="Wypatrywanie" name3="Czujność" value="" /> 
            <Skills nameM="Technika" name1="Mechanika" name2="Elektronika" name3="Komputery" value="" /> 
            <Skills nameM="Empatia" name1="Postrzeganie emocji" name2="Blef" name3="Opieka nad zwierz." value="" />
        </div>
        <div className="dataHeaderSk">
            <Skills nameM="Zdolnosci manualne" name1="Kradziez kieszonkowa" name2="Otwieranie zamkow" name3="Zwinne Dłonie" value="" /> 
            <Skills nameM="" name1=""name2=""name3="" value="" /> 
            <Skills nameM="Kamuflaz" name1="Skradanie sie" name2="Ukrywanie" name3="Maskowanie" value="" /> 
            <Skills nameM="Wiedza ogólna" name1="Musze" name2="To" name3="Generowac losowo" value="" /> 
            <Skills nameM="Siła woli" name1="Odporność na ból" name2="Niezłomność" name3="Morale" value="" />
        </div>
        <div className="dataHeaderSk">
            <Skills nameM="Bron strzelecka" name1="Pistolety" name2="Karabiny" name3="Bron Maszynowa" value="" /> 
            <Skills nameM="" name1=""name2=""name3="" value="" /> 
            <Skills nameM="Przetrwanie" name1="Łowiectwo" name2="Znajomość terenu" name3="Zdobywanie wody" value="" /> 
            <Skills nameM="Sprzęt" name1="Maszyny ciezkie" name2="Wozy bojowe" name3="Kutry" value="" /> 
            <Skills nameM="" name1=""name2=""name3="" value="" />
        </div>
        <div className="dataHeaderSk">
            <Skills nameM="Bron dystansowa" name1="Łuk" name2="Kusza" name3="Proca" value="" /> 
            <Skills nameM="" name1=""name2=""name3="" value="" /> 
            <Skills nameM="" name1=""name2=""name3="" value="" /> 
            <Skills nameM="Pirotechnika" name1="Rusznikarstwo" name2="Wyrzutnie" name3="Materialy wybuchowe" value="" /> 
            <Skills nameM="" name1=""name2=""name3="" value="" />
        </div>
        
    </div>
    )}


export default skillsGrid;
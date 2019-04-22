import React from 'react'

function Popup(props) {
    let text;
    if(props.text=="info"){
      text =  (<div><p>Witajcie w P.L.A.G.A.
Pseudo Losowy Algorytm Generujący Awatary.
Przez kilka dni starałem się stworzyć najlepszy* generator NPC do Neuroshimy na świecie. 
Jeszcze mu daleko ale zmierzamy w dobrym kierunku!
Znaczy prawdopodobnie JUŻ jest najlepszy ale to za sprawą braku sensownej konkurencji bardziej a niżeli samej jakości wykonania. 
Więc co czyni go tak dobrym? 
To, że nie jest losowy. 
Już widzę tych kręcących się na krzesłach ludzi z troszkę bardziej zaparowanymi okularami niż zwykle i wyciągniętym w górę palcem z rozpoczynającym długą wypowiedź "ale..." STOP. Czytaj później marudź. 
Najpierw chcę zaznaczyć dwie rzeczy, bardzo ważne rzeczy do których powinieneś wrócić za każdym razem gdy nazwiesz mnie debilem bez szkoły który Neuroshimy to w rękach nie miał a tylko lizał przez szybę w sklepie RPG. 
Otóż robię to za darmo. Kompletnie. Nie mam z tego nic. Nawet nie umieszczam banerów na stronie. Więc jeśli Ci się nie podoba takie podejście do losowania NPC to przykro mi bardzo ale to nie jest generator dla Ciebie. 
Po drugie. WSZYSTKO za wyjatkiem sztuczek) jest edytowalne. Nie podoba Ci się coś? Zmień to. Nie mów mi, że to bez sensu, że kaznodzieja dostaje najwyższy rzut na statystyki w Charakter. Użyj swoich palców i zmień to tak jak tobie to pasuje. 
OCZYWIŚCIE BARDZO CHĘTNIE PRZYJMUJĘ SUGESTIE! SERIO! Ba, są mi one nawet bardzo potrzebne. Więc jeśli serio uważasz, że gdzieś jest babol to napisz mi proszę o tym!</p>

<p>A teraz wracamy do meritum.
Jak to działa? Naciskasz guzik RNG! I się magia dzieje. Prawie kade pole mozesz wypełnić wczesniej samemu i zostanie ono wypełnione przez kolejne losowania (jeszcze nie w pełni to dziala wiec radze zmieniac dopiero po losowaniu.) Chcesz wiedzieć więcej? Zapraszam do "DETAILS"
</p>

<p>A teraz pragne troche prywaty wrzucić. Dziekuje serdecznie Kamilowi "Kowboj" Miecielica! Chłopak wykonał naprawde kawał dobrej roboty przepisując sztuczki z podrecznika i pomagając mi rozpisac profesje. Dzieki jeszcze raz! </p>
<p>Masz pytania albo sugestie? Jeszcze lepiej... Chcesz pomóc pisac? Wal smiało: ploxplus@gmail.com </p>
</div>)
    }
    if(props.text=="details"){
        text = (<div>
            <p>Najpierw wytłumaczę wam jak działają leniwe generatory: 
            Generuje liczbę od 1-20 (ew. 6-20) dla każdego współczynnika. 
            Generuje profesje, pochodzenie i kilka dodatkowych całkowicie losowych rzeczy. 
            Wychodzi nam Ganger z Posterunku ze statami zr-6, bu-9, sp-19, ch-11, pr- 13.</p>
            
            <p>No ok jest to zdecydowanie przypadkowy koleś z przypadku.
            Ale czy gdyby to była wasza postać rozpisali byście tak gangera? Gdybyś mistrzu gry rozpisywał npc którego gracze mają spotkać czy dałbyś mu takie statystyki? Poukładał byś je tak? No właśnie...</p>
            
            <p>I tu powód dlaczego PLAGA zajęła mi tak długo (taki leniwy generator postawiłem w kilka godzin. Stał na serwerze i straszył przypadkowych odwiedzających.)</p>
            
            <p>Jak działa ten generator?
            Najpierw losuje się płeć. To podstawa do określenia tablicy imion, męskie albo żeńskie. 
            Wraz z tym generowane są statystyki pomocnicze, nazwisko, waga i wzrost (opisowo), wiek, kolor skóry i włosów. 
            Następnie generuje się pochodzenie i w pamięci zapisujemy jaki punkt należy podnieść o 1. Kolejny krok to profesja. Profesja jest tu bardzo ważna bo na jej podstawie określamy bardzo wiele. Uznałem, że to profesja dyktuje nam co rozwijamy ewentualnie to jakie mamy umiejętności i predyspozycje, kieruje nas ku konkretnej profesji. Więc profesja określa 2 najważniejsze dla nas współczynniki i zestaw umiejętności jakie MUSI mieć ta postać. Nie będzie medyka bez leczenia ran, nie będzie Gladiatora który nie potrafi się bić. 
            Następnie losuje się współczynniki jak nam Oracz i Trzewiczek nakazali rzucamy 6 razy 3k20 które za każdym razem dzielimy na 3 a najniższy wynik odrzucamy. I tak samo jest tu w generatorze. Za to dwa najwyższe przydzielamy do współczynników priorytetowych (te z profesji). Resztę losowo rozdzielamy pomiędzy pozostałe współczynniki. Teraz losujemy wysokość umiejętności i ewentualne dodatkowe umiejętności. Umiejętności z profesji mogą mieć wartość od 1 do 8 jednak największą szansę ma 4 (50%).
            Umiejetnosci dodatkowe są losowane następująco: pierwsza ma 90% szans na pojawienie się, druga 56%, trzecia 16% czwarta to 1% a każda kolejna zmniejsza szanse do 1/10 poprzedniej wartości (czyli 0,1%, 0,01% itd) jest szansa na 10 dodatkowych umiejętności ale jest też szansa na to, że wygram w lotto. Wysokość tych umiejętności mieści się w skali 1-10 i jest całkowicie przypadkowa ze względów narracyjnych. Ładnie można sobie wyobrazić historie tej postaci po tych umiejętnościach właśnie. Teraz czas na sztuczki. Sztuczki są Losowane na tej samej zasadzie co dodatkowe umiejętności (90% na jedną, 56% na dwie itd) i są losowane tylko z puli sztuczek do których spełnia ta postać wymagania! (to był hardcore programowanie tego). I tyle na razie. Mam pozwolenie z góry na wykorzystanie generatora GLISDA do losowania lootu pod warunkiem, że nie będzie on komercyjny ale o tym w Roadmap.</p>
            
            <p>Mam nadzieję, że wyjsnilem wam chociaż trochę dlaczego uważam ten generator za naprawdę dobry. Po prostu nie generuje on postaci losowo a stara się stworzyć sensowną i grywalną postać. 
            
            Bawcie się dobrze!</p></div>)
    }
    if(props.text=="rm"){
        text = (<div>
            <li>Zrobic działającą wersję na telefon.</li>
            <li>Zrobic generator lootu</li>
            <li>import/export postaci</li>
            <li>wprowadzic dodatki z opcja wlaczenia i wylaczenia ich (tu potrzebuje pomocy)</li>
            </div>)
    }
  return (
    <div className="popupFullscreen" onClick={props.close}>
      {text}
    </div>
  )
}

export default Popup

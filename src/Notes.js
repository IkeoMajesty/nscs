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
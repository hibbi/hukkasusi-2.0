const WhoAmI = () => {
  return (
    <section
      id="who_am_i"
      className="md:grid md:grid-cols-12 gap-x-[1.5vw] flex flex-col"
    >
      <div className="md:col-span-5 text-3xl leading-snug font-normal flex flex-col gap-5 lg:gap-8">
        <h2 className="text-sm">
          2. Taiteilija, opettaja vai tutkija – spekulatiivinen tulo joksikin
          (ja sen jonkin käsitteellistäminen)
        </h2>
        <div className="flex flex-col gap-5 lg:gap-8 text-base font-nib leading-snug">
          <p>
            Kuvataiteen opettamisesta tai opettajuudesta jonkinlaisena
            lopputuloksena ei ole muodostunut kantavaa ajatusrakennelmaa, jota
            kohti olen tavoitellut päämäärätietoisesti. Päinvastoin koko
            peruskouluaikani ja lukion ensimmäisen vuoden inhosin kuvataidetta
            kouluaineena. Patoutuneen inhon kaava meni jokseenkin näin: 1. ensin
            innostunutta yrittämistä ja tekemistä; 2. opettajan palaute ja
            itsetoteutettu vertaisarviointi; 3. havahtuminen ja itseymmärrys
            siitä, etten ole millään tavoin taitava perinteisissä kuvataiteen
            alassa (esim. maalaustaide, piirtäminen, saventyöstö).
          </p>
          <p>
            Konkreettinen herääminen taiteeseen tapahtui lukion toisen vuoden
            kuvataiteen valinnaisilla kursseilla ja ennen kaikkea nykytaiteen
            kurssilla, jossa ilmaisumuoto oli opettajan toimesta
            määrittelemätön, vapaa. Haahuilin silloin vastaostetun
            Canon-merkkisen kamerani kanssa näpsien valokuvia miessukupuolisesta
            kurssitoveristani, jonka kanssa pohdimme sukupuolirepresentaatiota
            meikkaamisen kautta. Myöhemmin kurssin kritiikkikeskustelussa vuonna
            2008 omat vuosien varrella juurtuneet tapani ajatella taiteesta ja
            omasta taiteen tekemisen mielekkyydestä tuhoutuivat. Huomasin
            taiteen olevan ennen kaikkea ajattelua ja sen siirtämistä tai
            kanavoimista jonkinlaiseksi näkyväksi tai koettavaksi esineeksi tai
            teoksi.
          </p>
          <p className="text-2xl font-sans leading-tight md:-mr-72">
            {" "}
            Toinen taiteen kiinnostusta ruokkinut väline oli filosofia, josta
            kiinnostuin peruskoulun lisäopetusvuotena. Vuoden 2006 luin paljon
            eläinoikeus- ja ympäristöfilosofiaa, jotka pohjustivat myöhempiä
            taideopintoja. Minulle taide onkin ensisijaisesti filosofian
            siirtämistä käytäntöön, sen ruumiillista jatkamista ja tutkimista.
          </p>
          <p>
            Sulkevatko väliotsikon määreet toisensa pois? Taiteen tekijänä olen
            aina ollut enemmän kiinnostunut lukemisesta, tutkimisesta ja
            kokeilemisesta kuin valmiista teoksista ja julkaisuista. Olen aina
            tuntenut sitä samaa keskeneräisyyttä taiteen tekijänä kuin
            opettajana – huolimatta siitä, että molemmissa toimissa olen saanut
            yksinomaan positiivista kritiikkiä ja tunnustuksia (mm.
            valmistuessani Turun taideakatemiasta sain stipendin parhaasta
            taiteellisesta lopputyöstä). Ongelmaksi molemmissa ammateissa on
            muodostunut introverttius ja jonkinlainen outous. Olen läpi
            taideopintojeni ollut äärimmäisen huono verkostoitumaan ja
            tutustumaan ihmisiin. Ja olen liian kiinnostunut mitättömistä
            ilmiöistä, kokemuksista, kuten koiran talutushihnan vaikutusten
            tallentamisesta.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhoAmI;
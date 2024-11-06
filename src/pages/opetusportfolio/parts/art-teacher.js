const ArtTeacher = () => {
  return (
    <section id="teacher-of-art">
      <div className="flex flex-col md:grid md:grid-cols-12 gap-x-[1.5vw]">
        <div className="md:col-span-6 md:col-start-4">
          <h2 className="text-6xl leading-none text-center">1.1.</h2>
          <h3 className="text-base text-center font-nib">Kuvataiteen opettajana</h3>
          <div className="flex flex-col text-2xl gap-5 lg:gap-8 leading-snug font-normal font-nib text-center mt-[18.75rem]">
            <p>
              Peruskoulun ja toisen asteen kuvataiteen opettajana olen
              vajavainen ainakin kahdelta helposti tunnistettavalta kantilta.
              Minulle ei ole muodostunut selkeää ajatustaustaa tai
              opetusfilosofiaa, johon opettaminen nojaa. Väitän, että yhtenä
              selityksenä tähän on harjoitteluiden ilmiö ja kesto: opettaminen
              peruskouluharjoitteluissa opettaminen rakentuu tietynlaisten
              ennakko-oletusten varaan ja ohjaavan opettajan johdannoilla on
              ollut huomattava merkitys ainakin omaan harjoitusopetukseen.
              Huolimatta kolmesta peruskouluharjoittelusta, on opettaminen tähän
              asti ollut enemmän koulussa pistäytymistä kuin pitkäjänteistä ja
              jostain tietystä ajattelutavasta kumpuavaa.
            </p>
            <p>
              Otan esimerkiksi kestävyyden: miten omaa kestävyysajattelua, jota
              jotkut voisivat luonnehtia syväekologiseksi, voi tuoda esiin
              muutamien tuntien opetusnäytöillä per luokka. Miten oman
              kestävyysajattelun voi muuntaa todeksi tilassa ja yhteisössä,
              jonka ajatukset, tavat ja perinteet ovat jo juurtuneet – kuka
              kuuntelee pistäytyjää?
            </p>
            <p>
              Toisekseen katson, ettei minulla ole teknisiä edellytyksiä toimia
              laaja-alaisena kuvataiteen opettajana, ellen opettajana haasta
              nykykuvataidekasvatuksen traditiota ja opetuskäytänteitä. Miksi
              nykykuvataidekasvatus nojaa teosten tekemiseen, eikä esimerkiksi
              kriittisen ajattelun lisäämiseen luoden keskustelumahdollisuuksia
              ja nostaen erilaisia ilmiöitä yhteisen tarkastelun alle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArtTeacher;
import Image from "next/image";

const Ending = () => {
  return (
    <section id="in_the_end">
      <div className="flex flex-col md:grid md:grid-cols-12 gap-x-[1.5vw] gap-y-20">
        <h2 className="text-5xl leading-none flex flex-col md:col-span-7">
          <span>5. Lopuksi:</span>
          <span>tuleva ja sen odotta&shy;matto&shy;muus</span>
        </h2>
        <div className="md:col-span-4 md:col-start-9 text-sm leading-tight font-light">
          <p>
            &quot;Jaloissani 880-grammaisen untuvatäytteisen peitteen päällä
            makaa kolmekymmentäneljäkiloinen Konsta, oikealla puolellani
            yhteisömme pienin olento Heppu, ja vasemmalla puolellani
            parikymmenkiloinen syntymäpäiväsankari Vatu. Kolmesta tuhisijasta
            tunnen Konstan parhaiten. Olemme rakentaneet lajien välistä
            kumppanuuttamme täysin erilaisista lähtökohdista. Olen oppinut
            koiristamme vieraanvaraisuudella, pysähtymisellä ja aktiivisella
            tekemisellä. Ennen kaikkea juuri nämä seikat tekevät minusta myös
            hyvän pedagogin: pyrkimys ymmärtää, rauhallisuus ja yhdessä
            toimiminen.&quot;
          </p>
        </div>
        <div className="md:col-span-12">
          <figure className="w-full relative flex">
            <video className="object-cover w-full" autoPlay loop>
              <source src={"4.mp4"} type="video/mp4" />
            </video>
          </figure>
        </div>
        <div className="md:col-span-5 text-base font-nib leading-snug flex flex-col gap-5 lg:gap-8">
          <p>
            Toivon jatkossakin olevani opettaja, joka ymmärtää ja arvostaa
            erilaisuutta taiteen tekemisessä – oli erilaisuus sitten tekijän
            ominaisuuksissa tai teoksissa. Haluan edelleen oppia itse ja pyrkiä
            hyödyttämään yhteisöjä, joissa olen yhtenä osallisena/toimijana.
            Haluan pysähtyä, kannustaa kokeellisuuteen ja epäonnistumiseen,
            tukea ja sivistää sekä tuoda ympärilleni kriittistä keskustelua.
            Haluan kohdata ja kuunnella, keskustella ja rakastaa.
          </p>
          <p>
            Toivon, että ihmiset löytävät taiteesta outouden ja ihmettelyn
            kokemuksia. Minulle taide on osa luopumisen harjoittelua.
            Temmellyskenttä, jossa kaikki ovat samanarvoisia ja kuultuja.
          </p>
        </div>
        <div className="md:col-span-12 my-40 lg:my-72">
          <figure className="w-full relative flex">
            <Image
              className="object-cover w-full"
              src={"/vatu.jpg"}
              width={1024}
              height={683}
              alt="Koiraphoto"
            />
          </figure>
        </div>
        <div className="md:col-span-6 md:col-start-4">
          <div className="flex flex-col text-2xl gap-5 lg:gap-8 leading-snug font-normal font-nib text-center">
            <p>
              Intohimoni ja asiantuntijuuteni ovat nivoutuneet valokuvataiteen
              ympärille ja haen ensisijaisesti opetuspaikkaa, jossa voin
              kehittää valokuvataiteen, kuvataidekasvatuksen ja käsitteellisen
              ajattelun tutkimusta ja käytäntöä.
            </p>
            <p>
              Henkilökohtaisessa utopiassani työskentelen yhdessä Suomen
              taidekorkeakoulussa. Työmahdollisuudet ovat Aalto-yliopiston
              valokuvan maisteriohjelma, Turun taideakatemian valokuvan
              koulutusohjelma tai Lapin yliopiston valokuvan sivuaine tai
              soveltavan taiteen maisteriohjelma.
            </p>
            <p>
              Opetustyön lisäksi olen kiinnostunut jatko-opinnoista ja
              väitöskirjan tekemisestä. Minua kiinnostavat spekulatiiviset
              jälkifossiiliset utopiat, fossiilisubjektiuden haastaminen
              kuvataidekasvatuksen keinoin sekä kasvatus luopumiseen. Yksi
              vaihtoehto on palata vapaaksi taiteilijaksi.
            </p>
            <p>
              Vaikka minulla onkin melko selkeät tulevaisuuden tavoitteet, on
              elämä lopulta kiinni odottamattomista ilmiöistä ja kokemuksista.
              Yksi tällainen on keskusteluni Oulun yliopiston apulaisprofessori
              Jani Pulkin kanssa, jonka innostuksen kautta olen havahtunut
              olemaan polulla, joka tällä hetkellä tuntuu hyvältä ja oikealta.
            </p>
            <p>
              Olen etuoikeutettu elämänkumppanistani, jonka kanssa voimme
              syventyä pohtimaan taiteen tekemistä monialaisesti ja
              -ulotteisesti. Olen myös ikuisesti kiitollinen laumastamme, joka
              koostuu niin kaksi- kuin nelijalkaisista kuljailijoista.
              Heistä/niistä johtuen minulla on loputon himo oppia lisää ja
              tuottaa tietoa yhteisön hyväksi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ending;
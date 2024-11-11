import DogPhoto from "./dog-photo";

const EcologicalThinking = () => {
  return (
    <section
      id="ecological_thinking"
      className="flex items-center flex-col gap-40 lg:gap-72"
    >
      <figure className="w-full relative flex">
        <video className="object-cover w-full" autoPlay loop>
          <source src={"3.mp4"} type="video/mp4" />
        </video>
      </figure>
      <div className="flex flex-col gap-40 lg:gap-72">
        <h2 className="w-full text-5xl leading-none font-normal text-center flex flex-col">
          <span>3. Taiteen ja sivis­tyksen</span>
          <span>mahdolli­suuksista</span>
        </h2>
        <div className="md:grid md:grid-cols-12 gap-x-[1.5vw] flex flex-col gap-y-20">
          <div className="md:col-span-4 md:col-start-2 text-base leading-snug">
            <p>
              Pohdin vuonna 2020 Lapin yliopiston motivaatiokirjeessä
              ekologisuutta ja kasvatusta
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-8 text-sm leading-snug font-normal ">
            <p>
              Ekologiset kriisit määrittävät yhä useampien ihmisten arkea ja
              elämisen tapoja. Globaali tulevaisuutemme maapallolla on
              jonkinasteinen arvoitus, jossa niin ihmisten välinen kuin myös
              lajit ylittävä solidaarisuus ja empatia ovat osa monialaista
              ratkaisua.
            </p>
            <p>
              Yksi kuvataidekasvatuksen tehtävistä on luoda siltoja niin
              itsenäisenä toimijana kuin myös yhdessä muiden alojen kanssa
              ymmärrystä ei-inhimillisestä maailmasta. Rohkeiden ja uusien
              avausten aika on nyt myös opetuksen aloilla.
            </p>
          </div>
        </div>

        <div className="md:grid md:grid-cols-12 gap-x-[1.5vw] flex flex-col text-base font-normal font-nib leading-snug">
          <div className="md:col-span-6 md:col-start-5 flex flex-col gap-5 lg:gap-8">
            <p>
              Ajatteluni taustalla on tutkimuksen kautta muodostettu tieto
              maapallon tilasta. Ilmastonmuutos, lajikato ja lähiympäristöjä
              tuhoava kaivosteollisuus etenevät vääjäämättä. Pedagoginen otteeni
              kumpaa väistämättä samoista lähtökohdista kuin taiteellinen
              työskentelyni. Vain ensimmäisestä on helpompaa luoda praktiikka.
              Ekologisesti kestävän opetuspraktiikan, siis jonkinlaisen
              spekulatiivisen jälkifossiilisuuden omaksuvan kuvataidekasvatuksen
              käytäntö on toistaiseksi henkilökohtaista utopiaa, jossa sekä
              taiteen että opetuksen potentiaali nivoutuvat haastamaan
              länsimaista subjektikäsitystä (ks. Salminen 2015).
            </p>
            <p>
              Avauksia jälkifossiilisesta yliopisto-opetuksesta on tehty (ks.
              Roswag-Klinge ym. 2019). Praktiikalle voidaan pitää perustana
              jonkinlaista yhteistoimijuutta ja -tekijyyttä painottavia
              opetusmenetelmiä. Sen lisäksi katson, että opetuksen tulisi
              nojautua tarkastelemaan luopumisen problematiikkaa. Onko
              ekologisin teos sellainen, jota ei ole olemassa? Voisiko
              esimerkiksi Toisissa tiloissa -kollektiivin<sup>1</sup> teoksista
              ammentaa luopumisen ja kohtaamisen käytänteitä?
            </p>
            <p>
              Taiteellinen työskentelyni keskittyy tutkimaan ekologisen
              kestävyyden reunaehtoja taiteen tekemisessä ja tarkastelee
              luopumisen mahdollisuutta osana kestävää taiteellista toimintaa.
              Pyrin löytämään uusia tapoja luoda dialogeja maiseman kanssa,
              huomioiden ihmisen ja luonnon välisen valtasuhteen. Työni
              kytkeytyy maapallon kestokyvyn rajojen ylittymiseen (Richardson
              ym. 2023) ja taiteen potentiaaliin ekologisten haasteiden edessä.
              Kuraattori Ki Nurmenniemi on esseessään Polttava taide (2020)
              käsitellyt taitelijoiden ekologista vastuuta ja taiteessa
              esiintyvää viherpesua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcologicalThinking;

import DogPhoto from "./dog-photo";

const EcologicalThinking = () => {
  return (
    <section
      id="ecological_thinking"
      className="flex items-center flex-col gap-[18.75rem]"
    >
      <figure className="w-full relative flex">
        <video className="object-cover w-full" autoPlay loop>
          <source src={"3.mp4"} type="video/mp4" />
        </video>
      </figure>
      <div className="flex flex-col md:flex-wrap md:flex-row gap-4 md:gap-5">
        <div className="order-2 md:order-1 text-base font-normal flex flex-col gap-5 lg:gap-8 leading-snug md:w-[calc(50%-.625rem)] bg-coral p-8 lg:p-10">
          <p className="font-nib">
            Ekologiset kriisit määrittävät yhä useampien ihmisten arkea ja
            elämisen tapoja. Globaali tulevaisuutemme maapallolla on
            jonkinasteinen arvoitus, jossa niin ihmisten välinen kuin myös lajit
            ylittävä solidaarisuus ja empatia ovat osa monialaista ratkaisua.
            Yksi kuvataidekasvatuksen tehtävistä on luoda siltoja niin
            itsenäisenä toimijana kuin myös yhdessä muiden alojen kanssa
            ymmärrystä ei-inhimillisestä maailmasta. Rohkeiden ja uusien
            avausten aika on nyt myös opetuksen aloilla.
          </p>
          <p className="text-sm">Lapin yliopiston motivaatikirje, 2020</p>
        </div>
        <h2 className="order-1 md:order-2 flex-shrink-0 md:w-[calc(50%-.625rem)] text-5xl leading-none bg-violet p-8 lg:p-10">
          3. Ekologi&shy;suudesta; taiteen ja kasva&shy;tuksen
          mahdolli&shy;suudesta
        </h2>
        <div className="order-3 text-base font-normal font-nib leading-snug  md:w-[calc(59%-.625rem)] bg-black text-white p-8 lg:p-10">
          <p>
            Taiteellinen työskentelyni keskittyy tutkimaan ekologisen
            kestävyyden reunaehtoja taiteen tekemisessä ja tarkastelee
            luopumisen mahdollisuutta osana kestävää taiteellista toimintaa.
            Pyrin löytämään uusia tapoja luoda dialogeja maiseman kanssa,
            huomioiden ihmisen ja luonnon välisen valtasuhteen. Työni kytkeytyy
            maapallon kestokyvyn rajojen ylittymiseen (Richardson ym. 2023) ja
            taiteen potentiaaliin ekologisten haasteiden edessä. Kuraattori Ki
            Nurmenniemi on esseessään Polttava taide (2020) käsitellyt
            taitelijoiden ekologista vastuuta ja taiteessa esiintyvää
            viherpesua.
          </p>
        </div>
        <div className="order-4 text-base font-normal font-nib leading-snug flex flex-col gap-5 lg:gap-8 md:w-[calc(41%-.625rem)] bg-yellow p-8 lg:p-10">
          <p>
            Ajatteluni taustalla on tutkimuksen kautta muodostettu tieto maapallon tilasta. Ilmastonmuutos, lajikato ja lähiympäristöjä tuhoava kaivosteollisuus etenevät vääjäämättä.
            Pedagoginen otteeni kumpaa näin ollen samoista lähtökohdista kuin
            taiteellinen työskentelyni sillä erotuksella, että ensimmäisestä on
            helpompaa luoda praktiikkaa. Ekologisesti kestävän opetuspraktiikan,
            siis jonkinlaisen spekulatiivisen jälkifossiilisuuden omaksuvan
            kuvataidekasvatuksen käytäntö on toistaiseksi henkilökohtaista
            utopiaa, jossa sekä taiteen että opetuksen potentiaali nivoutuvat
            haastamaan länsimaista subjektikäsitystä (ks. Salminen 2015).
          </p>
        </div>
      </div>
    </section>
  );
}

export default EcologicalThinking;
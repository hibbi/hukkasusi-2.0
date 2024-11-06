import Image from "next/image";
import DogPhoto from "./dog-photo";

const PhotographyTeacher = () => {
  return (
    <section
      id="teacher_of_photography"
      className="flex items-center flex-col gap-[18.75rem]"
    >
      <figure className="w-full relative flex">
        <video className="object-cover w-full" autoPlay loop>
          <source src={"2.mp4"} type="video/mp4" />
        </video>
      </figure>
      <div className="flex flex-col md:flex-row gap-4 md:gap-5">
        <h2 className="flex-shrink-0 md:w-[calc(50%-.625rem)] text-5xl leading-none bg-gray-300 p-8 lg:p-10">
          1.2. Valo&shy;kuvan opetta&shy;jana
        </h2>
        <div className="text-base font-normal font-nib leading-snug flex flex-col gap-5 lg:gap-8 md:w-[calc(50%-.625rem)]">
          <p>
            Voisiko nykykuvataidekasvatus suuntautua pois ns. perinteisten
            taiteen tekemisen muotojen ympäriltä ja nostaa esiin uusia (ja
            ympäristölle vähemmän haitallisia) tekotapoja? Voisiko
            nykykuvataidekasvatuksella tavoitella opiskelijoiden käsitteellisen
            ajattelun moninaistamista ja voimistaa yhteisöä yksilön sijasta?
          </p>
          <p>
            Valokuvataiteen keinoin voidaan lähestyä tarkastelemaan
            vahingollisia ja tuhoavia eleitä sekä ongelmallista
            subjektikäsitystä, josta katson ekologisten katastrofien kumpuavan.
            Valokuvateoreetikko ja mediatutkija Joanna Zylinska (2016) esittää
            valokuvan olevan aina sidoksissa ihmistä laajempaan todellisuuteen.
            Valokuvassa esiintyy aina sisäänrakennettuna valo (jo nimensä
            mukaisesti), joka on lähtöisin miljardeja vuosia sitten
            muodostuneista valonlähteistä; auringosta, kuusta, tähdistä,
            komeetoista ja niin edelleen. Zylinska (emt.) yhdistää valokuvan
            kokemukseen valon lisäksi ajan (tilan) sekä teknisen välineen, jonka
            kautta valokuva tallentuu uudelleen koettavaksi. Ajallisesti
            valokuva limittyy osaksi maapallon ajallista historiaa tallentamalla
            siitä pienen otoksen, fragmentin. Valokuvan apparaatti puolestaan
            vaikuttaa kuvan muodostumiseen miten milloinkin: analogiset välineet
            voivat jumittua, valotusaika voi säädöistä huolimatta olla lähes
            mitä tahansa tai virtalähteet oikuttelevat. Mikä tai kuka
            valokuvassa lopulta siis määrittää ja muodostaa kuvan? Toisaalta
            sanottakoon, että myös nykyvalokuvatutkimus laahaa teknisen
            edistyksen jäljessä, sillä suhteemme tekoälyn tuottamiin kuviin on
            kompleksinen ja pitkälti tutkimatonta.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PhotographyTeacher;

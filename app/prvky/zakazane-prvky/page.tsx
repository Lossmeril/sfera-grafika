import Section, { ImageSection } from "@/components/sections/sections";
import ElementSubSection, {
  ElementBlock,
} from "@/components/sections/subsections/elementSection";

const ZakazanePrvkyPage = () => {
  return (
    <>
      <ImageSection image="/img/pattern-wallpaper.webp" />
      <Section last>
        <h2>Prvky vyjmuté z běžného používání</h2>
        <h3>Prvky spjaté s komerčními subjekty</h3>

        <p>
          Vzhledem k charakteru SFÉRY, jakožto vzdělávacího zařízení s určitou
          mírou nestranosti v komerčním prostoru bylo ustanoveno omezené
          používání u původních prvků zobrazující loga spjatá s komerčními,
          často korporátními subjekty.
        </p>
        <p>
          Tyto symboly nejsou zakázané, jejich použití by mělo být ovšem velmi
          omezené a oddůvodněné kontextem, aby nedocházelo k mylné asociaci se
          zmíněnými subjekty.
        </p>

        <ElementSubSection>
          <ElementBlock
            image={"/img/elements/Laboratoř IT_VR/IT VR_motiv2.jpg"}
            title={"IT VR_motiv2"}
            reasoning="Asociace s megakorporací Apple"
          >
            Načítací kurzor z macOS
          </ElementBlock>

          <ElementBlock
            image={"/img/elements/Laboratoř IT_VR/IT VR_motiv8.jpg"}
            title={"IT VR_motiv8"}
            reasoning="Asociace s megakorporací Google  |  možné použít, mluvíme-li o prohlížečích ale velmi opatrně"
          >
            Logo prohlížeče Google Chrome
          </ElementBlock>

          <ElementBlock
            image={"/img/elements/Laboratoř IT_VR/IT VR_motiv12.jpg"}
            title={"IT VR_motiv12"}
            reasoning="Asociace se společností Opera  |  možné použít, mluvíme-li o prohlížečích ale velmi opatrně"
          >
            Logo prohlížeče Opera
          </ElementBlock>

          <ElementBlock
            image={"/img/elements/Laboratoř IT_VR/IT VR_motiv15.jpg"}
            title={"IT VR_motiv15"}
            reasoning="Apple Emoji jsou explicitně free-to-use pouze na Apple zařízeních, licence se nevztahuje na rozšířené materiály"
            forbidden
          >
            Smiling face z emojisetu Apple Emojis
          </ElementBlock>

          <ElementBlock
            image={"/img/elements/Laboratoř IT_VR/IT VR_motiv19.jpg"}
            title={"IT VR_motiv19"}
            reasoning="Asociace s
            megakorporací Apple"
          >
            Ikona aplikace Nastavení ze systémů společnosti Apple
          </ElementBlock>

          <ElementBlock
            image={"/img/elements/Laboratoř IT_VR/IT VR_motiv20.jpg"}
            title={"IT VR_motiv20"}
            forbidden
            reasoning="Google zakazuje užití bez aktivního
            partnerství se společností Google"
          >
            Logo společnosti Google
          </ElementBlock>
        </ElementSubSection>

        <h3>Prvky neodpovídající realitě</h3>
        <p>
          Vzhledem ke vzdělávacímu účelu instituce, byly vyřazeny z běžného
          užívání prvky, které podporují mylnou představu o oboru, či jinak
          rozporují realitu.
        </p>
        <ElementSubSection>
          <ElementBlock
            image={"/img/elements/Laboratoř Chemie/Chemie_motiv15.jpg"}
            title={"Chemie_motiv15"}
            reasoning="Jedná se o biologicky nepřesný tvar DNA. Lze použít ve výjimečných případech pro svoji barevnost. Nahrazujeme Priroda_motiv34, který je tvarem přesný."
          >
            DNA vzor
          </ElementBlock>
        </ElementSubSection>
        <h3>Prvky nižší grafické kvality</h3>

        <p>
          U některých prvků bylo vypozorováno, že svým grafickým charakterem
          nezapadají mezi ostatní. Jedná se o prvky s příliš ilustrovaným
          vzhledem. Tyto prvky nejsou rovněž zakázané, ale je u nich očekáváno,
          že jsou, či v budoucnu budou nahrazeny ekvivalenty vyšší kvality.
        </p>

        <ElementSubSection>
          <ElementBlock
            image={"/img/elements/Laboratoř IT_VR/IT VR_motiv18.jpg"}
            title={"IT VR_motiv18"}
            reasoning="Plastický lesklý efekt ubírá symbolu na estetice"
          >
            Plastický symbol drátěné planety
          </ElementBlock>

          <ElementBlock
            image={"/img/elements/Laboratoř IT_VR/IT VR_motiv23.jpg"}
            title={"IT VR_motiv23"}
            reasoning="Ilustrace je nesourodá ve svém provedení s různou tloušťkou tahu  |  v budoucnu bude nahrazen fotografií"
          >
            Dobíjecí USB porty
          </ElementBlock>

          <ElementBlock
            image={"/img/elements/Laboratoř IT_VR/IT VR_motiv24.jpg"}
            title={"IT VR_motiv24"}
            reasoning="Volba barvy ikony není nejlepší a efekt stínu lze považovat za málo vkusný"
          >
            Geolokační ikona
          </ElementBlock>
        </ElementSubSection>

        <p className="above-heading mt-8 ">Výjimka</p>
        <h3 className="mb-2 mt-0">Znaky obecné</h3>

        <p>
          Výjimkami jsou znaky příliš obecné, aby mohly být zohledněny v
          autorském právu, ačkoliv jejich vzhled může být asociován s určitou
          společností / platformou.
        </p>

        <ElementSubSection>
          <ElementBlock
            image={"/img/elements/Laboratoř IT_VR/IT VR_motiv1.jpg"}
            title={"IT VR_motiv1"}
            reasoning="Logo Apple AirDrop. Jelikož se ovšem skládá pouze z obecných tvarů, nelze jej zahrnout do autorského práva a je tudíž ve veřejné doméně."
          >
            Logo Apple &quot;AirDrop&quot;
          </ElementBlock>
          <ElementBlock
            image={"/img/elements/Laboratoř IT_VR/IT VR_motiv25.jpg"}
            title={"IT VR_motiv25"}
            reasoning="Může být vnímáno jako YouTube logo | Je však pouze obecným zobrazením symbolu 'Přehrát', který je obecný a nemůže být nárokován jako copyrightovaný symbol"
          >
            Ikona &quot;Přehrát video&quot;
          </ElementBlock>
          <ElementBlock
            image={"/img/elements/Laboratoř IT_VR/IT VR_motiv29.jpg"}
            title={"IT VR_motiv29"}
            reasoning="Může být vnímáno jako spojení s prohlížeči (Google Chrome) | Je však pouze obecným zobrazením špiona a nemůže být tudíž nárokována jako copyrightovaný symbol"
          >
            Ikona režimu inkognito v mnoha prohlížečích
          </ElementBlock>
        </ElementSubSection>
      </Section>
    </>
  );
};

export default ZakazanePrvkyPage;

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
        <h3 className="mt-8 mb-2">Prvky spjaté s komerčními subjekty</h3>
        <ul>
          <li>
            Vzhledem k charakteru SFÉRY, jakožto vzdělávacího zařízení s určitou
            mírou nestranosti v komerčním prostoru bylo ustanoveno omezené
            používání u původních prvků zobrazující loga spjatá s komerčními,
            často korporátními subjekty.
          </li>
          <li>
            Tyto symboly nejsou zakázané, jejich použití by mělo být ovšem velmi
            omezené a oddůvodněné kontextem, aby nedocházelo k mylné asociaci se
            zmíněnými subjekty.
          </li>
        </ul>

        <ElementSubSection>
          <ElementBlock
            image={"/img/prvky/IT_motiv2.jpg"}
            title={"IT_motiv2"}
            reasoning="Asociace s megakorporací Apple"
          >
            Načítací kurzor z macOS
          </ElementBlock>

          <ElementBlock
            image={"/img/prvky/IT_motiv8.jpg"}
            title={"IT_motiv8"}
            reasoning="Asociace s megakorporací Google  |  možné použít, mluvíme-li o prohlížečích ale velmi opatrně"
          >
            Logo prohlížeče Google Chrome
          </ElementBlock>

          <ElementBlock
            image={"/img/prvky/IT_motiv12.jpg"}
            title={"IT_motiv12"}
            reasoning="Asociace se společností Opera  |  možné použít, mluvíme-li o prohlížečích ale velmi opatrně"
          >
            Logo prohlížeče Opera
          </ElementBlock>

          <ElementBlock
            image={"/img/prvky/IT_motiv15.jpg"}
            title={"IT_motiv15"}
            reasoning="Apple Emoji jsou explicitně free-to-use pouze na Apple zařízeních, licence se nevztahuje na rozšířené materiály"
            forbidden
          >
            Smiling face z emojisetu Apple Emojis
          </ElementBlock>

          <ElementBlock
            image={"/img/prvky/IT_motiv19.jpg"}
            title={"IT_motiv19"}
            reasoning="Asociace s
            megakorporací Apple"
          >
            Ikona aplikace Nastavení ze systémů společnosti Apple
          </ElementBlock>

          <ElementBlock
            image={"/img/prvky/IT_motiv20.jpg"}
            title={"IT_motiv20"}
            forbidden
            reasoning="Google zakazuje užití bez aktivního
            partnerství se společností Google"
          >
            Logo společnosti Google
          </ElementBlock>
        </ElementSubSection>

        <h3 className="mt-8 mb-2">Prvky nižší grafické kvality</h3>
        <ul>
          <li>
            U některých prvků bylo vypozorováno, že svým grafickým charakterem
            nezapadají mezi ostatní. Jedná se o prvky s příliš ilustrovaným
            vzhledem. Tyto prvky nejsou rovněž zakázané, ale je u nich
            očekáváno, že jsou, či v budoucnu budou nahrazeny ekvivalenty vyšší
            kvality.
          </li>
        </ul>

        <ElementSubSection>
          <ElementBlock
            image={"/img/prvky/IT_motiv18.jpg"}
            title={"IT_motiv18"}
            reasoning="Plastický lesklý efekt ubírá symbolu na estetice"
          >
            Plastický symbol drátěné planety
          </ElementBlock>

          <ElementBlock
            image={"/img/prvky/IT_motiv23.jpg"}
            title={"IT_motiv23"}
            reasoning="Ilustrace je nesourodá ve svém provedení s různou tloušťkou tahu  |  v budoucnu bude nahrazen fotografií"
          >
            Dobíjecí USB porty
          </ElementBlock>

          <ElementBlock
            image={"/img/prvky/IT_motiv24.jpg"}
            title={"IT_motiv24"}
            reasoning="Volba barvy ikony není nejlepší a efekt stínu lze považovat za málo vkusný"
          >
            Geolokační ikona
          </ElementBlock>
        </ElementSubSection>

        <p className="above-heading mt-8 ">Výjimka</p>
        <h3 className="mb-2">Znaky obecné</h3>
        <ul>
          <li>
            Výjimkami jsou znaky příliš obecné, aby mohly být zohledněny v
            autorském právu, ačkoliv jejich vzhled může být asociován s určitou
            společností / platformou.
          </li>
        </ul>
      </Section>
    </>
  );
};

export default ZakazanePrvkyPage;

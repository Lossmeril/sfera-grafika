import ExampleSubSection, {
  CorrectExample,
  ErrorExample,
} from "@/components/sections/subsections/exampleSection";
import Section from "@/components/sections/sections";

const DatumyPage = () => {
  return (
    <>
      <Section last>
        <h2>Psaní slova SFÉRA a odvozených variant</h2>
        <ul>
          <h3 className="mt-8 mb-2">SFÉRA</h3>
          <li className="mb-2">
            Pro zachování vizuální jednotnosti s logem bylo určeno, že SFÉRA a
            všechna její skloňování se{" "}
            <strong>píší verzálkami (velkými písmeny)</strong>. Při skloňování
            se <strong>kapitalizuje celé slovo</strong>, nikoliv pouze jeho
            kořen.
          </li>
          <p className="above-heading mt-8 ">Výjimka</p>
          <h3 className="mb-2">sférický</h3>
          <li className="mb-2">
            Výjimkou je odvozené přídavné jméno{" "}
            <strong>&ldquo;sférický&rdquo;</strong> (vč. skloňování), které se
            píší <strong>bez jakékoliv úpravy kapitalizace</strong>.
          </li>
          <p className="above-heading mt-8 ">Výjimka</p>
          <h3 className="mb-2">sféřan</h3>
          <li className="mb-2">
            Chceme-li mluvit o člověku ze SFÉRY jako o{" "}
            <strong>&ldquo;sféřanovi&rdquo;</strong> (pod. jméno, vzor pán),
            užijeme <strong>normální kapitalizaci</strong>, která vyplývá z věty
          </li>
          <p className="above-heading mt-8 ">Výjimka</p>
          <h3 className="mb-2">O koulích a lidech</h3>
          <li className="mb-2">
            Druhou výjimkou je neobvyklé použití slova <strong></strong>
            &ldquo;sféra&rdquo; v kontextu koule v Sále Science on a Sphere,
            která se rovněž <strong>nekapitalizuje</strong>, aby nedošlo k mýlce
            s celou institucí.
            <br />
            Toto použití je ale matoucí v kontextu vzdělávacího centra, proto
            jej prosím používejte opravdu jen výjimečně.
          </li>
        </ul>
        <ExampleSubSection
          correct={
            <>
              <CorrectExample
                content={
                  <>
                    Televizní štáb dnes navštívil Vzdělávací centrum{" "}
                    <em>SFÉRA</em> v Pardubicích
                  </>
                }
              />
              <CorrectExample
                content={
                  <>
                    Michal je interní <em>sférický</em> grafik
                  </>
                }
              />
              <CorrectExample
                content={
                  <>
                    Přijďte na víkendové dílny do <em>SFÉRY</em>
                  </>
                }
              />
              <CorrectExample
                content={
                  <>
                    Vyfoťte se se <em>sférou</em> v Sále Science on a Sphere a
                    vyhrajte cenu!
                  </>
                }
              />
              <CorrectExample
                content={
                  <>
                    Pro více informací se obraťte na svého nejbližího{" "}
                    <em>sféřana</em>
                  </>
                }
              />
            </>
          }
          errors={
            <>
              <ErrorExample
                content={
                  <>
                    Vzdělávací centrum <em>Sféra</em> se prezentovalo během dne
                    otevřených dveří
                  </>
                }
                explanation={"správně je SFÉRA"}
              />
              <ErrorExample
                content={
                  <>
                    Je mnoho důvodů proč přijít do <em>SFÉRy</em>!
                  </>
                }
                explanation={"správně je SFÉRY"}
              />
              <ErrorExample
                content={
                  <>
                    Přijďte posedět a poznejte <em>SFÉRICKÝ</em> tým!
                  </>
                }
                explanation={"správně je sférický"}
              />
              <ErrorExample
                content={
                  <>
                    Během programu vám na <em>SFÉRU</em> promítneme živou mapu
                    nákladních lodí.
                  </>
                }
                explanation={"jedná se o kouli, takže je potřeba psát sféru"}
              />
              <ErrorExample
                content={
                  <>
                    Vzdělávací centrum SFÉRA reprezentoval ve volejbalovém
                    turnaji tým <em>SFÉŘANŮ</em>
                  </>
                }
                explanation={"správně je sféřanů"}
              />
            </>
          }
        />
      </Section>
    </>
  );
};

export default DatumyPage;

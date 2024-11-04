import ExampleSubSection, {
  CorrectExample,
  ErrorExample,
} from "@/components/sections/subsections/exampleSection";
import Section from "@/components/sections/sections";

const DatumyPage = () => {
  return (
    <>
      <Section>
        <h2>Datumy a časy</h2>
        <p>
          Datumy se uvádějí vždy ve formátu <strong>D. měsíc YYYY.</strong>{" "}
          Měsíc uvádíme slovem pro zvýšení čitelnost (předpokládáme, že v jeho
          okolí bude mnoho čísel).
        </p>
        <p>
          Jednociferný den uvádíme pouze s jednou číslicí. Jednotlivé části
          oddělujeme mezerou, za dnem píšeme tečku.{" "}
        </p>
        <p>
          Časy se uvádí ve formátu H.mm. Hodiny a minuty jsou odděleny tečkou.
          Jednocifernou hodinu uvádíme s jednou číslicí. V případě rozmezí
          datumů i časů, užíváme dlouhou pomlčku (em dash: —) bez mezer.
        </p>
        <p>
          Píšeme-li datum i čas za sebou, oddělíme je svislou čárou: | s
          mezerami na obou stranách.
        </p>
        <ExampleSubSection
          correct={
            <>
              <CorrectExample content={<>10. června 2024</>} />
              <CorrectExample
                content={
                  <>
                    <em>5.</em> června 2024
                  </>
                }
                explanation="jednociferné datum"
              />
              <CorrectExample
                content={
                  <>
                    1.<em>&mdash;</em>25. dubna 2024
                  </>
                }
                explanation="dlouhá pomlčka bez mezer"
              />
              <CorrectExample
                content={
                  <>
                    14<em>.</em>30
                  </>
                }
                explanation="tečka mezi minutami a hodinami"
              />
              <CorrectExample
                content={
                  <>
                    <em>9</em>.00
                  </>
                }
              />
              <CorrectExample
                content={
                  <>
                    18.30<em>&mdash;</em>20:00
                  </>
                }
                explanation={"dlouhá pomlčka bez mezer"}
              />
              <CorrectExample
                content={
                  <>
                    23. března 2024<em> | </em>9.00—13.30
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
                    10. <em>6.</em> 2024
                  </>
                }
                explanation={"měsíc je psaný číslicí"}
              />
              <ErrorExample
                content={
                  <>
                    <em>05.</em> června 2024
                  </>
                }
                explanation={"jednociferné datum psané dvěma číslicemi"}
              />
              <ErrorExample
                content={
                  <>
                    1.<em> - </em>25. dubna 2024
                  </>
                }
                explanation={"malá pomlčka s mezerami"}
              />
              <ErrorExample
                content={
                  <>
                    14<em>:</em>30
                  </>
                }
                explanation="dvojtečka mezi minutami a hodinami"
              />
              <ErrorExample
                content={
                  <>
                    <em>09</em>.00
                  </>
                }
                explanation="dvě číslice"
              />
              <ErrorExample
                content={
                  <>
                    18.30<em> - </em>20:00
                  </>
                }
                explanation={"malá pomlčka s mezerami"}
              />
              <ErrorExample
                content={
                  <>
                    23. března 2024<em>, </em>9.00—13.30
                  </>
                }
                explanation={"čárka"}
              />
            </>
          }
        />
      </Section>
    </>
  );
};

export default DatumyPage;

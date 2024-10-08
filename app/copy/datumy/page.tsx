import ExampleSection, {
  CorrectExample,
  ErrorExample,
} from "@/components/sections/exampleSection";
import Section from "@/components/sections/section";

const DatumyPage = () => {
  return (
    <div>
      <Section>
        <h2>Datumy a časy</h2>
        <ul>
          <li>
            Datumy se uvádějí vždy ve formátu <strong>D. měsíc YYYY.</strong>{" "}
            Měsíc uvádíme slovem pro zvýšení čitelnost (předpokládáme, že v jeho
            okolí bude mnoho čísel).
          </li>
        </ul>
        <ExampleSection
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
            </>
          }
        />
      </Section>
    </div>
  );
};

export default DatumyPage;

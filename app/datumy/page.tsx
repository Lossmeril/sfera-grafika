import Example from "@/components/example";
import Section from "@/components/sections/section";

const DatumyPage = () => {
  return (
    <div>
      <Section>
        <h2>Datumy a časy</h2>
        <p>
          Datumy se uvádějí vždy ve formátu <strong>D. měsíc YYYY.</strong>{" "}
          Měsíc uvádíme slovem pro zvýšení čitelnost (předpokládáme, že v jeho
          okolí bude mnoho čísel).
        </p>
        <Example>10. června 2024</Example>
        <p>
          Jednociferný den uvádíme pouze s jednou číslicí. Jednotlivé části
          oddělujeme mezerou, za dnem píšeme tečku.
        </p>
        <Example>2. června 2024</Example>
        <p>
          Časy se uvádí ve formátu H.mm. Hodiny a minuty jsou odděleny tečkou.
          Jednocifernou hodinu uvádíme s jednou číslicí.
        </p>
        <Example>
          8.00
          <br />
          16.30
        </Example>
        <p>
          V případě rozmezí datumů i časů, užíváme dlouhou pomlčku (em dash:
          &mdash;) bez mezer.
        </p>
        <Example>
          8.00&mdash;8.45
          <br />
          30. července&mdash;2. srpna 2024
        </Example>
        <p>
          Píšeme-li datum i čas za sebou, oddělíme je svislou čárou: | s
          mezerami na obou stranách.
        </p>
      </Section>
    </div>
  );
};

export default DatumyPage;

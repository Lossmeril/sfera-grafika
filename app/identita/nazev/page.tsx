import Section from "@/components/sections/sections";
import ExampleSubSection, {
  CorrectExample,
  ErrorExample,
} from "@/components/sections/subsections/exampleSection";
import Link from "next/link";

const UnikatniSadyPage = () => {
  return (
    <>
      <Section last>
        <h2>Název instituce</h2>
        <p>
          Pro běžnou komunikaci s veřejností používáme jeden ze dvou názvů:{" "}
          <strong>Vzdělávací centrum SFÉRA Pradubice</strong>, nebo{" "}
          <strong>SFÉRA - Vzdělávací centrum Pardubice</strong> (podle loga).
        </p>
        <p>
          Toto aplikujeme pouze v případě, že potřebujeme instituci prezentovat{" "}
          <strong>celým jménem</strong>. Mluvíme-li o SFÉŘE v obyčejné větě,
          můžeme použít jakýkoliv tvar, který dodržuje dobrý vkus a není v
          rozporu s podstatou věci.
        </p>
        <div className="bg-accent-pink p-5 my-5 ">
          <p className="">
            Název <strong>Centrální polytechnické dílny, z.s.</strong> v běžné
            komunikaci <strong>nepoužíváme</strong>. Tento název je určen pro
            formální komunikaci a administrativu, do každodenní prezentace
            nepatří, aby nedocházelo k zbytečnému matení obecné veřejnosti.
          </p>

          <p className="mb-0">
            <strong>SFÉRA není s.r.o.</strong>, ani <strong>a.s.</strong>, proto
            prosíme nepoužívejte tyto zkratky v komunikaci s názvem instituce.
          </p>
        </div>

        <p>
          Slovo SFÉRA vždy <strong>kapitalizujeme</strong>. Více k tomuto je na
          stránce <Link href="/copy/sfera">Jak se píše SFÉRA</Link>.
        </p>

        <h3>Anglický název</h3>
        <p>
          Název instituce <strong>nepřekládáme do angličtiny</strong>. Uvádíme
          jej tedy jako <strong>SFÉRA</strong>, respektive můžeme vypustit
          diakritiku a uvádět pouze <strong>SFERA</strong>.
        </p>
        <p>
          Vzhledem k tomu, že název je důležitý pro pochopení myšlenky
          instituce, je možné jej{" "}
          <strong>při prvním použití přeložit pomocí závorek</strong>. Toto by
          mělo platit jen u první instance, nebo u těch, kde je přeložení nutné
          k pochopení kontextu.
        </p>
        <ExampleSubSection
          correct={
            <>
              <CorrectExample
                content={
                  <>
                    The <em>SFÉRA (SPHERE)</em> Education Centre opened at the
                    end of September 2023 together with other institutions on
                    the premises of the Automatic Mills. Together, they form a
                    new urban cultural district in Pardubice in the East Bohemia
                    region of the Czech Republic...
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
                    The <em>SPHERE</em> Education Centre opened at the end of
                    September 2023 together with other institutions on the
                    premises of the Automatic Mills. Together, they form a new
                    urban cultural district in Pardubice in the East Bohemia
                    region of the Czech Republic...
                  </>
                }
                explanation="Nepoužíváme samostatný překlad místo názvu"
              />
            </>
          }
        />
      </Section>
    </>
  );
};

export default UnikatniSadyPage;

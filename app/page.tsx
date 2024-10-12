import Section, { ImageSection } from "@/components/sections/sections";

const Home = () => {
  return (
    <>
      <ImageSection image="/img/sfera-budova.jpg" />
      <Section last>
        <h2>Grafický manifest sférický</h2>
        <p>
          Drahý sféřane, tato webová stránka je sjednocením vizuáních pravidel{" "}
          <strong>Michala Špitálského</strong> a původního grafického manuálu
          studia <strong>Permanent Office</strong> a grafičky{" "}
          <strong>Cindy Kutíkové</strong>.
        </p>
        <p>
          Tato webovka obsahuje základní pravidla pro práci se značkou
          Vzdělávacího centra SFÉRA Pardubice. Mnoho pravidel bylo od původního
          manuálu upraveno z důvodů, které vyplynuly během používání identity v
          praxi. Na základě tohoto dodatku by měla být sjednocena největší část
          vizuální identity pro ještě větší ucelenost komunikace a pro zvýšení
          rozpoznatelnosti značky veřejností.
        </p>
        <p>
          Jelikož SFÉRA komunikuje s veřejností na denní bázi, je zapotřebí, aby
          veškerá komunikace vypadala jednotně. Může se zdát, že se jedná o
          slovíčkaření a pedantský drobnohled, ale na vizuálních podkladech
          vypadá lépe, když na první pohled vypadají, že je psal ucelený
          kolektiv a ne 30 individuálních osob, každá přidávající něco svého.
        </p>
      </Section>
    </>
  );
};

export default Home;

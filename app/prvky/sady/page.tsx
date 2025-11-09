"use client";

import Section, { ImageSection } from "@/components/sections/sections";
import ElementGridSubSection from "@/components/sections/subsections/elementGridSections";
import { Facility } from "@/utils/apiTypes";

import Link from "next/link";
import { useEffect, useState } from "react";

const SadyPrvkuPage = () => {
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(
          "https://branding.sferagrafika.eu/api/facilities"
        );
        if (!res.ok) throw new Error("Failed to fetch items");
        const data: Facility[] = await res.json();
        setFacilities(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <>
      <ImageSection image="/img/pattern-wallpaper.webp" />
      <Section last>
        <h2>Sady prvků</h2>
        <ul className="mb-10">
          <p>
            Níže naleznete jednotlivé sady z původního grafického manuálu pro
            jednotlivé učebny. Tato stránka obashuje i{" "}
            <strong>nové autorské prvky</strong>, které vznikly až během provozu
            SFÉRY. Tyto nové prvky jsou označeny{" "}
            <strong className="text-hriste">zeleným puntíkem</strong>.
          </p>
          <p>
            Některé prvky jsou přešktrnuté&mdash;to znamená, že se jedná o tzv.{" "}
            <strong>zakázaný prvek</strong>. Více o zakázaných prvcích se
            dozvíte na stránce{" "}
            <Link href="/prvky/zakazane-prvky">Zakázané prvky</Link>.
          </p>
          <div className="bg-accent-pink p-5 mt-5">
            <p>
              Obrázky níže jsou silně zkomprimovány, aby mohly být načteny na
              webu.
            </p>
            <p className="mb-0">
              {" "}
              Prosím{" "}
              <strong>nekopírujte obrázky pro použití v propagaci odsud</strong>
              . Plnou velikost obrázků bez pozadí naleznete na platformě{" "}
              <Link
                href={
                  "https://sferapardubice.sharepoint.com/:f:/s/SFERA/Es0LEpuZCf9PkOHb8IMDEosBaZhIxzIB1I0EofrNn9oUzg?e=QRNKWu"
                }
                target="_blank"
              >
                SharePoint
              </Link>
              .
            </p>
          </div>
        </ul>

        {loading && <p>Načítání sad prvků...</p>}

        {!loading && facilities.length === 0 && (
          <p>Žádné sady prvků nebyly nalezeny.</p>
        )}

        {facilities &&
          facilities
            .filter((facility) => facility.elementSet)
            .map((facility) => (
              <ElementGridSubSection key={facility.id} facility={facility} />
            ))}
      </Section>
    </>
  );
};

export default SadyPrvkuPage;

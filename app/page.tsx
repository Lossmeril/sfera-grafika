import ElementSet from "@/components/element-set";

export default function Home() {
  return (
    <main className="px-[5vw] flex flex-col justify-center max-w-screen overflow-x-hidden">
      <ElementSet
        name="Laboratoř Chemie"
        folderPath="/img/prvky/CHEMIE"
        prefix="Chemie"
        numberOfElements={26}
        color="#8454d1"
      />

      <ElementSet
        name="Laboratoř Přírodopisu"
        folderPath="/img/prvky/PRIRODA"
        prefix="Priroda"
        numberOfElements={27}
        color="#004F9F"
      />

      <ElementSet
        name="Laboratoř Fyziky"
        folderPath="/img/prvky/FYZIKA"
        prefix="Fyzika"
        numberOfElements={25}
        color="#EC619F"
      />

      <ElementSet
        name="Laboratoř IT/VR"
        folderPath="/img/prvky/IT"
        prefix="IT"
        numberOfElements={29}
        color="#83D0F5"
      />

      <ElementSet
        name="Sférické Hřiště"
        folderPath="/img/prvky/DETI"
        prefix="Deti"
        numberOfElements={27}
        color="#3FA535"
      />

      <ElementSet
        name="Dílna Kovu"
        folderPath="/img/prvky/KOV"
        prefix="Kov Elektro"
        numberOfElements={25}
        color="#AFCA0B"
      />

      <ElementSet
        name="Dílna Dřeva"
        folderPath="/img/prvky/DREVO"
        prefix="Drevo"
        numberOfElements={24}
        color="#7E5228"
      />

      <ElementSet
        name="Dílna Grafiky"
        folderPath="/img/prvky/GRAFIKA"
        prefix="Grafika"
        numberOfElements={27}
        color="#F7941D"
      />

      <ElementSet
        name="Dílna Textilu"
        folderPath="/img/prvky/TEXTIL"
        prefix="Textil"
        numberOfElements={26}
        color="#FFDD00"
      />

      <ElementSet
        name="Sál Science on a Sphere"
        folderPath="/img/prvky/SOS"
        prefix="Science_Sphere"
        numberOfElements={24}
        color="#E74011"
      />

      <ElementSet
        name="Smíšené Prvky"
        folderPath="/img/prvky/MISC"
        prefix="Misc"
        numberOfElements={4}
        color="#000000"
      />
    </main>
  );
}

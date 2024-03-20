import ElementSet from "@/components/element-set";

export default function Home() {
  return (
    <main className="px-[5vw] flex flex-col justify-center w-screen">
      <ElementSet
        name="Laboratoř Chemie"
        folderPath="/img/prvky/CHEMIE"
        prefix="Chemie"
        numberOfElements={26}
        color="#8454d1"
      />
    </main>
  );
}

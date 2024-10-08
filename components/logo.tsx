const LogoHeader = () => {
  const chance = 1; //ŠANCE KOLIK
  const max = 1000; //Z KOLIKA

  const roll = Math.floor(Math.random() * max) + 1;

  console.log(roll);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={roll > chance ? "/img/logo.svg" : "/img/logo-ncl.png"}
      alt="logo SFÉRA"
      className={
        "py-2 lg:py-10 " +
        (roll > chance
          ? "px-5 lg:px-5 xl:px-10 w-[150px] md:w-[250px] lg:w-[300px]"
          : "px-5 lg:px-5 xl:px-5 w-[250px] md:w-[350px] lg:w-[500px]")
      }
    />
  );
};

export default LogoHeader;

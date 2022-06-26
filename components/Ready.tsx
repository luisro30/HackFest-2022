import Image from "next/image";
import Link from "next/link";
const Ready = () => {
  return (
    <div className="relative">
      {/* mobile background image  */}
      <div className="-z-10 md:hidden">
        <Image
          src="/images/homepage/ready-bg-mobile@2x.jpg"
          alt="ready background image"
          width={375}
          height={328}
          layout="responsive"
        />
      </div>

      {/* tablet background image  */}
      <div className="-z-10 hidden md:block xl:hidden">
        <Image
          src="/images/homepage/ready-bg-tablet@2x.jpg"
          alt="ready background tablet"
          width={768}
          height={272}
          layout="responsive"
        />
      </div>

      {/* desktop background image  */}
      <div className="-z-10 hidden xl:block">
        <Image
          src="/images/homepage/ready-bg-desktop@2x.jpg"
          alt="ready background desktop"
          width={1440}
          height={240}
          layout="responsive"
        />
      </div>

      <div className="bg-transparent xl:h-[240px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute text-white flex flex-col justify-center items-center xl:flex-row xl:justify-between xl:px-[165px]">
        <h2 className="my-5 font-semibold leading-10 tracking-[-0.4px] text-center text-[32px] sm:text-5xl  xl:w-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing  
        </h2>
        <div className="text-center">
          <Link href="/booking" passHref>
            <button className="uppercase bg-transparent hover:bg-white hover:text-[#17192B] transition-colors ease-in-out border px-[54px] py-6 text-[14px] font-semibold leading-4 tracking-[2px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum atque recusandae
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ready;

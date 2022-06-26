import { Tab } from "@headlessui/react";


const Tabs = () => {
  return (
    <Tab.Group defaultIndex={0}>
      <Tab.List className="space-y-5 md:space-y-0 md:mt-16 uppercase  flex flex-col justify-center items-center mt-10 mb-5 md:mb-14 leading-[28px] tracking-[2px] md:flex-row md:space-x-14 xl:space-x-0 text-lg md:text-xl xl:flex-col xl:items-start xl:space-y-3">
        <Tab
          className={({ selected }) =>
            selected
              ? "border-b-2 transition cursor-pointer"
              : "opacity-50 transition cursor-pointer"
          }
        >
          Family Gathering
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? "border-b-2 transition cursor-pointer"
              : "opacity-50 transition cursor-pointer"
          }
        >
          Special Events
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? "border-b-2 transition cursor-pointer"
              : "opacity-50 transition cursor-pointer"
          }
        >
          Social Events
        </Tab>
      </Tab.List>
      <Tab.Panels className="flex flex-col justify-center items-center text-center xl:items-start">
        {/* Content 1 */}
        <Tab.Panel>
          <h2 className="mt-5 md:mt-10 font-semibold text-4xl tracking-[-0.4px] md:text-5xl">
            Family Gathering
          </h2>
          <p className="my-3 md:my-5 px-10 md:p-0 text-[15px] md:text-2xl font-normal leading-[25px] tracking-[-0.19px] w-[327px] md:w-[457px] xl:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            voluptate ducimus vel porro voluptatibus itaque exercitationem eius!
            Ea omnis ut, nobis voluptatibus doloremque, sed ullam, dolorum alias
            illo ab magni!
          </p>
        
        </Tab.Panel>

        {/* Content 2 */}
        <Tab.Panel>
          <h2 className="mt-5 md:mt-10 font-semibold text-4xl tracking-[-0.4px] md:text-5xl">
            Special Events
          </h2>
          <p className="my-3 md:my-5 px-10 md:p-0 text-[15px] md:text-2xl font-normal leading-[25px] tracking-[-0.19px] w-[327px] md:w-[457px] xl:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            laboriosam cum atque iusto, nesciunt laborum temporibus modi,
            excepturi eveniet veniam sapiente provident voluptates! Autem
            deserunt quam quisquam harum nesciunt voluptates!
          </p>

        </Tab.Panel>

        {/* Content 3 */}
        <Tab.Panel>
          <h2 className="mt-5 md:mt-10 font-semibold text-4xl tracking-[-0.4px] md:text-5xl">
            Social Events
          </h2>
          <p className="my-3 md:my-5 px-8 md:p-0 text-[15px] md:text-2xl font-normal leading-[25px] tracking-[-0.19px] w-[327px] md:w-[457px] xl:text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
            veniam harum natus, maxime voluptatem nulla iusto, quas, aliquam
            dolores saepe earum a! Inventore animi, tenetur illo odio optio
            voluptate earum!
          </p>
  
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Tabs;

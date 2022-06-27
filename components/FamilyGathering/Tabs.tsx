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
          Malnutrición
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? "border-b-2 transition cursor-pointer"
              : "opacity-50 transition cursor-pointer"
          }
        >
          La importancia del desayuno
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? "border-b-2 transition cursor-pointer"
              : "opacity-50 transition cursor-pointer"
          }
        >
          Dormir bien
        </Tab>
      </Tab.List>
      <Tab.Panels className="flex flex-col justify-center items-center text-center xl:items-start">
        {/* Content 1 */}
        <Tab.Panel>
          <h2 className="mt-5 md:mt-10 font-semibold text-4xl tracking-[-0.4px] md:text-5xl">
            Malnutrición
          </h2>
          <p className="my-3 md:my-5 px-10 md:p-0 text-[15px] md:text-2xl font-normal leading-[25px] tracking-[-0.19px] w-[327px] md:w-[457px] xl:text-left">
            Ocurre cuando el cuerpo no obtiene suficientes nutrientes. Las
            causas son una dieta deficiente, trastornos digestivos y otras
            enfermedades.Los síntomas son fatiga, mareos y pérdida de peso. La
            desnutrición no tratada puede causar retraso mental o incapacidad
            física. El tratamiento debe enfocarse en las afecciones subyacentes
            y el reemplazo de los nutrientes faltantes.
          </p>
        </Tab.Panel>

        {/* Content 2 */}
        <Tab.Panel>
          <h2 className="mt-5 md:mt-10 font-semibold text-4xl tracking-[-0.4px] md:text-5xl">
            La importancia del desayuno
          </h2>
          <p className="my-3 md:my-5 px-10 md:p-0 text-[15px] md:text-2xl font-normal leading-[25px] tracking-[-0.19px] w-[327px] md:w-[457px] xl:text-left">
            El desayuno es considerado la comida más importante del día debido a
            que los alimentos que se ingieren son los primeros después de un
            largo periodo de ayuno derivado de las horas en las que se está
            dormido; el desayuno además precede las horas del día en las que se
            lleva mayor actividad y por lo tanto, mayor gasto de energía.
          </p>
        </Tab.Panel>

        {/* Content 3 */}
        <Tab.Panel>
          <h2 className="mt-5 md:mt-10 font-semibold text-4xl tracking-[-0.4px] md:text-5xl">
            Dormir bien
          </h2>
          <p className="my-3 md:my-5 px-8 md:p-0 text-[15px] md:text-2xl font-normal leading-[25px] tracking-[-0.19px] w-[327px] md:w-[457px] xl:text-left">
            Cuando usted duerme está inconsciente, pero las funciones de su
            cerebro y cuerpo siguen activas. El sueño es un complejo proceso
            biológico que le ayuda a procesar información nueva, mantenerse
            saludable y a sentirse descansado.
          </p>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Tabs;

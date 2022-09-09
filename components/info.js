import Link from "next/link";
import Content from "../components/content";
import IconGlasses from "./icon-glasses";
import IconRings from "./icon-rings";

export default function Info() {
  return (
    <section className="w-full min-h-[60vh] flex flex-col justify-center items-center">
      <Content>
        <div className="flex lg:flex-row flex-col justify-around my-5 text-2xl items-start">
          <Link href="https://mapy.cz/s/racakajohu">
            <a target="_blank" referrerPolicy="no-referrer">
              <ul className="cursor-pointer flex my-5 lg:my-0 items-center justify-start">
                <li>
                  <IconRings classes="fill-stone-700 hover:fill-sunflower w-16 md:w-24 ease-out duration-300 transition hover:scale-110" />
                </li>
                <ul className="ml-5 text-stone-800">
                  <li className="uppercase text-[1.2rem]">obřad</li>
                  <li className="font-semibold ">Kostel sv. Prokopa</li>
                  <li>12:30</li>
                </ul>
              </ul>
            </a>
          </Link>
          <Link href="https://mapy.cz/s/kuzofejuro">
            <a target="_blank" referrerPolicy="no-referrer">
              <ul className="cursor-pointer flex my-5 lg:my-0 items-center justify-start">
                <li>
                  <IconGlasses classes="fill-stone-700 hover:fill-sunflower w-16 md:w-24 ease-out duration-300 transition hover:scale-110" />
                </li>

                <ul className="ml-5 text-stone-800">
                  <li className="uppercase text-[1.2rem]">hostina</li>
                  <li className="font-semibold">
                    Kulturní dům
                    <br />
                    Hamry nad Sázavou
                  </li>
                  <li>18:30</li>
                </ul>
              </ul>
            </a>
          </Link>
        </div>
        <div className="lg:mt-20 mt-10 lg:mb-0 mb-4">
          <p className="italic">
            <strong>Dopravní zpravodajství:</strong> Kdo pojede autem směrem od Hradce Králové, ve městě Trhová Kamenice se dejte směrem na Hlinsko. Potom z Hlinska směr Vojnův Městec. Připočítejte čas na čekání na semaforu před Žďárem nad Sázavou. Počítejte celkem 45 minut navíc. </p>
        </div>
      </Content>
    </section>
  );
}

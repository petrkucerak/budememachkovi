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
        <div className="text-center mt-20">
          <p className="">
            <strong className="uppercase text-xl">Dopravní zpravodajství</strong>
            <br></br>Pokud se chcete vyhnout <strong>dopravnímu omezení</strong>, podívejte se na přehled, který jsme připravili.{" "}
            <br></br>
            <Link href={"./assets/image/Dopravni-zpravodajstvi.png"}>
              <a className="uppercase text-stone-700 underline">zobrazit</a>
            </Link>
          </p>
        </div>
      </Content>
    </section>
  );
}

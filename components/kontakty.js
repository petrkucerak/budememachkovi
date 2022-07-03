import { IconPhone } from "@tabler/icons";
import Link from "next/link";
import Content from "../components/content";

export default function Kontakty() {
  return (
    <footer className="w-full min-h-[70vh] flex flex-col justify-center items-center bg-stone-900 drop-shadow-2xl text-white py-8 z-10">
      <Content>
        <h2 className="text-6xl mb-5 text-center">Kontakty</h2>
        <div className="text-xl sm:text-2xl flex flex-col lg:flex-row justify-around items-start">
          <div className="flex justify-around items-center flex-row lg:flex-col mb-5 lg:mb-0">
            <img
              src="assets/image/ada.jpg"
              className="rounded-full w-32 sm:w-48 border-2 border-stone-800 mr-5 lg:mr-0"
              alt="svedkyne Ada"
            ></img>
            <ul>
              <li>
                <h3 className="font-mali text-2xl mt-4 font-semibold">
                  Adéla Slámová
                </h3>
              </li>
              <li>svědkyně</li>
              <li className="flex items-center">
              <IconPhone stroke={1} className="mr-1"/>
                <Link href="tel:+420776313105">
                  <a className="text-stone-300">776 313 105</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-around items-center flex-row lg:flex-col mt-5 lg:mt-0">
            <img
              src="assets/image/petr.jpg"
              className="rounded-full w-32 sm:w-48 border-2 border-stone-800 mr-5 lg:mr-0"
              alt="Svedek Petr"
            ></img>
            <ul> 
              <li>
                <h3 className="font-mali text-2xl mt-4 font-semibold">
                  Petr Kučera
                </h3>
              </li>
              <li>svědek</li>
              <li className="flex items-center">
                <IconPhone stroke={1} className="mr-1"/>
                <Link href="tel:+420731769416">
                  <a className="text-stone-300">731 769 416</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Content>
    </footer>
  );
}

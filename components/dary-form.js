import Link from "next/link";
import Content from "./content";

export default function DaryForm() {
  return (
    <section className="w-full min-h-[60vh] flex flex-col justify-center items-center pb-8 pt-8">
      <Content>
        <div className="flex w-full justify-between items-start lg:flex-row flex-col my-8">
          <div className="mb-10 lg:mb-0">
            <h2 className="text-5xl mb-2">Svatební dary</h2>
            <p className="max-w-[1000px] w-[85vw] lg:w-[25vw] text-xl">
              Budeme rádi za každý dar, kterým nás podpoříte v začátcích
              společné cesty. Pokud byste chtěli, aby byl Váš dar přesně na míru
              pro nás, neváhejte nás kontaktovat.
            </p>
          </div>
          <div className="mt-10 lg:mt-0">
            <h2 className="text-5xl mb-2">Potvrzení účasti</h2>
            <p className="max-w-[1000px] w-[85vw] lg:w-[25vw] text-xl">
              Plánujete přijít na naši svatbu? Prosím potvrďte svoji účast
              vyplněním formuláře.
            </p>
            <Link href="https://forms.gle/g3QtzF3HDb4Dc9mKA">
              <a target="_blank">
                <button className="bg-sunflower my-5 p-3 rounded-md uppercase text-xl border-2 border-stone-700 drop-shadow hover:drop-shadow-2xl ease-out duration-300 transition">
                  potvrdit
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div className="flex w-full justify-between items-start flex-col my-8 p-8 bg-stone-100 rounded">
          <h2 className="text-5xl mb-2">Ubytování</h2>
          <p className="w-full text-xl">
            Ubytování si prosím zařiďte sami. Ve Žďáru nad Sázavou doporučujeme:{" "}
            <Link href="https://www.nabrezniterasy.cz/">
              <a
                target="_blank"
                className="underline text-stone-500 hover:text-stone-800"
              >
                Nábřežní terasy
              </a>
            </Link>
            ,{" "}
            <Link href="https://hotelulabute.cz/">
              <a
                target="_blank"
                className="underline text-stone-500 hover:text-stone-800"
              >
                Hotel U Labutě
              </a>
            </Link>
            ,{" "}
            <Link href="http://www.hotelhajcman.cz/">
              <a
                target="_blank"
                className="underline text-stone-500 hover:text-stone-800"
              >
                Hotel Hajčman
              </a>
            </Link>
            .
          </p>
        </div>
      </Content>
    </section>
  );
}

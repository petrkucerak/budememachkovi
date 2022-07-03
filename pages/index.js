import Cover from "../components/cover";
import DaryForm from "../components/dary-form";
import Info from "../components/info";
import Kontakty from "../components/kontakty";
import Meta from "../components/meta";
import Program from "../components/program";
import Welcome from "../components/welcome";

export default function Home() {
  return (
    <main className="w-full font-mali">
      <Meta />
      <Cover />
      <Welcome />
      <Info />
      <Program />
      <DaryForm />
      <Kontakty />
    </main>
  );
}

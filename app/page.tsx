import { title, subtitle } from "@/components/primitives";
import TabSwitcher from "@/components/tab-switch";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Bem-vindo, somos a&nbsp;</h1>
        <h1 className={title({ color: "orange", size: "lg" })}>Bico Fino&nbsp;</h1>
        <br />

        <h2 className={subtitle({ class: "my-4" })}>
          Sabores que trazem boas lembranças.
        </h2>
      </div>
      {/* <Switcher /> */}
      <TabSwitcher />

      {/* <div className="flex w-full">
        <Bar />
      </div>
      <Restaurante /> */}
    </section>
  );
}

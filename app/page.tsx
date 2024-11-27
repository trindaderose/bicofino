import { title, subtitle } from "@/components/primitives";
import TabSwitcher from "@/components/tab-switch";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Bem-vindo, somos a&nbsp;</h1>
        <h1 className={title({ color: "orange", size: "lg" })}>
          Bico Fino&nbsp;
        </h1>
        <br />

        <h2 className={subtitle({ class: "my-4" })}>
          Sabores que trazem boas lembranças.
        </h2>
        <p className="text-[12px] text-neutral-400">
          Bico Fino é um serviço adaptável de cardápio online, projetado para
          atender a diferentes nichos. O app oferece uma solução prática e
          elegante para apresentar produtos ou serviços, desde opções
          gastronômicas a outros tipos de catálogos. A flexibilidade e a
          interface amigável tornam o Bico Fino ideal para quem deseja criar uma
          experiência digital única e funcional para seus clientes.
        </p>
      </div>
      <TabSwitcher />
    </section>
  );
}

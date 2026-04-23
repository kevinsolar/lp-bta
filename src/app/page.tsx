import Conheca from "@/components/sections/Conheca";
import ContactForm from "@/components/sections/Contato";
import Diferenciais from "@/components/sections/Diferenciais";
import Hero from "@/components/sections/Hero";
import MainVideo from "@/components/sections/MainVideo";
import Programas from "@/components/sections/Programas";
import QuemSomos from "@/components/sections/QuemSomos";

export default function Home() {
	return (
		<main className="flex flex-col flex-1 gap-10 lg:gap-16 items-center mt-22.5">
			<Hero />
      <MainVideo />
      <QuemSomos />
      <Programas />
      <Diferenciais />
      <Conheca />
      <ContactForm />
		</main>
	)
}

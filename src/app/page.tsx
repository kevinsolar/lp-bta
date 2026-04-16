import Hero from "@/components/sections/Hero";
import QuemSomos from "@/components/sections/QuemSomos";

export default function Home() {
	return (
		<main className="flex flex-col flex-1 gap-10 lg:gap-16 items-center mt-22.5">
			<Hero />
      <QuemSomos />
		</main>
	)
}

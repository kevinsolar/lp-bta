import { DATA } from "@/utils/mock"
import Image from "next/image"
import Card from "../card"
import { Button } from "../ui/button"
import Link from "next/link"

export default function Programas() {
	const sec = DATA.programas

	return (
		<section id="programas" className="flex flex-col gap-10 py-10">
			<h2 className="text-6xl lg:text-8xl mb-6 text-title dark:text-foreground">
				{sec.title}
			</h2>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				{sec.cards.map((card, i) => (
					<Card key={i} data={card} />
				))}
			</div>

			<div className="flex flex-col lg:flex-row gap-4">
				<div className="w-full lg:w-10/12 rounded-3xl py-6 px-10 bg-blue-200 flex items-center">
					<p className="text-3xl lg:text-5xl">{sec.oportunidade}</p>
				</div>
				<div className="w-full lg:w-2/12 rounded-3xl p-6 bg-green-200 relative flex justify-center items-center">
					<Image
						src={sec.logo}
						alt="Sault College"
						width={100}
						height={100}
						className="h-full w-auto"
						loading="lazy"
					/>
				</div>
			</div>

      <div className="flex pt-4">
				<Button variant="secondary" className="mx-auto" asChild>
					<Link href="#contato">Fale conosco e saiba mais</Link>
				</Button>
			</div>
		</section>
	)
}

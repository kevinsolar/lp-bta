import { DATA } from "@/utils/mock"
import { Button } from "../ui/button"
import Link from "next/link"

export default function Diferenciais() {
	const { diferenciais } = DATA
	const { bloco_1, bloco_2 } = diferenciais

	return (
		<section id="diferenciais" className="w-full py-10 space-y-10">
			{/* Primeiro bloco */}
			<div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center">
				<h2 className="text-4xl lg:text-7xl mb-6 text-title dark:text-foreground">
					{bloco_1.title}
				</h2>

				<div className="bg-green-200 rounded-3xl px-8 py-12 flex items-center justify-center text-xl lg:text-2xl">
					{bloco_1.description}
				</div>
			</div>
			{/* Segundo bloco */}
			<div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center">
				<h2 className="text-4xl lg:text-7xl mb-6 text-title dark:text-foreground">
					{bloco_2.title}
				</h2>

				<div className="bg-blue-200 rounded-3xl px-8 py-12 flex items-center justify-center text-xl lg:text-2xl">
					{bloco_2.description}
				</div>
			</div>

			<div className="flex pt-4">
				<Button variant="default" className="mx-auto" asChild>
					<Link href="#contato">Fale conosco e saiba mais</Link>
				</Button>
			</div>
		</section>
	)
}

import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"

export default function QuemSomos() {
	return (
		<section
			id="quem-somos"
			className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 items-center py-10"
		>
			<div className="order-2 lg:order-1 w-full aspect-square rounded-3xl overflow-hidden">
				<Image
					src="/quem-somos.jpg"
					alt="Sault College"
					width={800}
					height={800}
					sizes="(max-width: 1024px) 100vw, 50vw"
					className="w-full h-full object-cover"
          quality={85}
          loading="lazy"
				/>
			</div>
			<div className="lg:px-16 order-1 lg:order-2">
				<h2 className="text-6xl lg:text-8xl mb-6 text-title dark:text-foreground">
					O <span className="text-highlight block">Sault</span>
					<span className="text-highlight block">College</span>
				</h2>
				<p>
					O melhor lugar para sua especialização no Canadá, em Engenharia,
					Saúde, Meio Ambiente e Negócios! Um dos melhores colleges da Província
					de Ontário em Satisfação do Estudante, o Sault College possui seu
					campus na incrível cidade de Sault Ste. Marie. Com cerca de 80.000
					habitantes, a cidade de Sault Ste. Marie chama atenção pelo seu charme
					e receptividade, além é claro, de um atrativo custo de vida e mercado
					de trabalho aquecido. A cidade foi contemplada com o programa de
					imigração RCIP (Rural Community Immigration Pilot Program), que acaba
					sendo mais uma oportunidade para aqueles que buscam estender sua
					estadia no Canadá. O Sault College conta com mais de 70 programas
					entre Graduações e Pós-Graduações, de um ano a dois anos de duração.
					Os principais destaques dos programas, que estão completamente
					alinhados às oportunidades de trabalho em Sault Ste. Marie, estão nas
					áreas de Trades, Engenharia, Saúde, Meio Ambiente, Negócios/Logística
					e também, Serviços Comunitários.
				</p>

				<div className="flex pt-10">
					<Button variant="default" className="mx-auto" asChild>
						<Link href="#contato">Fale conosco e saiba mais</Link>
					</Button>
				</div>
			</div>
		</section>
	)
}

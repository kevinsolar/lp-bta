"use client"
import { DATA } from "@/utils/mock"

import { Button } from "../ui/button"
import Link from "next/link"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function Conheca() {
	const { conheca } = DATA
	const { videos } = conheca

	return (
		<section id="conheca" className="w-full py-10 space-y-10">
			<div className="flex">
				<div className="w-full lg:w-1/2 pr-20">
					<Carousel
						opts={{ loop: true }}
						plugins={[
							Autoplay({
								delay: 5000,
							}),
						]}
					>
						<CarouselContent>
							{videos.urls.map((url, i) => (
								<CarouselItem key={i}>
									<iframe
										width="560"
										height="315"
										src={`https://www.youtube.com/embed/${url}`}
										title="YouTube video player"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
										referrerPolicy="strict-origin-when-cross-origin"
										allowFullScreen
										className="rounded-2xl w-full h-full aspect-video"
									></iframe>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious variant="secondary" />
						<CarouselNext variant="secondary" />
					</Carousel>
				</div>
				<div className="w-full lg:w-1/2">
					<h2 className="text-6xl lg:text-8xl mb-6 text-title dark:text-foreground">{conheca.title}</h2>
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

"use client"
import { DATA } from "@/utils/mock"
import { Button } from "../ui/button"
import Link from "next/link"
import dynamic from "next/dynamic"
import { useEffect, useState, useRef } from "react"
import { Play } from "lucide-react"
import Image from "next/image"

// Dynamic import do carousel para reduzir bundle inicial
const Carousel = dynamic(
	() => import("../ui/carousel").then((mod) => mod.Carousel),
	{
		ssr: false,
		loading: () => (
			<div className="w-full h-64 animate-pulse bg-muted rounded-lg" />
		),
	},
)
const CarouselContent = dynamic(
	() => import("../ui/carousel").then((mod) => mod.CarouselContent),
	{ ssr: false },
)
const CarouselItem = dynamic(
	() => import("../ui/carousel").then((mod) => mod.CarouselItem),
	{ ssr: false },
)
const CarouselNext = dynamic(
	() => import("../ui/carousel").then((mod) => mod.CarouselNext),
	{ ssr: false },
)
const CarouselPrevious = dynamic(
	() => import("../ui/carousel").then((mod) => mod.CarouselPrevious),
	{ ssr: false },
)

function YouTubeEmbed({
	videoId,
	loading = "lazy",
}: {
	videoId: string
	loading?: "lazy" | "eager"
}) {
	const [loaded, setLoaded] = useState(false)
	const [isManualPlay, setIsManualPlay] = useState(false)
	const containerRef = useRef<HTMLDivElement>(null)

	const handlePlay = () => {
		setLoaded(true)
		setIsManualPlay(true)
	}

	useEffect(() => {
		if (loading === "eager") {
			setLoaded(true)
			return
		}
	}, [loading])

	if (!loaded) {
		return (
			<div
				ref={containerRef}
				className="rounded-2xl w-full aspect-video bg-neutral-800 flex items-center justify-center cursor-pointer relative overflow-hidden"
				onClick={handlePlay}
			>
				<Image
					src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
					alt="Thumbnail do vídeo"
					fill
					className="object-cover rounded-2xl"
					loading={loading}
					sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 640px"
				/>
				<div className="absolute inset-0 bg-black/30 rounded-2xl" />
				<div className="relative z-10 flex flex-col items-center gap-4">
					<div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center transition-transform hover:scale-110">
						<Play className="w-8 h-8 text-white ml-1" fill="white" />
					</div>
					<span className="text-white text-sm drop-shadow">Carregar vídeo</span>
				</div>
			</div>
		)
	}

	return (
		<iframe
			width="560"
			height="315"
			src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
			title="YouTube video player"
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerPolicy="strict-origin-when-cross-origin"
			allowFullScreen
			className="rounded-2xl w-full h-full aspect-video"
			loading={loading}
		/>
	)
}

export default function Conheca() {
	const { conheca } = DATA
	const { videos } = conheca

	return (
		<section id="conheca" className="w-full py-10 space-y-10">
			<div className="flex flex-col gap-6 lg:flex-row lg:gap-0">
				<div className="w-full lg:w-1/2 pr-20">
					<Carousel opts={{ loop: true }}>
						<CarouselContent>
							{videos.urls.map((url, i) => (
								<CarouselItem key={i}>
									<YouTubeEmbed videoId={url} loading="lazy" />
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious variant="secondary" />
						<CarouselNext variant="secondary" />
					</Carousel>
				</div>
				<div className="w-full lg:w-1/2">
					<h2 className="text-6xl lg:text-8xl mb-6 text-title dark:text-foreground">
						{conheca.title}
					</h2>
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

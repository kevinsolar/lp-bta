"use client"
import { DATA } from "@/utils/mock"
import { Button } from "../ui/button"
import Link from "next/link"
import { useState } from "react"
import { Play } from "lucide-react"
import Image from "next/image"

export default function MainVideo() {
	const { main_video } = DATA
	const [loaded, setLoaded] = useState(false)

	return (
		<section id="video" className="w-full">
			<div
				className="rounded-2xl w-full aspect-20/9 flex items-center justify-center cursor-pointer relative overflow-hidden bg-neutral-800"
				onClick={() => setLoaded(true)}
			>
				{!loaded ? (
					<>
						<Image
							src={`https://i.ytimg.com/vi/${main_video.urlID}/maxresdefault.jpg`}
							alt="Thumbnail do vídeo"
							fill
							className="object-cover rounded-2xl"
							priority
							sizes="(max-width: 768px) 100vw, 1280px"
						/>
						<div className="absolute inset-0 bg-black/30 rounded-2xl" />
						<div className="relative z-10 flex flex-col items-center gap-4">
							<div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center transition-transform hover:scale-110">
								<Play className="w-10 h-10 text-white ml-1" fill="white" />
							</div>
							<span className="text-white text-sm drop-shadow">Carregar vídeo</span>
						</div>
					</>
				) : (
					<iframe
						width="100%"
						height="100%"
						src={`https://www.youtube.com/embed/${main_video.urlID}?`}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
						className="rounded-2xl w-full h-full aspect-20/9"
						loading="lazy"
					/>
				)}
			</div>

			<div className="flex justify-center mt-10">
				<Button variant="secondary" asChild>
					<Link href="#contato">Fale conosco e saiba mais</Link>
				</Button>
			</div>
		</section>
	)
}

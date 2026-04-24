"use client"
import { DATA } from "@/utils/mock"
import { Button } from "../ui/button"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { Play } from "lucide-react"

export default function MainVideo() {
	const { main_video } = DATA
	const [loaded, setLoaded] = useState(false)
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setLoaded(true)
						observer.disconnect()
					}
				})
			},
			{ rootMargin: "200px" }
		)

		if (containerRef.current) {
			observer.observe(containerRef.current)
		}

		return () => observer.disconnect()
	}, [])

	return (
		<section id="video" className="w-full">
			<div
				ref={containerRef}
				className="rounded-2xl w-full aspect-20/9 bg-neutral-800 flex items-center justify-center cursor-pointer relative overflow-hidden"
				onClick={() => setLoaded(true)}
			>
				{!loaded ? (
					<>
						<div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900" />
						<div className="relative z-10 flex flex-col items-center gap-4">
							<div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center transition-transform hover:scale-110">
								<Play className="w-10 h-10 text-white ml-1" fill="white" />
							</div>
							<span className="text-neutral-400 text-sm">Carregar vídeo</span>
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

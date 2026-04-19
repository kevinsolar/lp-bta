import { DATA } from "@/utils/mock"
import { Button } from "../ui/button"
import Link from "next/link"

export default function MainVideo() {
	const { main_video } = DATA

	return (
		<section id="video" className="w-full">
			<iframe
				width="100vw"
				height="50vw"
				src={`https://www.youtube.com/embed/${main_video.urlID}`}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen
				className="rounded-2xl w-full h-full aspect-20/9"
				loading="lazy"
			></iframe>

			<div className="flex justify-center mt-10">
				<Button variant="secondary" asChild>
					<Link href="#contato">Fale conosco e saiba mais</Link>
				</Button>
			</div>
		</section>
	)
}

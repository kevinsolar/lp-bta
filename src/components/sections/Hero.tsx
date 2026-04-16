import Image from "next/image"

export default function Hero() {
	return (
		<section id="hero" className="flex flex-col lg:flex-row gap-6 items-center">
			<div className="w-full lg:w-5/12">
				<h1 className="text-6xl lg:text-8xl text-background dark:text-foreground">
					<span className="text-highlight">Estude</span> e{" "}
					<span className="text-highlight">trabalhe</span>, ao mesmo tempo, no
					Canadá
				</h1>
			</div>

			<div className="flex-1 relative">
				<Image
					src="/estudetrabalhe.webp"
					alt="Imagem"
					width={500}
					height={300}
					className="w-full lg:object-contain"
					unoptimized
					loading="eager"
					fetchPriority="high"
				/>
				<div className="bg absolute -z-1 bottom-0 left-0 w-full h-[83%] bg-green-200 rounded-4xl shadow-lg" />
			</div>
		</section>
	)
}

import Image from "next/image"

type CardProps = {
	title: string
	img_src: string
	obs?: string
}

type CardComponent = {
	data: CardProps
}

export default function Card({ data }: CardComponent) {
	return (
		<div className="bg-green-200 p-5 rounded-3xl flex flex-col gap-3">
			<div className="w-full aspect-video rounded-3xl overflow-hidden">
				<Image
					src={data.img_src}
					alt={data.title}
					width={500}
					height={500}
					className="w-full h-full object-cover"
				/>
			</div>

			{/* Card.Infos */}
			<div className="infos">
				<h3 className="text-2xl lg:text-4xl font-medium text-center text-background dark:text-foreground">
					{data.title}
				</h3>
			</div>
		</div>
	)
}

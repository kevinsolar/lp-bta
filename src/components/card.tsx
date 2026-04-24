import { cn } from "@/lib/utils"
import Image from "next/image"
import React from "react"

type CardProps = {
	icon?: React.ReactNode
	title: string
	img_src: string
	obs?: string
}

type CardComponent = {
	className?: string
	data: CardProps
}

export default function Card({ data, className }: CardComponent) {
	return (
		<div
			className={cn(
				"bg-green-200 p-5 rounded-3xl flex flex-col gap-3 relative",
				{ className },
			)}
		>
			{data.icon && (
				<div className="absulute -translate-y-1/2 top-0 w-16 h-16 rounded-full bg-blue-100">
					{data.icon}
				</div>
			)}
			<div className="w-full aspect-video rounded-3xl overflow-hidden">
				<Image
					src={data.img_src}
					alt={data.title}
					width={400}
					height={225}
					sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
					className="w-full h-full object-cover"
					quality={85}
					loading="lazy"
				/>
			</div>

			{/* Card.Infos */}
			<div className="infos">
				<h3 className="text-2xl lg:text-4xl font-medium text-center text-background dark:text-foreground">
					{data.title}
				</h3>

        {data.obs && data.obs}
			</div>
		</div>
	)
}

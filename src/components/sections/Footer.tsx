import Socials from "../socials"
import Image from "next/image"

export default function Footer() {
	return (
		<footer className="flex flex-col items-center text-center gap-5 py-10 lg:py-16 bg-green-200 rounded-t-4xl">
			<div className="flex">
				<Image src="/sc-icon.svg" alt="Sault College" width={120} height={120} sizes="120px" className="w-30 h-auto" loading="lazy" />
			</div>

			<div className="addres">
				<p>
					443 Northen Ave
					<br />
					Sault Ste. Marie, ON Canada, P6B 4J3
					<br />
					Phone 705.759.2554
					<br />
					Toll Free 1.800.461.2260
				</p>
			</div>

			<div>
				<Socials variants="white" />
			</div>
		</footer>
	)
}

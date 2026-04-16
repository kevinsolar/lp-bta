import { GiLotusFlower } from "react-icons/gi"
import Socials from "../socials"

export default function Footer() {
	return (
		<footer className="flex flex-col items-center text-center gap-5 py-10 lg:py-16">
			<div className="image">
				<GiLotusFlower size={120} />
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
				<Socials />
			</div>
		</footer>
	)
}

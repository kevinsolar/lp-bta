import Image from "next/image"
import Link from "next/link"
import Socials from "../socials"

export default function Header() {
	return (
		<header className="fixed z-50 inset-0 container px-3 md:px-0 mx-auto bg-background text-green-200 flex items-center justify-between h-22.5">
			<div className="wrapper h-full py-4">
				<Link href="/">
					<Image
						src="/logo-sault-color.svg"
						alt="Logo"
						width={180}
						height={60}
						sizes="180px"
						loading="eager"
						className="h-full w-auto"
					/>
				</Link>
			</div>

			<nav className="hidden lg:flex items-center gap-4 text-lg">
				<Link
					href="#quem-somos"
					className="relative hover:text-green-100 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-green-100 after:transition-all"
				>
					Quem Somos
				</Link>
				<Link
					href="#diferenciais"
					className="relative hover:text-green-100 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-green-100 after:transition-all"
				>
					Diferenciais
				</Link>
				<Link
					href="#contato"
					className="relative hover:text-green-100 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-green-100 after:transition-all"
				>
					Contato
				</Link>

				<div className="ml-4">
					<Socials />
				</div>
			</nav>
		</header>
	)
}

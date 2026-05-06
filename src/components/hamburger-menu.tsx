"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Socials from "@/components/socials"

const links = [
	{ href: "#quem-somos", label: "Quem Somos" },
	{ href: "#diferenciais", label: "Diferenciais" },
	{ href: "#contato", label: "Contato" },
]

export default function HamburgerMenu() {
	const [open, setOpen] = useState(false)

	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : ""
		return () => {
			document.body.style.overflow = ""
		}
	}, [open])

	const close = () => setOpen(false)

	return (
		<>
			<button
				onClick={() => setOpen((prev) => !prev)}
				aria-label={open ? "Fechar menu" : "Abrir menu"}
				aria-expanded={open}
				className="lg:hidden z-50 relative cursor-pointer text-green-200 hover:text-green-100 transition-colors"
			>
				{open ? <X size={28} /> : <Menu size={28} />}
			</button>

			{open && (
				<div
					onClick={close}
					className="lg:hidden fixed inset-0 bg-black/50 z-40"
				/>
			)}

			<div
				className={`lg:hidden fixed top-0 right-0 h-full w-72 bg-background z-40
        flex flex-col pt-24 px-8 gap-8
        transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
			>
				<nav className="flex flex-col gap-6 text-xl text-green-200">
					{links.map(({ href, label }) => (
						<Link
							key={href}
							href={href}
							onClick={close}
							className="relative hover:text-green-100 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-green-100 after:transition-all"
						>
							{label}
						</Link>
					))}
				</nav>

				<div className="mt-auto pb-8">
					<Socials />
				</div>
			</div>
		</>
	)
}

import { cn } from "@/lib/utils"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6"

type SocialVariants = {
	variants?: "blue" | "green" | "white"
}

const icons = {
	facebook: <FaFacebook size={20} />,
	instagram: <FaInstagram size={20} />,
	youtube: <FaYoutube size={20} />,
}

const redesSociais = [
	{
		name: "facebook",
		href: "https://www.facebook.com/",
	},
	{
		name: "instagram",
		href: "https://www.instagram.com/",
	},
	{
		name: "youtube",
		href: "https://www.youtube.com/",
	},
]

export default function Socials({ variants = "green" }: SocialVariants) {
	return (
		<div className="socials flex gap-4 items-center">
			{redesSociais.map((social) => (
				<a
					key={social.name}
					href={social.href}
					target="_blank"
					className={cn(
						"w-8 h-8 rounded-full border flex items-center justify-center hover:text-background transition-colors duration-600",
						variants === "green" && "border-green-200 text-green-200 hover:bg-green-200",
            variants === "blue" && "border-blue-200 text-blue-200 hover:bg-blue-200",
            variants === "white" && "border-white text-white hover:bg-white"
					)}
				>
					{icons[social.name as keyof typeof icons]}
				</a>
			))}
		</div>
	)
}

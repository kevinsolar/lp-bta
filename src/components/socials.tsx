import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6"

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

export default function Socials() {
	return (
		<div className="socials flex gap-4 items-center">
			{redesSociais.map((social) => (
				<a
					key={social.name}
					href={social.href}
					target="_blank"
					className="w-8 h-8 rounded-full border border-green-200 flex items-center justify-center text-green-200 hover:bg-green-200 hover:text-background transition-colors duration-600"
				>
					{icons[social.name as keyof typeof icons]}
				</a>
			))}
		</div>
	)
}

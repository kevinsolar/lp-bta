import type { Metadata } from "next"
import { Montserrat, Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import { cn } from "@/lib/utils"

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
	title: "Sault College",
	description: "Graduação ou Pós-Graduação Internacional",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang="pt-BR"
			className={cn(
				"h-full",
				montserrat.className,
			)}
		>
			<body className="min-h-full container px-3 mx-auto flex flex-col antialiased selection:bg-green-100 selection:text-title dark:selection:bg-blue-300">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}

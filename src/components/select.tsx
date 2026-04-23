import { cn } from "@/lib/utils"
import { ComponentProps } from "react"

export interface SelectProps extends ComponentProps<"select"> {}

export const Select = ({ className, ...props }: SelectProps) => {
	return (
		<select
			className={cn(
				"h-12 bg-transparent border-[1.5px] border-gray-400 flex items-center px-3 rounded-lg placeholder:text-gray-500",
				"outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950",
				"dark:border-blue-200 dark:focus-visible:ring-blue-100 dark:placeholder:text-foreground/70",
				"[&>option]:bg-background [&>option]:text-foreground",
				className,
			)}
			{...props}
		/>
	)
}

import { cn } from "@/lib/utils"
import { ComponentProps } from "react"

export const Checkbox = ({ className, ...props }: ComponentProps<"input">) => {
	return (
		<input
			type="checkbox"
			className={cn(
				// base
				"appearance-none h-5 w-5 rounded-lg cursor-pointer",
				"border-[1.5px] bg-transparent",
				"grid place-content-center",
				"transition-colors duration-150",

				// before = checkmark
				"before:content-[''] before:block",
				"before:w-[5px] before:h-[9px]",
				"before:border-r-2 before:border-b-2",
				"before:rotate-45 before:-translate-y-px",
				"before:opacity-0 before:transition-opacity",

				// light
				"border-gray-400",
				"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
				"checked:bg-blue-200 checked:border-blue-200",
				"before:border-white checked:before:opacity-100",

				// dark
				"dark:border-blue-200",
				"dark:focus-visible:ring-blue-100 dark:focus-visible:ring-offset-gray-950",
				"dark:checked:bg-blue-200 dark:checked:border-blue-200",
				"dark:before:border-gray-950",

				className,
			)}
			{...props}
		/>
	)
}

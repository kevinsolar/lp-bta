import { cn } from "@/lib/utils"
import { ComponentProps } from "react"

export interface CheckboxProps extends ComponentProps<"input"> {}

export const Checkbox = ({ className, ...props }: CheckboxProps) => {
	return (
		<input
			type="checkbox"
			className={cn(
				"h-5 w-5 bg-transparent border-[1.5px] border-gray-400 rounded cursor-pointer",
				"outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950",
				"checked:bg-gray-400 checked:border-gray-400",
				"dark:border-blue-200 dark:focus-visible:ring-blue-100",
				"dark:checked:bg-blue-200 dark:checked:border-blue-200",
				className,
			)}
			{...props}
		/>
	)
}

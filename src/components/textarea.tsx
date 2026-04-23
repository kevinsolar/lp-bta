import { cn } from "@/lib/utils"
import { ComponentProps } from "react"

export interface TextareaProps extends ComponentProps<"textarea"> {}

export const Textarea = ({ className, ...props }: TextareaProps) => {
	return (
		<textarea
			className={cn(
				"h-12 bg-transparent border-[1.5px] border-gray-400 flex items-center px-3 pt-3 min-h-28 rounded-lg placeholder:text-gray-500",
				"outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950",
				"dark:border-blue-200 dark:focus-visible:ring-blue-100 dark:placeholder:text-foreground/70",
				className,
			)}
			{...props}
		/>
	)
}

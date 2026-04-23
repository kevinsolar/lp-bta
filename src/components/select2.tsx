"use client"

import { cn } from "@/lib/utils"
import { ComponentProps, useState, useRef, useEffect } from "react"

export interface SelectProps extends ComponentProps<"select"> {
	options?: { value: string; label: string }[]
	placeholder?: string
}

export const Select = ({ className, options, placeholder, ...props }: SelectProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedLabel, setSelectedLabel] = useState<string>("")
	const wrapperRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
				setIsOpen(false)
			}
		}
		document.addEventListener("mousedown", handleClickOutside)
		return () => document.removeEventListener("mousedown", handleClickOutside)
	}, [])

	const handleSelect = (value: string, label: string) => {
		setSelectedLabel(label)
		setIsOpen(false)
		if (props.onChange) {
			const event = { target: { value, name: props.name } } as React.ChangeEvent<HTMLSelectElement>
			props.onChange(event)
		}
	}

	return (
		<div className="relative h-12" ref={wrapperRef}>
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className={cn(
					"w-full h-12 bg-transparent border-[1.5px] border-gray-400 px-3 rounded-lg",
					"outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950",
					"dark:border-blue-200 dark:focus-visible:ring-blue-100",
					"flex items-center justify-between cursor-pointer",
					className,
				)}
				aria-haspopup="listbox"
				aria-expanded={isOpen}
			>
				<span className={selectedLabel ? "text-foreground" : "text-gray-500 dark:text-foreground/70"}>
					{selectedLabel || placeholder || "Selecione..."}
				</span>
				<svg
					className={cn("w-5 h-5 transition-transform", isOpen && "rotate-180")}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
				</svg>
			</button>

			{isOpen && options && (
				<ul
					className={cn(
						"absolute z-50 w-full mt-1 bg-gray-950 border-[1.5px] border-gray-400 rounded-b-lg max-h-48 overflow-y-auto",
						"dark:bg-gray-950 dark:border-blue-200",
					)}
					role="listbox"
				>
					{options.map((option) => (
						<li
							key={option.value}
							onClick={() => handleSelect(option.value, option.label)}
							className={cn(
								"px-3 py-2.5 cursor-pointer first:rounded-t-lg last:rounded-b-lg",
								"hover:bg-blue-200 hover:text-gray-950",
								"dark:hover:bg-blue-200 dark:hover:text-gray-950",
								selectedLabel === option.label && "bg-blue-200 text-gray-950",
							)}
							role="option"
							aria-selected={selectedLabel === option.label}
						>
							{option.label}
						</li>
					))}
				</ul>
			)}

			{props.name && (
				<input type="hidden" name={props.name} value={selectedLabel} />
			)}
		</div>
	)
}

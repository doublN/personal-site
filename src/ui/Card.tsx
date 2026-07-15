import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export default function Card({
	children,
	className,
}: {
	children: ReactNode | ReactNode[]
	className?: string
}) {
	return (
		<div
			className={cn(
				'bg-background-light space-y-4 rounded-md border-3 border-purple-500 p-6',
				className,
			)}
		>
			{children}
		</div>
	)
}

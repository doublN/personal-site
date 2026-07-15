import { ReactNode } from 'react'

export default function Card({
	children,
}: {
	children: ReactNode | ReactNode[]
}) {
	return (
		<div className="bg-background-light space-y-4 rounded-md border-3 border-purple-500 p-6">
			{children}
		</div>
	)
}

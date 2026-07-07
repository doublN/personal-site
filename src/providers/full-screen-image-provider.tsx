'use client'

import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useState,
} from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { SanityImage } from '@/sanity/types'
import Img from '@/ui/img'

type ContextType = {
	image: SanityImage | null
	setImage: Dispatch<SetStateAction<SanityImage | null>>
}

const FullScreenImageContext = createContext<ContextType>({
	image: null,
	setImage: () => {},
})

export function FullScreenImageProvider({
	children,
}: {
	children: ReactNode | ReactNode[]
}) {
	const [image, setImage] = useState<SanityImage | null>(null)

	return (
		<FullScreenImageContext
			value={{
				image,
				setImage,
			}}
		>
			{children}
			{image && (
				<div
					onClick={() => setImage(null)}
					className="fixed top-0 right-0 bottom-0 left-0 z-100 flex size-full items-center justify-center backdrop-blur-lg"
				>
					<div className="m-6 md:m-20">
						<button
							className="float-right mb-2 hover:cursor-pointer"
							onClick={() => setImage(null)}
						>
							<IoCloseCircleOutline size={40} />
						</button>
						<Img image={image} alt={image.alt ?? 'Website screenshot'} />
					</div>
				</div>
			)}
		</FullScreenImageContext>
	)
}

export const useFullScreenImage = () => {
	const context = useContext(FullScreenImageContext)

	if (!context) throw Error('useFullScreenImage must be used within a provider')

	return context
}

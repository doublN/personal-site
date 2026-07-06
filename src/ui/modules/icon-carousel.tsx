'use client'

import Marquee from 'react-fast-marquee'
import { Tech } from '@/sanity/types'
import TechIcon from '../tech-icon'

export default function IconCarousel({
	icons,
}: Partial<{
	icons: Pick<Tech, '_id' | 'slug' | 'title'>[]
}>) {
	if (!icons || icons.length === 0) return null

	return (
		<div className="section">
			<Marquee
				gradient
				gradientColor={'var(--color-background)'}
				gradientWidth={50}
				pauseOnHover
				className="h-36"
			>
				{icons.map((icon) => (
					<div
						className="group relative mx-4 flex size-18 flex-col items-center transition-all hover:scale-120 hover:cursor-pointer"
						key={icon._id}
					>
						<TechIcon slug={icon.slug?.current} title={icon.title} />
					</div>
				))}
			</Marquee>
		</div>
	)
}

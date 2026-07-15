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
		<div className="section my-4! h-[92px] md:h-36 md:pt-6!">
			<Marquee
				gradient
				gradientColor={'var(--color-background)'}
				gradientWidth={50}
				pauseOnHover
				className="md:h-36"
			>
				{icons.map((icon) => (
					<div
						className="group relative mx-4 flex size-12 flex-col items-center transition-all hover:scale-120 hover:cursor-pointer md:size-18"
						key={icon._id}
					>
						<TechIcon
							_id={icon._id}
							slug={icon.slug?.current}
							title={icon.title}
						/>
					</div>
				))}
			</Marquee>
		</div>
	)
}

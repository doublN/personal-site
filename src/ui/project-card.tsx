'use client'

import { PortableText } from 'next-sanity'
import Link from 'next/link'
import { useState } from 'react'
import { FaLink } from 'react-icons/fa6'
import { cn } from '@/lib/utils'
import { useFullScreenImage } from '@/providers/full-screen-image-provider'
import { Project, SanityImage } from '@/sanity/types'
import Card from './Card'
import Img from './img'
import TechIcon from './tech-icon'

export default function ProjectCard({ project }: { project: Project }) {
	const [showMore, setShowMore] = useState(false)
	const { setImage } = useFullScreenImage()

	return (
		<Card>
			<div className="flex items-center gap-4">
				<h2 className="h2">{project.title}</h2>
				{project.link && (
					<Link href={project.link} className="text-foreground">
						<FaLink size="20" />
					</Link>
				)}
			</div>
			<div className="flex flex-wrap items-center gap-4">
				{project.tech?.map((item) => (
					<div key={item._id} className="size-8">
						<TechIcon
							_id={item._id}
							slug={item?.slug?.current}
							title={item.title}
						/>
					</div>
				))}
			</div>
			{project.content && (
				<div>
					<div className={cn('space-y-4', !showMore && 'line-clamp-4')}>
						<PortableText value={project.content} />
					</div>
					{!showMore && (
						<button className="link my-1" onClick={() => setShowMore(true)}>
							Show More...
						</button>
					)}
				</div>
			)}
			{project.screenshots && project.screenshots.length > 0 && (
				<div className="flex gap-6 max-md:flex-col">
					{project.screenshots.map((image, i) => (
						<button
							key={image.alt ?? i}
							className="transition-all hover:scale-105 hover:cursor-pointer"
							onClick={() => setImage(image)}
						>
							<Img image={image} alt={image.alt ?? 'Website screenshot'} />
						</button>
					))}
				</div>
			)}
		</Card>
	)
}

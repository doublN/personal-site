'use client'

import { PortableText } from 'next-sanity'
import Link from 'next/link'
import { useState } from 'react'
import { FaLink } from 'react-icons/fa6'
import { cn } from '@/lib/utils'
import { Project } from '@/sanity/types'
import Img from './img'
import TechIcon from './tech-icon'

export default function ProjectCard({ project }: { project: Project }) {
	const [showMore, setShowMore] = useState(false)

	return (
		<div className="space-y-4 rounded-md border border-purple-500 p-6">
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
						<TechIcon slug={item?.slug?.current} title={item.title} />
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
				<div>
					{project.screenshots.map((image) => (
						<Img image={image} alt={image.alt ?? 'Website screenshot'} />
					))}
				</div>
			)}
		</div>
	)
}

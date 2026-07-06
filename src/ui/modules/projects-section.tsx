'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { PortableText } from 'next-sanity'
import Link from 'next/link'
import { FaChevronLeft, FaChevronRight, FaLink } from 'react-icons/fa6'
import { Project } from '@/sanity/types'
import Img from '../img'
import TechIcon from '../tech-icon'

export default function ProjectsSection({
	title,
	projects,
}: Partial<{
	title: string
	projects: Project[]
}>) {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
	})

	const onNextClick = () => emblaApi?.scrollNext()
	const onPrevClick = () => emblaApi?.scrollPrev()

	return (
		<div className="section">
			<h1 className="h1">{title}</h1>
			<div className="embla mt-12 flex items-center justify-between">
				<button className="hover:cursor-pointer" onClick={() => onPrevClick()}>
					<FaChevronLeft size={20} />
				</button>
				<div className="embla__viewport mx-2 flex-1" ref={emblaRef}>
					<div className="embla__container">
						{projects?.map((project) => (
							<div
								key={project._id}
								className="embla__slide mx-4 space-y-4 rounded-md border border-purple-500 p-6"
							>
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
									<div className="line-clamp-4 space-y-4">
										<PortableText value={project.content} />
									</div>
								)}
								{project.screenshots && project.screenshots.length > 0 && (
									<div>
										{project.screenshots.map((image) => (
											<Img
												image={image}
												alt={image.alt ?? 'Website screenshot'}
											/>
										))}
									</div>
								)}
							</div>
						))}
					</div>
				</div>
				<button className="hover:cursor-pointer" onClick={() => onNextClick()}>
					<FaChevronRight size={20} />
				</button>
			</div>
			<div className="mt-4 flex justify-end">
				<div className="h-px w-[28px]" />
				<Link href="/projects" className="action-outline">
					See more
				</Link>
				<div className="h-px w-[28px]" />
			</div>
		</div>
	)
}

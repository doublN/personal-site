'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Link from 'next/link'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { Project } from '@/sanity/types'
import ProjectCard from '../project-card'

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
							<div key={project._id} className="embla__slide mx-4">
								<div className="mx-2">
									<ProjectCard project={project} />
								</div>
							</div>
						))}
					</div>
				</div>
				<button className="hover:cursor-pointer" onClick={() => onNextClick()}>
					<FaChevronRight size={20} />
				</button>
			</div>
			<div className="mt-4 flex justify-end">
				<div className="h-px w-[34px]" />
				<Link href="/projects" className="action-outline">
					See more
				</Link>
				<div className="h-px w-[34px]" />
			</div>
		</div>
	)
}

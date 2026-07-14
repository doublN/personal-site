'use client'

import { useState, useTransition } from 'react'
import { ImSpinner2 } from 'react-icons/im'
import getProjects from '@/actions/getProjects'
import { Project } from '@/sanity/types'
import ProjectCard from '@/ui/project-card'

export default function ProjectListClient({
	initProjects,
	projectCount,
	pageSize,
	techId,
}: {
	initProjects: Project[]
	projectCount: number
	pageSize: number
	techId: string
}) {
	const [projects, setProjects] = useState(initProjects)
	const [isPending, startTransition] = useTransition()
	const [page, setPage] = useState(1)

	const getMoreProjects = async () => {
		await startTransition(async () => {
			const newProjects = await getProjects(pageSize, page, techId)
			setPage(page + 1)
			setProjects([...projects, ...newProjects])
		})
	}

	return (
		<div>
			<div className="space-y-8">
				{projects.map((project) => (
					<ProjectCard key={project._id} project={project} />
				))}
			</div>
			{projects.length < projectCount && (
				<div className="mt-4 flex justify-end">
					<div className="flex items-center gap-4">
						{isPending && <ImSpinner2 size={20} />}
						<button
							className="action-outline"
							onClick={() => {
								getMoreProjects()
							}}
						>
							Show More
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

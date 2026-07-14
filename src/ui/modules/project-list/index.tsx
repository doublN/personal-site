import { Suspense } from 'react'
import getProjects from '@/actions/getProjects'
import getProjectsCount from '@/actions/getProjectsCount'
import ProjectListClient from './project-list-client'
import ProjectListFallback from './project-list-fallback'

export default async function ProjectList({
	size = 5,
	tech = '',
}: Partial<{
	size: number
	tech: string
}>) {
	const initProjects = await getProjects(size, 0, tech)
	const projectCount = await getProjectsCount(tech)

	return (
		<div className="section">
			<Suspense key={tech} fallback={<ProjectListFallback />}>
				<ProjectListClient
					initProjects={initProjects}
					projectCount={projectCount}
					pageSize={size}
					techId={tech}
				/>
			</Suspense>
		</div>
	)
}

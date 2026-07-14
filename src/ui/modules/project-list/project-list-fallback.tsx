import ProjectCard from '@/ui/project-card'

export default function ProjectListFallback() {
	return Array(3).map((_, index) => (
		<div
			key={index}
			className="bg-background-light min-h-100 animate-pulse space-y-4 rounded-md border-3 border-purple-500 p-6"
		/>
	))
}

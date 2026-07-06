import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
	name: 'projects-section',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
		}),
		defineField({
			name: 'projects',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'reference',
					to: [{ type: 'project' }],
				}),
			],
			validation: (Rule) => Rule.required().min(1).max(3),
		}),
	],
	preview: {
		select: {
			title: 'title',
			projects: 'projects',
		},
		prepare({ title, projects }) {
			return {
				title: `${title} (${projects?.length || 0} projects)`,
				subtitle: 'Projects Section',
			}
		},
	},
})

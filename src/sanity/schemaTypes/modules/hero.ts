import { defineField, defineType } from 'sanity'

export default defineType({
	type: 'object',
	name: 'hero',
	title: 'Hero',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'subtitle',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
		}),
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare({ title }) {
			return {
				title,
				subtitle: 'Hero',
			}
		},
	},
})

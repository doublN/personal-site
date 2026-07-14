import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'project-list',
	type: 'object',
	fields: [
		defineField({
			name: 'size',
			type: 'number',
		}),
	],
})

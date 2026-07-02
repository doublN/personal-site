import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'tech',
	title: 'tech',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			options: {
				source: (doc: any) => doc.title,
			},
			validation: (Rule) => Rule.required(),
		}),
	],
})

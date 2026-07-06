import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
	name: 'about-section',
	title: 'About Section',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'content',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'block',
				}),
			],
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'image',
			type: 'image',
			options: {
				hotspot: true,
			},
			fields: [
				defineField({
					name: 'alt',
					type: 'string',
					validation: (Rule) => Rule.required(),
				}),
			],
		}),
	],
})

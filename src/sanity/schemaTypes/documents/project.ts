import { defineArrayMember, defineField, defineType } from 'sanity'
import tech from './tech'

export default defineType({
	name: 'project',
	title: 'Project',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
		}),
		defineField({
			name: 'tech',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'reference',
					to: tech,
				}),
			],
		}),
		defineField({
			name: 'content',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'block',
				}),
			],
		}),
		defineField({
			name: 'screenshots',
			type: 'array',
			of: [
				defineArrayMember({
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
		}),
		defineField({
			name: 'link',
			type: 'url',
		}),
	],
})

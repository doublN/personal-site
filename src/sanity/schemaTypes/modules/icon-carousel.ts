import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
	name: 'icon-carousel',
	type: 'object',
	fields: [
		defineField({
			name: 'icons',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'reference',
					to: [{ type: 'tech' }],
				}),
			],
		}),
	],
	preview: {
		select: {
			icons: 'icons',
		},
		prepare({ icons }) {
			return {
				title:
					icons && icons.length > 0 ? `(${icons.length} icons)` : '0 icons',
				subtitle: 'Icon Carousel',
			}
		},
	},
})

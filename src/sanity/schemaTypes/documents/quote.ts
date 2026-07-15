import { defineField, defineType } from 'sanity'
import { FeedbackIcon } from '@sanity/icons'
import { getBlockText } from '@/lib/utils'

export default defineType({
	name: 'quote',
	title: 'Quote',
	type: 'document',
	icon: FeedbackIcon,
	fields: [
		defineField({
			name: 'quote',
			type: 'array',
			of: [{ type: 'block' }],
		}),
		defineField({
			name: 'name',
			type: 'string',
		}),
		defineField({
			name: 'link',
			type: 'url',
		}),
	],
	preview: {
		select: {
			quote: 'quote',
			author: 'name',
		},
		prepare: ({ quote, author }) => ({
			title: author,
			subtitle: getBlockText(quote),
		}),
	},
})

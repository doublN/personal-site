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
			author: 'author',
		},
		prepare: ({ quote, author }) => ({
			title: [author?.name, author?.title].filter(Boolean).join(' / '),
			subtitle: getBlockText(quote),
			media: author?.image?.asset,
		}),
	},
})

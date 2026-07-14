import { defineField } from 'sanity'

export default ({ of = [] }: { of?: Array<{ type: string }> } = {}) =>
	defineField({
		name: 'modules',
		type: 'array',
		of: [
			{ type: 'quote-list' },
			{ type: 'hero' },
			{ type: 'icon-carousel' },
			{ type: 'about-section' },
			{ type: 'projects-section' },
			{ type: 'project-list' },
			...of,
		],
		options: {
			insertMenu: {
				filter: true,
				views: [
					{
						name: 'grid',
						previewImageUrl: (module) => `/module-thumbnails/${module}.png`,
					},
					{ name: 'list' },
				],
			},
		},
	})

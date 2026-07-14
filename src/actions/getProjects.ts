'use server'

import { groq } from 'next-sanity'
import { revalidatePath } from 'next/cache'
import { sanityFetchLive } from '@/sanity/lib/live'
import { Project } from '@/sanity/types'

export default async function getProjects(
	limit: number,
	page: number,
	techId?: string,
) {
	const start = page * limit

	const results = await sanityFetchLive<Project[]>({
		query: groq`
            *[_type == "project"
                ${techId ? '&& $techId in tech[]._ref' : ''}
            ]{
            _id,
			title,
			date,
			tech[]->{
				_id,
				title,
				slug
			},
			content[],
			screenshots[],
			link
        } | order(date desc) [$page...$limit]
        `,
		params: {
			page: start,
			limit: start + limit,
			techId,
		},
	})

	return results
}

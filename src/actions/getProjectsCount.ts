'use server'

import { groq } from 'next-sanity'
import { sanityFetchLive } from '@/sanity/lib/live'

export default async function getProjectsCount(techId?: string) {
	return await sanityFetchLive<number>({
		query: groq`
            count(*[_type == "project" ${techId ? '&& $techId in tech[]._ref' : ''}])
        `,
		params: {
			techId,
		},
	})
}

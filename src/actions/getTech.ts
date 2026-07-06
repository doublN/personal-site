'use server'

import { groq } from 'next-sanity'
import { sanityFetchLive } from '@/sanity/lib/live'
import { Tech } from '@/sanity/types'

export const getTech = async () => {
	return await sanityFetchLive<Tech[]>({
		query: groq`
            *[_type == "tech"]
        `,
	})
}

import Link from 'next/link'
import { FiDownload } from 'react-icons/fi'
import { cn } from '@/lib/utils'
import { getSite } from '@/sanity/lib/queries'
import type { Cta } from '@/sanity/types'
import CTAList from '@/ui/cta-list'
import Logo from '@/ui/logo'
import SocialNavigation from '../social-navigation'
import css from './header.module.css'
import MobileToggle from './mobile-toggle'
import Navigation from './navigation'
import Wrapper from './wrapper'

export default async function () {
	const site = await getSite()

	return (
		<Wrapper className="max-md:header-open:h-screen max-md:header-open:w-screen max-md:header-open:fixed sticky top-0 z-10 bg-[#090114]">
			<div
				className={cn(
					css.root,
					'section max-md:header-open:flex-col max-md:header-open:items-start flex items-center gap-x-12 py-4',
				)}
			>
				<div className="flex items-center justify-between gap-4 [grid-area:top] max-md:w-full">
					<Logo className="w-fit text-nowrap has-[img]:-my-2 has-[img]:h-[2lh]" />
					<div className="flex shrink items-center gap-4 md:hidden">
						<SocialNavigation className="flex items-center gap-4" />
						<MobileToggle />
					</div>
				</div>

				<div className="max-md:header-not-open:hidden flex w-full items-center justify-between">
					<Navigation />
					<div className="flex items-center gap-4 max-md:hidden">
						<SocialNavigation className="flex items-center gap-4" />
						{site?.cv && (
							<Link
								href={site.cv.asset.url}
								download
								className="action-outline"
								target="_blank"
							>
								<FiDownload />
								CV
							</Link>
						)}
					</div>
				</div>

				<CTAList
					ctas={site?.ctas as Cta[]}
					className="max-md:header-not-open:hidden [grid-area:ctas] max-sm:*:w-full"
				/>
			</div>
		</Wrapper>
	)
}

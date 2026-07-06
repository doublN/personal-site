import { cn } from '@/lib/utils'
import { getSite } from '@/sanity/lib/queries'
import type { Cta } from '@/sanity/types'
import CTAList from '@/ui/cta-list'
import Logo from '@/ui/logo'
import css from './header.module.css'
import MobileToggle from './mobile-toggle'
import Navigation from './navigation'
import Wrapper from './wrapper'

export default async function () {
	const site = await getSite()

	return (
		<Wrapper className="sticky top-0 z-10">
			<div className={cn(css.root, 'section flex items-center gap-x-8 py-4')}>
				<div className="just between flex items-center gap-4 [grid-area:top]">
					<Logo className="grow has-[img]:-my-2 has-[img]:h-[2lh]" />
					<MobileToggle />
				</div>

				<Navigation />

				<CTAList
					ctas={site?.ctas as Cta[]}
					className="max-md:header-not-open:hidden [grid-area:ctas] max-sm:*:w-full"
				/>
			</div>
		</Wrapper>
	)
}

import { PortableTextBlock } from 'sanity'
import { PortableText, stegaClean } from 'next-sanity'
import { cn } from '@/lib/utils'
import type { Quote, QuoteList } from '@/sanity/types'
import Eyebrow from '@/ui/eyebrow'
import Img from '@/ui/img'
import { Module } from '.'
import Card from '../Card'

export default function ({
	eyebrow,
	intro = [],
	quotes,
	layout: l = 'grid',
	columns,
	_key,
	...props
}: Omit<QuoteList & { _key: string }, 'quotes'> & {
	quotes: Array<{ quote: PortableTextBlock[]; name: string; link: string }>
}) {
	const layout = stegaClean(l)

	return (
		<Module _key={_key} className="section space-y-8" {...props}>
			{(eyebrow || intro) && (
				<header className="">
					<h1 className="h1">{eyebrow}</h1>
					<PortableText value={intro} />
				</header>
			)}

			<div
				className={cn(
					'gap-lh',
					layout === 'carousel'
						? 'carousel carousel-scroll-buttons carousel-scroll-marker max-md:full-bleed auto-rows-fr pb-2 max-md:px-4 md:mask-r-from-[calc(100%-2rem)] md:pr-4'
						: [
								'grid md:auto-rows-fr',
								columns
									? `md:grid-cols-[repeat(var(--columns,1),minmax(0px,1fr))]`
									: 'md:grid-cols-[repeat(auto-fit,minmax(var(--container-2xs),1fr))]',
							],
				)}
				style={{ '--columns': columns }}
				data-anchor-name={`--quote-list-${_key}`}
			>
				{(quotes as unknown as Quote[])?.map((quote) => (
					<Card key={quote._id}>
						<blockquote className="prose grow">
							<PortableText value={quote.quote} />
						</blockquote>

						{quote.name && (
							<cite>
								<dl>
									<dt>
										&#x2014;{' '}
										{quote.link ? (
											<a
												className="link text-white"
												target="_blank"
												href={`${quote.link}`}
											>
												{quote.name}
											</a>
										) : (
											quote.name
										)}
									</dt>
								</dl>
							</cite>
						)}
					</Card>
				))}
			</div>
		</Module>
	)
}

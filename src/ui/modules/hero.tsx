import { PortableTextBlock } from 'sanity'
import { PortableText } from 'next-sanity'

export default async function Hero({
	title,
	subtitle,
	content,
}: {
	title: string
	subtitle: string
	content: PortableTextBlock[]
}) {
	return (
		<section className="section my-12 flex flex-col items-center justify-center">
			<div className="text-center">
				<h1 className="h1 text-[50px]">{title}</h1>
				<h2 className="h2">{subtitle}</h2>
			</div>
			<div className="mt-6">
				{content && content.length > 0 && <PortableText value={content} />}
			</div>
		</section>
	)
}

import { PortableTextBlock } from 'sanity'
import { PortableText } from 'next-sanity'
import { SanityImage } from '@/sanity/types'
import Card from '../Card'
import Img from '../img'

export default function AboutSection({
	title,
	content,
	image,
}: Partial<{
	title: string
	content: PortableTextBlock[]
	image: SanityImage
}>) {
	return (
		<section className="section flex gap-8 max-md:flex-col md:items-start">
			<Card className="w-full">
				<h2 className="h2">{title}</h2>
				<PortableText value={content} />
			</Card>
			{image && <Img image={image} alt={image.alt ?? 'about image'} />}
		</section>
	)
}

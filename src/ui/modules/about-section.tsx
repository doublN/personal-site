import { PortableTextBlock } from 'sanity'
import { PortableText } from 'next-sanity'
import { SanityImage } from '@/sanity/types'
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
		<section className="section">
			<h2>{title}</h2>
			<PortableText value={content} />
			{image && <Img image={image} alt={image.alt ?? 'about image'} />}
		</section>
	)
}

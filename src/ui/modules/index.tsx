import type { Get } from '@sanity/codegen'
import { stegaClean } from 'next-sanity'
import type {
	BLOG_POST_QUERY_RESULT,
	ModuleAttributes,
	PAGE_QUERY_RESULT,
} from '@/sanity/types'
import AboutSection from './about-section'
import Hero from './hero'
import IconCarousel from './icon-carousel'
import ProjectsSection from './projects-section'
import QuoteList from './quote-list'

const MODULES_MAP = {
	'quote-list': QuoteList,
	hero: Hero,
	'icon-carousel': IconCarousel,
	'about-section': AboutSection,
	'projects-section': ProjectsSection,
} as const

export default function ({
	page,
	post,
}: {
	page?: PAGE_QUERY_RESULT
	post?: BLOG_POST_QUERY_RESULT
}) {
	const modules = [page, post].flatMap((item) => item?.modules ?? [])

	const moduleSpecificProps = (module: ModuleProps) => {
		switch (module._type) {
			case 'blog-post-content':
				return { post }
			case 'breadcrumbs':
				return { currentPage: page || post }
			default:
				return {}
		}
	}

	return (
		<>
			{modules?.map((module) => {
				if (!module) return null

				const Component = MODULES_MAP[
					module._type as keyof typeof MODULES_MAP
				] as React.ComponentType

				if (!Component) return null

				return (
					<Component
						{...module}
						{...moduleSpecificProps(module)}
						key={module._key}
					/>
				)
			})}
		</>
	)
}

export type ModuleProps = Partial<
	Get<PAGE_QUERY_RESULT | BLOG_POST_QUERY_RESULT, 'modules', 0>
> & { attributes?: ModuleAttributes }

export function Module({
	as: As = 'section',
	_key,
	_type,
	attributes,
	children,
	...props
}: ModuleProps &
	React.HTMLAttributes<HTMLElement> & { as?: React.ElementType }) {
	const id = stegaClean(attributes?.uid) || `module-${_key}`
	const css = stegaClean(attributes?.scopedCss?.code)

	return (
		<As id={id} data-module={_type} hidden={attributes?.hidden} {...props}>
			{children}
			{css && <style>{`@scope{${css}}`}</style>}
		</As>
	)
}

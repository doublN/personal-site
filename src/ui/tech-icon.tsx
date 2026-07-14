import Link from 'next/link'
import { JSX } from 'react/jsx-runtime'
import AwsIcon from './icons/aws-icon'
import CssIcon from './icons/css-icon'
import CypressIcon from './icons/cypress-icon'
import HtmlIcon from './icons/html-icon'
import JavascriptIcon from './icons/javascript-icon'
import JestIcon from './icons/jest-icon'
import LaravelIcon from './icons/laravel-icon'
import MaterialUiIcon from './icons/material-ui-icon'
import MongoDBIcon from './icons/mongodb-icon'
import NextJsIcon from './icons/next-js-icon'
import PayloadIcon from './icons/payload-icon'
import PhpIcon from './icons/php-icon'
import PlaywrightIcon from './icons/playwright-icon'
import ReactIcon from './icons/react-icon'
import ReduxIcon from './icons/redux-icon'
import SanityIcon from './icons/sanity-icon'
import SqlIcon from './icons/sql-icon'
import TailwindIcon from './icons/tailwind-icon'
import TypescriptIcon from './icons/typescript-icon'

export default function TechIcon({
	_id = '',
	slug = '',
	title = '',
}: {
	_id?: string
	slug?: string
	title?: string
}) {
	const iconMap: Map<string, JSX.Element> = new Map([
		['html', <HtmlIcon />],
		['css', <CssIcon />],
		['javascript', <JavascriptIcon />],
		['typescript', <TypescriptIcon />],
		['react', <ReactIcon />],
		['nextjs', <NextJsIcon />],
		['tailwind', <TailwindIcon />],
		['materialui', <MaterialUiIcon />],
		['php', <PhpIcon />],
		['laravel', <LaravelIcon />],
		['sanitycms', <SanityIcon />],
		['payloadcms', <PayloadIcon />],
		['jest', <JestIcon />],
		['playwright', <PlaywrightIcon />],
		['redux', <ReduxIcon />],
		['cypress', <CypressIcon />],
		['aws', <AwsIcon />],
		['mongodb', <MongoDBIcon />],
		['sql', <SqlIcon />],
	])

	return (
		<Link
			href={`/projects?tech=${_id}`}
			className="group text-foreground relative flex items-center justify-center"
			style={{ width: 'inherit', height: 'inherit' }}
		>
			{iconMap.get(slug) || <span className="w-fit">{title}</span>}
		</Link>
	)
}

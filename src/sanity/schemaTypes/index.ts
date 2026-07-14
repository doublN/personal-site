import type { SchemaPluginOptions } from 'sanity'
// documents
import blogCategory from './documents/blog.category'
import blogPost from './documents/blog.post'
import form from './documents/form'
import globalModule from './documents/global-module'
import logo from './documents/logo'
import navigation from './documents/navigation'
import page from './documents/page'
import person from './documents/person'
import project from './documents/project'
import quote from './documents/quote'
import redirect from './documents/redirect'
import site from './documents/site'
import tech from './documents/tech'
import aboutSection from './modules/about-section'
import hero from './modules/hero'
import iconCarousel from './modules/icon-carousel'
import projectList from './modules/project-list'
import projectsSection from './modules/projects-section'
// modules
import quoteList from './modules/quote-list'
// objects
import cta from './objects/cta'
import link from './objects/link'
import linkList from './objects/link.list'
import metadata from './objects/metadata'
import moduleAttributes from './objects/module-attributes'

export const schema: SchemaPluginOptions = {
	types: [
		// documents
		site,
		page,
		form,
		globalModule,
		blogPost,
		redirect,
		project,

		// references
		blogCategory,
		logo,
		navigation,
		person,
		quote,
		tech,

		// objects
		cta,
		link,
		linkList,
		metadata,
		moduleAttributes,

		// modules
		quoteList,
		hero,
		iconCarousel,
		aboutSection,
		projectsSection,
		projectList,
	],

	templates: (templates) =>
		templates.filter(({ schemaType }) => !singletonTypes.includes(schemaType)),
}

const singletonTypes = ['site']

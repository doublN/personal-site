import { structureTool } from 'sanity/structure'
import { DocumentIcon } from '@sanity/icons'
import { VscServerProcess } from 'react-icons/vsc'
import { singleton } from './lib/builders'
import { pageDirectoriesListItem } from './lib/page-directories'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export default structureTool({
	structure: (S, context) =>
		S.list()
			.title('Content')
			.items([
				S.divider().title('Global'),
				singleton(S, 'site').title('Site').icon(VscServerProcess),
				S.documentTypeListItem('global-module').title('Global modules'),

				S.divider().title('Pages'),
				S.documentTypeListItem('page').title('Pages').icon(DocumentIcon),
				pageDirectoriesListItem(S, context),

				S.divider().title('Projects'),
				S.documentTypeListItem('project').title('Projects').icon(DocumentIcon),
				S.documentTypeListItem('tech').title('Tech'),

				S.divider().title('Navigation'),
				S.documentTypeListItem('navigation'),
				S.documentTypeListItem('redirect').title('Redirects'),

				S.divider().title('References'),
				S.documentTypeListItem('quote').title('Quotes'),
			]),
})

import { Arimo } from 'next/font/google'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { preconnect } from 'react-dom'
import Header from '@/ui/header'
import VisualEditing from '@/ui/modules/visual-editing'
import '@/app.css'

const fontSans = Arimo({
	subsets: ['latin'],
	weight: ['400', '500', '600'],
})

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	preconnect('https://cdn.sanity.io')

	return (
		<html
			lang="en"
			data-scroll-behavior="smooth"
			className={fontSans.className}
		>
			<NuqsAdapter>
				<body className="bg-background text-foreground antialiased">
					<Header />
					<main>{children}</main>

					<VisualEditing />
				</body>
			</NuqsAdapter>
		</html>
	)
}

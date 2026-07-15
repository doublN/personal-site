import Link from 'next/link'
import { FaChevronDown } from 'react-icons/fa6'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { getTech } from '@/actions/getTech'
import Card from '@/ui/Card'
import TechIcon from '@/ui/tech-icon'

export default async function TechFilterList() {
	const tech = await getTech()

	return (
		<Card>
			<label className="mb-0 flex w-full items-center justify-between">
				<input id="tech-open" type="checkbox" hidden />
				<div className="flex items-center gap-4">
					<Link href="/projects" className="group relative">
						<IoCloseCircleOutline size={25} className="text-white" />
					</Link>
					<h3 className="h3">Filter Tech</h3>
				</div>
				<FaChevronDown
					size={20}
					className="tech-open:-rotate-90 transition-all"
				/>
			</label>
			<div className="tech-open:flex tech-not-open:hidden mt-6 flex flex-wrap items-center gap-6">
				{tech.map((item, i) => (
					<div key={item._id + `${i}`} className="size-8">
						<TechIcon
							_id={item._id}
							slug={item.slug?.current}
							title={item.title}
						/>
					</div>
				))}
			</div>
		</Card>
	)
}

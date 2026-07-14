import { FaChevronDown } from 'react-icons/fa6'
import { getTech } from '@/actions/getTech'
import TechIcon from '@/ui/tech-icon'

export default async function TechFilterList() {
	const tech = await getTech()

	return (
		<div className="bg-background-light mb-8 space-y-4 rounded-md border-3 border-purple-500 p-6">
			<label className="mb-0 flex w-full items-center justify-between">
				<input id="tech-open" type="checkbox" hidden />
				<h3 className="h3">Filter Tech</h3>
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
		</div>
	)
}

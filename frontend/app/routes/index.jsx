import React from 'react'
import { DotNav } from '~/components/DotNav/Component'
import { useInView } from 'react-intersection-observer'

export default function Index() {
	const [indexActive, setIndexActive] = React.useState(0)
	
	const sections = [0,1]
	
	const Section = (props) => {
		const [ref, inView] = useInView({threshold: 0})
	
		React.useEffect(() => {
			if (inView) {
				props.inViewHandler()
			}
		}, [inView])
	
		return (
			<section ref={ref} id={props.id} className={`w-screen h-screen ${props.id == 0 ? 'bg-red-500' : 'bg-green-500'}`} >
				{props.children}
			</section>
		)
	}


	return (
		<div>
			<h1 className="text-blue-oasen text-4xl font-strada">Oasen onepager</h1>

			<DotNav sections={sections} activeState={indexActive} />
			<Section inViewHandler={() => setIndexActive(0)} id={sections[0]}>
			</Section>

			<Section inViewHandler={() => setIndexActive(1)} id={sections[1]}>
			</Section>


		</div>
	)
}

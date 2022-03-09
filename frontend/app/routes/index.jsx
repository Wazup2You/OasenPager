import React from 'react'
import { DotNav } from '~/components/DotNav/Component'
import { useInView } from 'react-intersection-observer'
import { SectionContainer } from '~/components/SectionContainer/Component'
import { SectionWater } from '~/components/SectionWater/Component'

export default function Index() {
	const [indexActive, setIndexActive] = React.useState(0)
	
	const sections = [0,1,2,3]
	
	const Section = (props) => {
		const [ref, inView] = useInView({threshold: 0.5})
	
		React.useEffect(() => {
			if (inView) {
				props.inViewHandler()
			}
		}, [inView])
	
		return (
			<section ref={ref} id={props.id} className={`h-screen w-screen bg-blue-oasen flex justify-center items-center relative`} >
				{props.children}
			</section>
		)
	}


	return (
		<div className='h-screen scrollbar-hide'>
			<DotNav sections={sections} activeState={indexActive} />
			<Section inViewHandler={() => setIndexActive(0)} id={sections[0]}>
				<SectionContainer></SectionContainer>
				<h1 className='absolute oasenh1'>Oasen gimmick door team W&W</h1>
			</Section>
			<Section inViewHandler={() => setIndexActive(1)} id={sections[1]}>
			<div className="absolute w-full h-full top-1/2 z-30 -translate-x-1/2 left-1/2 -translate-y-1/2 flex justify-center items-center"><SectionContainer></SectionContainer></div>
				<SectionWater></SectionWater>
			</Section>
			<Section inViewHandler={() => setIndexActive(2)} id={sections[2]}>
				<SectionContainer></SectionContainer>
			</Section>
			<Section inViewHandler={() => setIndexActive(3)} id={sections[3]}>
				<SectionContainer></SectionContainer>
			</Section>
		</div>
	)
}

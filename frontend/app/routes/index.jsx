import React from 'react'
import { DotNav } from '~/components/DotNav/Component'
import { useInView } from 'react-intersection-observer'
import { SectionContainer } from '~/components/SectionContainer/Component'
import { SectionWater } from '~/components/SectionWater/Component'
import { Navbar } from '~/components/Navbar/Component'
import { Footer } from '~/components/Footer/component'
import { Landing } from '~/components/Landing/component'
import { Research } from '~/components/Research/component'
import { Proces } from '~/components/Proces/component'
import { Accessibility } from '~/components/Concept/Accessibility'
import { OasenForKids } from '~/components/Concept/OasenForKids'
import { TweeDruppels } from '~/components/Concept/TweeDruppels'

export default function Index() {
	const [indexActive, setIndexActive] = React.useState(0)
	
	const sections = [0,1,2,3,4,5,6]
	
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
		<body class=''>
			<div className='h-screen scrollbar-hide'>			
			<Navbar />
			<DotNav sections={sections} activeState={indexActive} />			
			<Section inViewHandler={() => setIndexActive(0)} id={sections[0]}>	
				<SectionContainer></SectionContainer>
				<Landing />
			</Section>			
			<Section inViewHandler={() => setIndexActive(1)} id={sections[1]}>
			<div className="absolute w-full h-full top-1/2 z-30 -translate-x-1/2 left-1/2 -translate-y-1/2 flex justify-center items-center">
				<SectionContainer></SectionContainer>
				<Research /></div>
				<SectionWater></SectionWater>
			</Section>
			<Section inViewHandler={() => setIndexActive(2)} id={sections[2]}>
				<SectionContainer></SectionContainer>
				<Proces />
			</Section>
			<Section inViewHandler={() => setIndexActive(3)} id={sections[3]}>
				<SectionContainer></SectionContainer>
				<h1 className='absolute oasenh1'>Concepten</h1>
			</Section>
			<Section inViewHandler={() => setIndexActive(4)} id={sections[4]}>
				<SectionContainer></SectionContainer>
				<Accessibility />
			</Section>		
			<Section inViewHandler={() => setIndexActive(5)} id={sections[5]}>
				<SectionContainer></SectionContainer>
				<OasenForKids />
			</Section>	
			<Section inViewHandler={() => setIndexActive(6)} id={sections[6]}>
				<SectionContainer></SectionContainer>
				<TweeDruppels />
			</Section>		
			<Footer />
			<div class="p-10 bg-blue-oasen"></div>
		</div>
		</body>		
	)
}

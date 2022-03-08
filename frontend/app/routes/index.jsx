import React from 'react'

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
		<><div>
			
		</div>
		<div style={{
			backgroundColor: '#26B4F4',
			width: '1920px',
			height: '1080px'
		}}><h1 className="text-4xl font-strada">Oasen onepager</h1></div>
			
	
		</>
	)
}

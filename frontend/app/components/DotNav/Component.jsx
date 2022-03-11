import React from 'react'
import { Link } from 'remix'

export function DotNav (props) {
    console.log(props.activeState)
	return (
		<>
			<ul className='fixed top-1/2 right-5 -translate-y-1/2 z-50' >
				{props.sections.map((section, index) =>
				<Link to={`#${section}`} className=' relative top-0 w-2 h-2'>
					<li className={`${props.activeState === index ? 'opacity-100 bg-white scale-200' : 'opacity-50'} rounded-full cursor-pointer bg-white flex justify-center items-center p-1 mb-2 border-2 border-transparent h-5 w-5`} key={section} aria-label={props.activeState === index ? 'active section' : 'inactive section'}>
					</li>
					</Link>
				)}
			</ul>
		</>
	)
}
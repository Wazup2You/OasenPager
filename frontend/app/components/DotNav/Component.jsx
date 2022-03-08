import React from 'react'
import { Link } from 'remix'

export function DotNav () {
	return (
		<>
			<ul className='fixed top-1/2 right-5 -translate-y-1/2 z-10' >
				{this.props.sections.map((section, index) =>
					<li className={`${this.props.activeState === index ? 'opacity-100 bg-white scale-200' : ''} rounded-full cursor-pointer bg-white opacity-50 flex justify-center items-center p-1 mb-2 border-2 border-transparent`} key={section} aria-label={this.props.activeState === index ? 'active section' : 'inactive section'}>
						<Link to={`#${section}`} className=' relative top-0 w-2 h-2'></Link>
					</li>
				)}
			</ul>
		</>
	)
}

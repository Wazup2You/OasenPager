import React from 'react'
import { SectionContainer } from '../SectionContainer/Component'
import { WaveBottom } from '../WaveBottom/Component'
import WaveTop from '../WaveTop/Component'

export function SectionWater () {

    return(
    <div className='flex flex-col absolute w-screen'>
        <div className='z-20'>
            <WaveTop></WaveTop>
        </div>
        <div className='bg-blue-oasenDark w-full h-[80vh]'></div>
        <div className='z-20'>
            <WaveBottom></WaveBottom>
        </div>
    </div>
    )

}
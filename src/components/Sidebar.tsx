import { InformationContainer } from './InformationContainer'
import { SocialNetworks } from './SocialNetworks'

import Image from 'next/image'

import '../styles/components/sidebar.sass'



export function Sidebar(){
    return (
        <aside id="sidebar">
            <Image
                src='/avatar.jpg'
                alt='Photo'
                width={200}
                height={200}
                priority
            />
            <p className="title">Desenvolvedor João Vitor Angelo</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="meucurriculo.pdf" download="meucurriculo.pdf" className="btn">
                Download currículo
            </a>
        </aside>
    )
}


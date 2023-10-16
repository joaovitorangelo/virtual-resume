import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    { name: "linkedin", url: "https://www.linkedin.com/in/joão-vitor-angelo-da-silva-718173264", icon: <FaLinkedinIn /> },
    { name: "github", url: "https://github.com/joaovitorangelo", icon: <FaGithub /> },
    { name: "instagram", url: "https://www.instagram.com/joaovitorangelo_/", icon: <FaInstagram /> },
]

export function SocialNetworks(){
    return (
        <section id="social-networks">
            {socialNetworks.map((network) => (
                <a href={network.url} className='social-btn' id={network.name} key={network.name}>
                    {network.icon}
                </a>
            ))}
        </section>
    )
}


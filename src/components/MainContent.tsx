import '../styles/components/maincontent.sass'
import { AboutContainer } from './AboutContainer'
import { ProjectsContainer } from './ProjectsContainer'
import { TechnologiesContainer } from './TechnologiesContainer'


export function MainContent(){
    return (
        <main>
            <div id="main-content">
                <AboutContainer />
                <TechnologiesContainer />
                <ProjectsContainer />
            </div>
        </main>
    )
}


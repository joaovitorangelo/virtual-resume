import { Sidebar } from "@/components/Sidebar"
import { MainContent } from "@/components/MainContent"
//import SocialNetworks from "./components/SocialNetworks"

import "../styles/components/app.sass"


export default function Home() {
  return (
    <main className="portfolio">
        <Sidebar />
        <MainContent />
    </main>
  )
}

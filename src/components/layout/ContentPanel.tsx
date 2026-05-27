import type { Section } from "../../data/types"
import TopBar from "./TopBar"

// placeholder — you'll replace these with real components
const placeholders: Record<Section, string> = {
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    experience: 'Experience',
    blog: 'Blog',
    contact: 'Contact',
}

type Props = { active: Section }

export default function ContentPanel({ active }: Props) {
    return (
        <main className="flex-1 h-screen overflow-y-auto">
            <TopBar/>

            {/* Content area */}
            <div className="px-10 py-10">
                <p className="text-black font-mono text-sm">{placeholders[active]} section — build me out!</p>
            </div>
        </main>
    )
}
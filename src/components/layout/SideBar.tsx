import clsx from "clsx"
import type { Section } from "../../data/types"


const navItems : {id:Section, label: string, icon:string}[] = [
    { id: 'about', label: 'About', icon: '◈' },
    { id: 'projects', label: 'Projects', icon: '⬡' },
    { id: 'skills', label: 'Skills', icon: '⌬' },
    { id: 'experience', label: 'Experience', icon: '◎' },
    { id: 'blog', label: 'Blog', icon: '▤' },
    { id: 'contact', label: 'Contact', icon: '◉' },
]

type Props = {
    active: Section,
    onNavigate:(s: Section) => void
}


export default function SideBar ({active, onNavigate} : Props){
    return (
        <aside
            className="w-56 h-screen flex flex-col border-r border-black/5 bg-[#ededf1] shrink-0"
        >
            <div className="w-full h-16 border-b border-b-black text-center text-4xl font-bold p-x-3">
                NNZ
            </div>
            <div className=" text-xl px-5 py-6 border-b border-white/5">
                <p className=" font-mono text-purple-400 tracking-widest">ntando.dev</p>
                <p className="text-[11px] text-black/30 font-mono mt-0.5">CS Student</p>
            </div>
            <nav
                className="flex-1 px-3 py-4 flex flex-col gap-3"
            >
                {
                    navItems.map(item => 
                        <button 
                            key={item.id}
                            onClick={() => onNavigate(item.id)}
                            className={clsx('w-full items-center flex justify-between gap-x-3 gap-y-3 px-4 py-2 border-2 border-black rounded-md text-left transition-all', item.id == active ? 'bg-black text-white' : ' hover:bg-black hover:text-white' )}
                        >
                            <span className="text-base"> {item.label} </span>
                            <span className="font-medium tracking-wide"> {item.icon}</span>
                        </button>
                    )
                }
            </nav>

            <footer  className=" h-16 px-5 py-4 border-t border-black">
                <p className="text-[11px] font-mono text-black">Durban, ZA</p>
            </footer>
        </aside>
    )
}
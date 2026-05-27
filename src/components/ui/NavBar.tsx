import { useState } from "react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        {name: "Home", href: "#Home"},
        {name: "About", href: "#About"},
        {name: "Projects", href: "Projects"},
        {name: "Contact", href: "Contact"}
    ]

    return (
        <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/*LOGO WILL GO HERE*/}
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        PORTFOLIO
                    </div>
                    
                    {/* DESKTOP VIEW */}
                    <div className="hidden md:flex space-x-8">
                        {
                            navLinks.map((link) => (
                                <a 
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))
                        }
                    </div>
                    {/*MOBILE VIEW*/}
                    <button
                        onClick={()=> setIsOpen(!isOpen)}
                        className="md:hidden absolute right-10 text-gray-700 dark:text-gray-300"
                    >
                        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {
                                isOpen? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ): (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                                )
                            }
                        </svg>
                    </button>

                    {/*MOBILE MENU*/}
                    {isOpen && (
                        <div className="md:hidden absolute top-full right-10 bg-white dark:bg-gray-950 rounded-lg px-6 py-4 pb-4">
                            {
                                navLinks.map((link) =>
                                    <a 
                                        key={link.name} 
                                        href={link.href} 
                                        onClick={()=>setIsOpen(false)}
                                        className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600"
                                    >
                                        {link.name}
                                    </a>
                                )
                            }
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
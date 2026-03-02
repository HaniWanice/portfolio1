import Link from 'next/link';

export function Navbar() {
    return (
        <div className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
            <header className="pointer-events-auto flex items-center gap-4 sm:gap-8 rounded-full border border-slate-200/60 bg-white/20 px-6 py-3 backdrop-blur-xl shadow-lg shadow-blue-900/5 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/10">
                <Link href="/" className="font-bold text-xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-indigo-600">
                    HW.
                </Link>
                <nav className="flex items-center gap-4 sm:gap-6 text-sm font-medium">
                    <Link
                        href="#about"
                        className="text-slate-600 hover:text-indigo-600 transition-colors"
                    >
                        Objectif
                    </Link>
                    <Link
                        href="#parcours"
                        className="hidden sm:inline-block text-slate-600 hover:text-indigo-600 transition-colors"
                    >
                        Parcours
                    </Link>
                    <Link
                        href="#atouts"
                        className="hidden lg:inline-block text-slate-600 hover:text-indigo-600 transition-colors"
                    >
                        Atouts
                    </Link>
                    <Link
                        href="#projects"
                        className="text-slate-600 hover:text-indigo-600 transition-colors"
                    >
                        Projets
                    </Link>
                    <Link
                        href="#stack"
                        className="hidden sm:inline-block text-slate-600 hover:text-indigo-600 transition-colors"
                    >
                        Stack
                    </Link>
                </nav>
                <a
                    href="mailto:hani.wanice@example.com"
                    className="ml-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-slate-800 hover:scale-105 active:scale-95 shadow-md shadow-slate-900/20"
                >
                    Contact
                </a>
            </header>
        </div>
    );
}

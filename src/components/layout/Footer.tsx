import { Github, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 py-10 px-6 md:h-24 md:flex-row md:py-0 md:px-8">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <p className="text-center text-sm leading-loose text-slate-500 md:text-left">
                        Built by <span className="font-medium text-slate-900">Hani WANICE</span>. Minimalist structure.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/HaniWanice"
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-500 hover:text-indigo-600 transition-colors"
                    >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a
                        href="mailto:hani.wanice@example.com"
                        className="text-slate-500 hover:text-indigo-600 transition-colors"
                    >
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Database } from "@/types/database";
import { Github, ExternalLink, Mail } from "lucide-react";

type Project = Database["public"]["Tables"]["projects"]["Row"];

// Temporary mock data before Supabase integration
const mockProjects: Project[] = [
  {
    id: "1",
    title: "Plateforme Aérienne",
    description: "Système de gestion complet pour une compagnie aérienne incluant un dashboard d'administration CRUD.",
    tech_stack: ["Laravel", "SQLite", "PHP", "HTML/CSS"],
    demo_url: null,
    repo_url: "https://github.com/HaniWanice",
    created_at: new Date().toISOString()
  },
  {
    id: "2",
    title: "Jeu Interactif d'Apprentissage",
    description: "Mini-jeu web interactif appliquant la logique de programmation, la gestion d'événements et de chronomètres.",
    tech_stack: ["JavaScript", "DOM", "HTML5"],
    demo_url: "https://example.com/demo",
    repo_url: "https://github.com/HaniWanice",
    created_at: new Date().toISOString()
  },
  {
    id: "3",
    title: "Projet Keewic",
    description: "Conception UX/UI complète de l'interface d'une application mobile, construite en pensant produit avant de penser code.",
    tech_stack: ["Figma", "UX/UI", "Wireframing"],
    demo_url: "https://figma.com",
    repo_url: null,
    created_at: new Date().toISOString()
  }
];

export default function Home() {
  return (
    <>
      <Section id="hero" className="min-h-screen pt-32 pb-20">
        <div className="relative flex flex-col items-center">
          <Badge variant="outline" className="mb-8 rounded-full px-5 py-2 text-sm border-indigo-200/50 bg-white/60 shadow-sm font-medium text-slate-700">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 mr-3 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] shadow-[0_0_10px_rgba(52,211,153,0.5)]"></span>
            Disponible pour de nouvelles opportunités
          </Badge>

          <h1 className="bg-gradient-to-br from-slate-900 via-slate-700 to-indigo-900 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl md:text-8xl lg:text-[6rem] text-center pb-2">
            Hani WANICE
          </h1>

          <p className="mt-8 max-w-[48rem] text-lg text-slate-600 sm:text-2xl leading-relaxed text-center font-medium">
            Étudiant en <strong className="text-indigo-600 font-semibold">Licence 3 Informatique</strong>. <br />
            Recherche un stage de <strong className="text-indigo-600 font-semibold">Développeur Full Stack / Front-End</strong> (en Avril).
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" className="rounded-full px-8 h-14 text-base bg-slate-900 text-white shadow-xl shadow-slate-900/10 transition-transform hover:scale-105 active:scale-95 hover:bg-slate-800" asChild>
              <a href="#projects">Explorer mes projets</a>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-base transition-all hover:scale-105 active:scale-95 bg-white/70 backdrop-blur-md border-slate-200 hover:bg-white text-slate-700 hover:text-indigo-600" asChild>
              <a href="https://github.com/HaniWanice" target="_blank" rel="noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </Section>

      <Section id="about" className="bg-white/60 backdrop-blur-3xl border-y border-slate-100 shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
        <div className="mx-auto max-w-4xl space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-indigo-600">
              Objectif Professionnel
            </h2>
            <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full opacity-80"></div>
          </div>

          <div className="space-y-6 text-xl text-slate-700 leading-relaxed font-medium text-center">
            <p>
              Étudiant en informatique passionné par la conception logicielle, j'associe mon bagage universitaire à mon profil d'autodidacte.
            </p>
            <p>
              Doté d'une forte capacité d'assimilation technique, je souhaite intégrer une équipe de développement pour concevoir des solutions fiables et optimiser des interfaces existantes, tout en poursuivant ma montée en compétences.
            </p>
            <p className="text-indigo-600 font-semibold text-2xl pt-4">
              Curieux, rigoureux et impliqué, je suis motivé par l'idée d'évoluer dans un environnement exigeant.
            </p>
          </div>
        </div>
      </Section>
      <Section id="parcours" className="pb-10">
        <div className="mx-auto max-w-4xl space-y-16">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-indigo-600">
              Parcours
            </h2>
            <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full opacity-80"></div>
          </div>

          <div className="space-y-12">
            {/* UPEC */}
            <div className="relative pl-8 sm:pl-0">
              <div className="hidden sm:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>
              <div className="sm:flex items-center justify-between w-full">
                <div className="sm:w-5/12 text-left sm:text-right pr-8">
                  <h3 className="text-xl font-bold border-b-2 border-indigo-200 inline-block text-slate-800">2023 - 2026</h3>
                  <p className="mt-2 text-indigo-600 font-semibold text-lg">Université Paris-Est UPEC</p>
                </div>
                <div className="absolute left-0 sm:left-[50%] w-4 h-4 rounded-full bg-indigo-500 border-4 border-white shadow-sm -translate-x-[5px] sm:-translate-x-1/2 mt-1 sm:mt-0"></div>
                <div className="sm:w-5/12 pl-8 sm:pl-8 mt-4 sm:mt-0 text-left">
                  <h4 className="font-bold text-slate-800 text-lg">Licence Informatique</h4>
                  <p className="text-slate-600 mt-2">Algorithmique, Bases de données, Développement web...</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge variant="secondary" className="bg-slate-100 text-slate-600">JavaScript</Badge>
                    <Badge variant="secondary" className="bg-slate-100 text-slate-600">Java</Badge>
                    <Badge variant="secondary" className="bg-slate-100 text-slate-600">C</Badge>
                    <Badge variant="secondary" className="bg-slate-100 text-slate-600">PHP</Badge>
                    <Badge variant="secondary" className="bg-slate-100 text-slate-600">SQL</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* FreeCodeCamp */}
            <div className="relative pl-8 sm:pl-0">
              <div className="hidden sm:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>
              <div className="sm:flex items-center justify-between w-full flex-row-reverse">
                <div className="sm:w-5/12 text-left pl-8">
                  <h3 className="text-xl font-bold border-b-2 border-emerald-200 inline-block text-slate-800">2024</h3>
                  <p className="mt-2 text-emerald-600 font-semibold text-lg">freeCodeCamp</p>
                </div>
                <div className="absolute left-0 sm:left-[50%] w-4 h-4 rounded-full bg-emerald-500 border-4 border-white shadow-sm -translate-x-[5px] sm:-translate-x-1/2 mt-1 sm:mt-0"></div>
                <div className="sm:w-5/12 pr-8 sm:pr-8 mt-4 sm:mt-0 text-left sm:text-right">
                  <h4 className="font-bold text-slate-800 text-lg">Diplôme Responsive Web Design</h4>
                  <p className="text-slate-600 mt-2">Formation en ligne réputée (40h) en HTML & CSS.</p>
                </div>
              </div>
            </div>

            {/* Stage */}
            <div className="relative pl-8 sm:pl-0">
              <div className="hidden sm:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>
              <div className="sm:flex items-center justify-between w-full">
                <div className="sm:w-5/12 text-left sm:text-right pr-8">
                  <h3 className="text-xl font-bold border-b-2 border-rose-200 inline-block text-slate-800">2019</h3>
                  <p className="mt-2 text-rose-600 font-semibold text-lg">Agence Web Wirate</p>
                </div>
                <div className="absolute left-0 sm:left-[50%] w-4 h-4 rounded-full bg-rose-500 border-4 border-white shadow-sm -translate-x-[5px] sm:-translate-x-1/2 mt-1 sm:mt-0"></div>
                <div className="sm:w-5/12 pl-8 sm:pl-8 mt-4 sm:mt-0 text-left">
                  <h4 className="font-bold text-slate-800 text-lg">Stage d'observation</h4>
                  <p className="text-slate-600 mt-2">Découverte du monde professionnel du développement web.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="atouts" className="bg-indigo-50/50 backdrop-blur-3xl border-y border-slate-100 shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
        <div className="mx-auto max-w-5xl space-y-16">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-indigo-600">
              Atouts & Soft Skills
            </h2>
            <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full opacity-80"></div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-white/90 border-slate-100 p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4 text-indigo-600 font-bold text-xl">💡</div>
              <h3 className="font-bold text-slate-800 text-lg mb-2">Communication</h3>
              <p className="text-slate-600 text-sm">Transfert d'informations clair, attentif, et très à l'écoute des besoins.</p>
            </Card>
            <Card className="bg-white/90 border-slate-100 p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4 text-emerald-600 font-bold text-xl">🤝</div>
              <h3 className="font-bold text-slate-800 text-lg mb-2">Esprit d'équipe</h3>
              <p className="text-slate-600 text-sm">Très collaboratif, empathique, calme et toujours ouvert d'esprit face aux critiques constructives.</p>
            </Card>
            <Card className="bg-white/90 border-slate-100 p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-rose-100 flex items-center justify-center mb-4 text-rose-600 font-bold text-xl">🌍</div>
              <h3 className="font-bold text-slate-800 text-lg mb-2">Langues & Voyages</h3>
              <p className="text-slate-600 text-sm">Français (Natif), Anglais (Avancé), Espagnol (B2). Passions: Grèce, Espagne, Italie, Portugal.</p>
            </Card>
            <Card className="bg-white/90 border-slate-100 p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4 text-amber-600 font-bold text-xl">🎵</div>
              <h3 className="font-bold text-slate-800 text-lg mb-2">Piano (8 ans) & Bénévolat</h3>
              <p className="text-slate-600 text-sm">Rigueur musicale (Piano, Violon), art-thérapie, et bénévole actif pour la SPA Booglaw.</p>
            </Card>
          </div>
        </div>
      </Section>
      <Section id="projects">
        <div className="space-y-16 w-full">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-indigo-600">
              Projets
            </h2>
            <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full opacity-80"></div>
            <p className="text-slate-600 text-xl font-medium mt-4">
              Une sélection de mes réalisations, de la conception UI à l'architecture Backend.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full">
            {mockProjects.map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-6 text-[1.05rem] leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap justify-center gap-2 mt-auto">
                    {project.tech_stack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="px-3 py-1 bg-slate-100 text-slate-700 border-none">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t border-slate-100/60 bg-white/30 backdrop-blur-md">
                  {project.repo_url && (
                    <a
                      href={project.repo_url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-all hover:-translate-y-0.5 bg-white/80 px-4 py-2 rounded-full border border-slate-200/50 shadow-sm"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  )}
                  {project.demo_url && (
                    <a
                      href={project.demo_url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-all hover:-translate-y-0.5 bg-white/80 px-4 py-2 rounded-full border border-slate-200/50 shadow-sm"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Démo
                    </a>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section id="stack" className="bg-white/60 backdrop-blur-3xl border-t border-slate-100 pb-32 shadow-[0_-4px_30px_rgba(0,0,0,0.02)]">
        <div className="space-y-16 w-full">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-indigo-600">
              Stack Technique
            </h2>
            <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full opacity-80"></div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 max-w-4xl mx-auto w-full">
            <div className="flex flex-col items-center p-8 rounded-3xl bg-white/80 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(59,130,246,0.08)] transition-all">
              <h3 className="mb-6 text-2xl font-bold text-slate-800">Front-End</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge className="px-4 py-1.5 text-sm bg-slate-800 text-white border-transparent">React</Badge>
                <Badge className="px-4 py-1.5 text-sm bg-slate-800 text-white border-transparent">Next.js</Badge>
                <Badge className="px-4 py-1.5 text-sm bg-slate-800 text-white border-transparent">TypeScript</Badge>
                <Badge variant="secondary" className="px-4 py-1.5 text-sm bg-blue-100 text-blue-700 border-none hover:bg-blue-200">Tailwind CSS</Badge>
              </div>
            </div>

            <div className="flex flex-col items-center p-8 rounded-3xl bg-white/80 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(59,130,246,0.08)] transition-all">
              <h3 className="mb-6 text-2xl font-bold text-slate-800">Back-End</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="outline" className="px-4 py-1.5 text-sm border-slate-200 text-slate-700 bg-white">PostgreSQL / Supabase</Badge>
                <Badge variant="outline" className="px-4 py-1.5 text-sm border-slate-200 text-slate-700 bg-white">PHP (Laravel)</Badge>
                <Badge variant="outline" className="px-4 py-1.5 text-sm border-slate-200 text-slate-700 bg-white">Java</Badge>
              </div>
            </div>

            <div className="flex flex-col items-center p-8 rounded-3xl bg-white/80 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(59,130,246,0.08)] transition-all">
              <h3 className="mb-6 text-2xl font-bold text-slate-800">Conception</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="secondary" className="px-4 py-1.5 text-sm bg-purple-100 text-purple-700 border-none hover:bg-purple-200">Figma</Badge>
                <Badge variant="secondary" className="px-4 py-1.5 text-sm bg-slate-100 text-slate-700 border-none hover:bg-slate-200">Git / GitHub</Badge>
                <Badge variant="secondary" className="px-4 py-1.5 text-sm bg-slate-100 text-slate-700 border-none hover:bg-slate-200">UX / UI Design</Badge>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

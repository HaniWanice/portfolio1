import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <p className="footer__brand">
            <i aria-hidden="true" />
            Hani Wanice — développeur web full-stack
          </p>
          <nav className="footer__links" aria-label="Liens">
            <a href={`mailto:${site.email}`}>E-mail</a>
            <a href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={site.cv} target="_blank" rel="noreferrer">
              CV
            </a>
            <a href="#top">Haut de page ↑</a>
          </nav>
        </div>

        <div className="footer__inner">
          <span>
            © 2026 Hani Wanice · 24 ans · Université Paris‑Est, licence
            informatique
          </span>
          <span>Conçu et codé à Paris · Next.js</span>
        </div>
      </div>
    </footer>
  );
}

// Marque le moment où tout le contenu est dans la page (même repère que la version
// naïve). Script inline : il s'exécute dès que le HTML est lu, sans attendre React.
export function ReadyMark() {
  return <script dangerouslySetInnerHTML={{ __html: "performance.mark('contenu-pret')" }} />;
}

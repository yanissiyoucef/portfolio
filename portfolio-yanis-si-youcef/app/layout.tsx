import type {Metadata} from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {default: "Yanis Si Youcef — Portfolio", template: "%s — Yanis Si Youcef"},
  description: "Portfolio éditorial et vidéo de Yanis Si Youcef, rédacteur en chef.",
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="fr"><body>
    <aside className="sidebar">
      <div>
        <nav className="side-nav side-nav-clean">
          <Link href="/">Accueil</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/explorer">Explorer</Link>
        </nav>
        <div className="side-collections">
          <span>Médias</span>
          <Link href="/?collection=billboard-france">Billboard France</Link>
          <Link href="/?collection=booska-p">Booska-P</Link>
          <Link href="/?collection=le-bonbon">Le Bonbon</Link>
          <Link href="/?collection=msf">Médecins Sans Frontières</Link>
          <Link href="/?collection=ulyces">Ulyces</Link>
        </div>
      </div>
      <Link className="profile-link" href="/about"><strong>À propos</strong><span>Parcours et contact</span></Link>
    </aside>
    <div className="site-shell">
      <main>{children}</main>
      <footer><strong>Yanis Si Youcef</strong><span>Portfolio éditorial</span><span>© Yanis Si Youcef</span></footer>
    </div>
  </body></html>
}

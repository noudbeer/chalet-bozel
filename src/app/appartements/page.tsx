import Link from 'next/link';
import { APPARTEMENTS } from "@/data/appartements";

export default function ListeAppartements() {
  return (
    <main className="p-10 bg-mountain-light min-h-screen">
      <h1 className="text-4xl font-serif text-center mb-12">Nos Logements</h1>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {APPARTEMENTS.map((app) => (
          <Link href={`/appartements/${app.id}`} key={app.id}>
            <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-2xl transition cursor-pointer">
              <div className="h-48 bg-gray-300"></div> {/* Photo ici plus tard */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-mountain-dark">{app.nom}</h2>
                <p className="text-gray-500">{app.capacite} personnes</p>
                <p className="text-accent font-bold mt-2">En savoir plus →</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
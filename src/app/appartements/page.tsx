import Link from 'next/link';
import { APPARTEMENTS } from "@/data/appartements";

export default function ListeAppartements() {
  return (
    <main className="min-h-screen bg-mountain-light/20">
      <section className="relative sm:h-[40vh] flex items-center justify-center bg-mountain-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/fond-chalet.jpg')] bg-cover bg-center z-0" />
        
        <div className="relative z-10 text-center px-4 ">
          <h1 className="text-5xl md:text-7xl font-serif text-mountain-light mb-6">
            Nos Logements
          </h1>
          <p className="text-xl md:text-2xl text-wood-light font-light max-w-2xl mx-auto mb-10"></p>
        </div>
      </section>
      
      <section className="py-20 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {APPARTEMENTS.map((app) => (
          <Link href={`/appartements/${app.id}`} key={app.id}>
            <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-2xl transition cursor-pointer">
              <img
                src={`/images/${app.image}.jpg`}
                alt={`${app.image}.${app.extension}`}
                className="w-full h-48 bg-gray-300 object-cover group-hover:scale-110 transition duration-700"
              />
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-mountain-dark">{app.nom}</h2>
                <p className="text-gray-500">{app.capacite} personnes</p>
                <p className="text-accent font-bold mt-2 text-right">En savoir plus →</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
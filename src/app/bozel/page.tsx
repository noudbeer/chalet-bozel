import Link from 'next/link';

export default function Bozel() {
  return (
    <main className="min-h-screen bg-mountain-light/20">
      {/* Hero Section Bozel */}
      <section className="relative h-[60vh] flex items-center justify-center bg-mountain-dark overflow-hidden">
        {/* Placeholder pour une photo du village */}
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="absolute inset-0 bg-[url('/images/bozel-main.jpg')] bg-cover bg-center opacity-70 z-[-1]" />
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">
            Bozel en Vanoise
          </h1>
          <p className="text-xl text-wood-light font-light uppercase tracking-widest">
            L'authenticité au cœur des Alpes
          </p>
        </div>
      </section>

      {/* Contenu Présentation */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-serif text-mountain-dark mb-6 tracking-tight">
              Un village vivant toute l'année
            </h2>
            <div className="w-16 h-1 bg-accent mb-6"></div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Situé dans la vallée de la Tarentaise, Bozel est un véritable carrefour de montagne. 
              Contrairement aux stations de haute altitude, c'est un village qui vit au rythme 
              des saisons avec ses commerces, ses écoles et ses traditions savoyardes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              En hiver, la navette gratuite vous dépose à Courchevel en 15 minutes. 
              En été, le lac de Bozel devient un lieu de détente unique avec baignade, tennis et sentiers de randonnée.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* Galerie de photos simplifiée */}
            <div className="h-48 bg-mountain-light rounded-lg overflow-hidden shadow-md">
                <div className="w-full h-full bg-[url('/images/bozel-1.jpg')] bg-cover bg-center hover:scale-105 transition duration-500" />
            </div>
            <div className="h-48 bg-mountain-light rounded-lg overflow-hidden shadow-md translate-y-8">
                <div className="w-full h-full bg-[url('/images/bozel-2.jpg')] bg-cover bg-center hover:scale-105 transition duration-500" />
            </div>
          </div>
        </div>

        {/* Section Carte */}
        <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-serif text-mountain-dark mb-8 text-center">
            Où nous trouver ?
        </h2>
        
        <div className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
            {/* Lien qui entoure la carte pour ouvrir Google Maps */}
            <a 
            href="https://www.google.com/maps/place/?q=place_id:ChIJN58E3id5iUcRMAwgsu9T6NU" 
            target="_blank" 
            rel="noopener noreferrer"
            >
            {/* Simulation d'une carte avec une image ou un iframe */}
            <div className="h-[400px] w-full bg-mountain-light/30 flex items-center justify-center relative">
                {/* On utilise une iframe Google Maps pour l'aspect visuel direct */}
                <iframe
                //src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1d22384.45524673552!2d6.6331389!3d45.44326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47897927def09f37%3A0xd5e853efb2200c30!2s73350%20Bozel!5e0!3m2!1sfr!2sfr!4v1710000000000!5m2!1sfr!2sfr"
                src="https://www.google.com/maps/place/73350+Bozel/@45.4576378,6.6124759,13z/data=!3m1!4b1!4m6!3m5!1s0x47897927de049f37:0xd5e853efb2200c30!8m2!3d45.44326!4d6.6481389!16s%2Fm%2F03cc02r?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 pointer-events-none"
                ></iframe>
                
                {/* Overlay pour inciter au clic */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors flex items-center justify-center">
                <div className="bg-white/90 px-6 py-2 rounded-full shadow-lg text-mountain-dark font-bold transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                    Voir sur Google Maps ↗
                </div>
                </div>
            </div>
            </a>
        </div>
        
        <p className="mt-4 text-center text-gray-500 text-sm italic">
            Cliquez sur la carte pour agrandir et calculer votre itinéraire.
        </p>
        </section>

        {/* Bouton vers site officiel */}
        <div className="text-center bg-white p-12 rounded-3xl shadow-sm border border-mountain-light">
          <h3 className="text-2xl font-serif text-mountain-dark mb-6">Envie d'en savoir plus ?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.mairiedebozel.fr/" 
              target="_blank" 
              className="bg-mountain hover:bg-mountain-dark text-white px-8 py-4 rounded-lg font-bold transition shadow-lg"
            >
              Site officiel de Bozel
            </a>
            <Link 
              href="/" 
              className="bg-wood-light/20 text-wood-dark hover:bg-wood-light/40 px-8 py-4 rounded-lg font-bold transition"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
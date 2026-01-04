import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="relative h-[80vh] flex items-center justify-center bg-mountain-dark overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-0" />
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-mountain-light mb-6">
            Chalet de Bozel
          </h1>
          <p className="text-xl md:text-2xl text-wood-light font-light max-w-2xl mx-auto mb-10">
            Une parenthèse enchantée au cœur de la Vanoise. 
            Appartements d'exception pour vos séjours à la montagne.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/bozel" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 px-8 py-4 rounded-lg font-bold transition-all">
              Découvrir Bozel
            </Link>
            <Link href="/appartements" className="bg-accent hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105 shadow-xl">
              Découvrir nos appartements
            </Link>
            <button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 px-8 py-4 rounded-lg font-bold transition-all">
              Nous contacter
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-center px-6">
        <h2 className="text-3xl font-serif text-mountain-dark mb-4">L'art de vivre à la montagne</h2>
        <div className="w-24 h-1 bg-wood mx-auto mb-8"></div>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Situé à Bozel, notre chalet traditionnel vous accueille toute l'année. 
          Profitez du calme d'un village authentique tout en étant à quelques minutes 
          des plus grands domaines skiables du monde.
        </p>
      </section>
    </main>
  );
}
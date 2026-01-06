import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-mountain-light/20">
      <section className="relative sm:h-[40vh] flex items-center justify-center bg-mountain-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/fond-chalet.jpg')] bg-cover bg-center z-0" />
        
        <div className="relative z-10 text-center px-4 ">
          <h1 className="text-5xl md:text-7xl font-serif text-mountain-light mb-6">
            Chalet de Bozel
          </h1>
          <p className="text-xl md:text-2xl text-wood-light font-light max-w-2xl mx-auto mb-10">
            Une parenthèse enchantée au cœur de la Vanoise. 
            Appartements d'exception pour vos séjours à la montagne.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 sm:mb-0">
            <Link href="/bozel" className="bg-white/10 backdrop-blur-md hover:bg-white/8 text-white border border-white/30 px-8 py-4 rounded-lg font-bold transition-all hover:scale-105">
              Découvrir Bozel
            </Link>
            <Link href="/appartements" className="bg-wood hover:bg-wood/80 hover:backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105">
              Découvrir nos appartements
            </Link>
            <button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 px-8 py-4 rounded-lg font-bold transition-all hover:scale-105">
              Nous contacter
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-center px-6">
        <h2 className="text-3xl font-serif text-mountain-dark mb-4">L'art de vivre à la montagne</h2>
        <div className="w-24 h-1 bg-wood mx-auto mb-8"></div>

        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed mb-8">
          Situé à Bozel, notre chalet traditionnel vous accueille toute l'année. 
          Profitez du calme d'un village authentique au cœur d'un emplacement privilégié : 
          à seulement quelques minutes de Courchevel, vous accédez directement aux 3 Vallées, l'un des plus grand domaine skiable au monde.
        </p>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">  
          Profitez de l'effervescence des sommets internationaux et de ses 600 km de pistes la journée, 
          avant de retrouver le calme serein et la douceur de vivre de notre village savoyard en fin de soirée.
        </p>
      </section>
    </main>
  );
}
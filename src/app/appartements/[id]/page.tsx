import { APPARTEMENTS } from "@/data/appartements";
import { notFound } from "next/navigation";

export default function DetailAppartement({ params }: { params: { id: string } }) {
  const appartement = APPARTEMENTS.find(a => a.id === params.id);

  if (!appartement) return notFound();

  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-5xl font-serif mb-6">{appartement.nom}</h1>
      <div className="aspect-video bg-mountain-dark rounded-3xl mb-8 text-white flex items-center justify-center text-3xl font-bold">Photo de {appartement.nom}</div>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4 italic">Description</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{appartement.description}</p>
        </div>
        <div className="bg-wood-light/20 p-6 rounded-2xl h-fit">
          <p className="text-xl font-bold">{appartement.prixBase}€ <span className="text-sm font-normal">/ semaine</span></p>
          <hr className="my-4 border-wood" />
          <ul className="space-y-2 text-sm">
            <li>📏 {appartement.surface} m²</li>
            <li>👥 {appartement.capacite} Personnes</li>
            <li>⭐ {appartement.classement}</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
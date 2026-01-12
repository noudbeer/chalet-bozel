"use client"
import { useState } from 'react';
// 1. Import des données d'appartements
import { appartements } from '@/data/appartements';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
  e.preventDefault(); // Empêche le rechargement de la page
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  // --- 🛡️ ZONE DE CONTRÔLE FRONT-END ---
  
  // 1. Validation du téléphone (10 chiffres minimum)
  const phoneRegex = /^[0-9+ \(\)]{10,15}$/;
  if (!phoneRegex.test(data.phone)) {
    setStatus("❌ Le numéro de téléphone n'est pas valide.");
    return; // On arrête tout ici
  }

  // 2. Validation de l'email (format basique)
  if (!data.email.includes('@') || data.email.length < 5) {
    setStatus("❌ Veuillez entrer une adresse email valide.");
    return;
  }

  // 3. Vérification du choix du chalet
  if (!data.chalet || data.chalet === "") {
    setStatus("❌ Veuillez sélectionner un appartement.");
    return;
  }

  // 4. Vrification du sujet du mail
  if (!data.subject || data.subject.length < 3) {
    setStatus("❌ Veuillez préciser l'objet de votre message.");
    return;
  }

  // --- 🚀 SI TOUT EST OK, ON ENVOIE ---
  setStatus("Envoi en cours...");
  
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    setStatus(result.success ? "Message envoyé avec succès !" : result.error);
    console.log(result);
  } catch (err) {
    setStatus("Erreur lors de l'envoi.");
    console.log(err);
  }
};

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold">Contactez-nous</h2>
      
      <input name="email" type="email" placeholder="Votre Email" required className="border p-2 rounded" />
      <input name="phone" type="tel" placeholder="Téléphone" required className="border p-2 rounded" />
      
      {/* 2. Liste déroulante dynamique */}
      <select name="chalet" className="border p-2 rounded" required>
        <option value="">-- Choisissez un appartement --</option>
        {appartements.map((apt) => (
          <option key={apt.id} value={apt.nom}>
            {apt.nom}
          </option>
        ))}
        <option value="autre">Autre</option>
      </select>

      <input name="subject" type="text" placeholder="Objet de votre message" required className="border p-2 rounded" 
      />

      <textarea name="message" placeholder="Votre message" className="border p-2 rounded" required />
      
      <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
        Envoyer
      </button>

      {status && (
        <p className={`mt-2 font-bold ${status.includes('envoyé') ? 'text-green-600' : 'text-red-600'}`}>
          {status}
        </p>
      )}
    </form>
  );
}
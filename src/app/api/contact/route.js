import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Chemin du fichier log à la racine du projet
const LOG_FILE = path.join(process.cwd(), 'logs/contact_logs.json');

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, phone, chalet, subject, message } = body;
    const now = Date.now();

    // 1. Définir le dossier et le fichier
    const logDir = path.join(process.cwd(), 'logs');
    const logFile = path.join(logDir, 'contact_logs.json');
    // 2. CRUCIAL : Vérifier si le dossier /logs existe, sinon le créer
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }

    // 3. Lire les logs - Contrôle Anti-Spam (Rate Limiting)
    let logs = [];
    if (fs.existsSync(logFile)) {
      logs = JSON.parse(fs.readFileSync(logFile, 'utf-8'));
    }

    const fifteenMinsAgo = now - 15 * 60 * 1000;
    const userLogs = logs.filter(log => log.email === email && log.timestamp > fifteenMinsAgo);

    if (userLogs.length >= 2) {
      return NextResponse.json(
        { error: "Trop de messages. Réessayez dans 15 minutes." }, 
        { status: 429 }
      );
    }

    // --- 2. Enregistrement du log ---
    logs.push({ email, phone, chalet, subject, message, timestamp: now });
    fs.writeFileSync(LOG_FILE, JSON.stringify(logs, null, 2));

    // --- 3. Simulation envoi (Log console terminal) ---
    console.log(`Nouveau message de ${email} pour ${chalet}`);

    return NextResponse.json({ success: "Message envoyé avec succès !" }, { status: 200 });

  } catch (error) {
    console.error("Erreur API:", error);
    return NextResponse.json({ error: "Erreur interne du serveur" }, { status: 500 });
  }
}
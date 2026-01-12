export interface Appartement {
  id: number;
  nom: string;
  capacite: number;
  surface: number;
  prixBase: number;
  image: string;
  extension: string;
  description: string;
}

export const appartements: Appartement[] = [
  {
    id: 1,
    nom: "Edelweiss",
    capacite: 8,
    surface: 70,
    prixBase: 900,
    image: "bozel-ete", 
    extension: "jpg",
    description: "Grand appartement spacieux de 8 personnes",
  },
  {
    id: 2,
    nom: "Le Grand Bec",
    capacite: 8,
    surface: 80,
    prixBase: 700,
    image: "bozel-hiver", 
    extension: "jpg",
    description: "Grand appartement de 8 personnes",
  },
  {
    id: 3,
    nom: "Le Moyen Bec",
    capacite: 5,
    surface: 50,
    prixBase: 500,
    image: "bozel-main", 
    extension: "jpg",
    description: "Moyen appartement de 5 personnes",
  },
  {
    id: 4,
    nom: "Le Petit Bec",
    capacite: 3,
    surface: 30,
    prixBase: 300,
    image: "fond-chalet", 
    extension: "jpg",
    description: "Petit appartement de 3 personnes",
  },
  {
    id: 5,
    nom: "Le Moineau",
    capacite: 1,
    surface: 15,
    prixBase: 200,
    image: "gneugneu", 
    extension: "jpg",
    description: "Petit appartement de 3 personnes",
  },
];
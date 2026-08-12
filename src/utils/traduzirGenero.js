const generos = {
    Action: "Ação",
    Adventure: "Aventura",
    Animation: "Animação",
    Biography: "Biografia",
    Comedy: "Comédia",
    Crime: "Policial",
    Documentary: "Documentário",
    Drama: "Drama",
    Family: "Família",
    Fantasy: "Fantasia",
    "Film-Noir": "Noir",
    History: "História",
    Horror: "Terror",
    Music: "Música",
    Musical: "Musical",
    Mystery: "Mistério",
    Romance: "Romance",
    SciFi: "Ficção Científica",
    Sport: "Esporte",
    Thriller: "Suspense",
    War: "Guerra",
    Western: "Faroeste"
};

export function traduzirGenero(generosTexto) {
    return generosTexto
        .split(", ")
        .map((genero) => generos[genero] || genero)
        .join(", ");
}
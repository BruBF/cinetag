const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

export async function buscarFilme(imdbID) {
    try {
        const response = await fetch(
            `https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`
        );

        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Erro ao buscar filme:", error);
        return null;
    }
}
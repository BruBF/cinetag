import { createContext, useContext, useState, useEffect } from "react";

import videos from "../json/db.json";
import { buscarFilme } from "../services/omdb";

export const FilmesContext = createContext();

FilmesContext.displayName = "Filmes";

export default function FilmesProvider({ children }) {

    const [filmes, setFilmes] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        async function carregarFilmes() {
            try {
                const filmesCompletos = await Promise.all(
                    videos.map(async (video) => {

                        const dadosOmdb = await buscarFilme(video.imdbID);

                        return {
                            ...video,
                            imdbRating: dadosOmdb.imdbRating,
                            genre: dadosOmdb.Genre,
                            runtime: dadosOmdb.Runtime,
                            actors: dadosOmdb.Actors,
                            director: dadosOmdb.Director,
                            year: dadosOmdb.Year
                        };
                    })
                );

                setFilmes(filmesCompletos);
            } catch (error) {
                console.error(error);
            } finally {
                setCarregando(false);
            }
        }

        carregarFilmes();
    }, []);

    return (
        <FilmesContext.Provider
            value={{
                filmes,
                carregando
            }}
        >
            {children}
        </FilmesContext.Provider>
    );
}

export function useFilmesContext() {
    return useContext(FilmesContext);
}


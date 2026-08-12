import { createContext, useState, useContext } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
    const [favorito, setFavorito] = useState([]);

    return (
        <FavoritosContext.Provider 
        value={{favorito, setFavorito}}>
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritosContext() {
    const {favorito, setFavorito} = useContext(FavoritosContext);

        function adicionarFavorito(id) {
            const favoritoRepetido = favorito.includes(id);

            if(!favoritoRepetido) {
                return setFavorito([...favorito, id]);
            }

            return setFavorito(favorito.filter(favId => favId !== id));
        }
    return {
        favorito,
        adicionarFavorito
    }
}

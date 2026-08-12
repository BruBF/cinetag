import Banner from "components/Banner";
import Title from "components/Title";  
import Card from "components/Card";
import CardContainer from 'components/CardContainer';
import { useFavoritosContext } from 'contextos/Favoritos';
import styles from './Favoritos.module.css';
import { useFilmesContext } from 'contextos/Filmes';


function Favoritos() {
    const { favorito } = useFavoritosContext();
    const { filmes } = useFilmesContext();

    const filmesFavoritos = filmes.filter(
    (filme) => favorito.includes(filme.id)
    );

    return (
        <>
        <Banner imagem="favoritos"></Banner>
        <Title>
            <h1>Meus Favoritos</h1>
        </Title>
        <CardContainer>
            {filmesFavoritos.length > 0 ? (
                filmesFavoritos.map((filme) => (
                    <Card {...filme} key={filme.id} />
                ))
            ) : (
                <div className={styles.addFavorite}>
                    <p>Nenhum filme favoritado no momento.</p>
                    <p>Volte para a Home e clique no ❤️ para adicionar aos Favoritos</p>
                </div>
            )}
        </CardContainer>
        </>
    )
}

export default Favoritos;
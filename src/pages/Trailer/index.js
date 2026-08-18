import Banner from 'components/Banner';
import styles from './Trailer.module.css';
import { useFilmesContext } from 'contextos/Filmes';
import { useParams } from 'react-router-dom';
import { traduzirGenero } from '../../utils/traduzirGenero';
import Container from 'components/Container';

function Trailer() {
    const { filmes } = useFilmesContext();
    const parametros = useParams();

    const filme = filmes.find(
        (filme) => filme.url === parametros.id
    );


    if (!filme) {
        return <p>Carregando...</p>;
    }

    return (
        <>
            <Banner imagem="player" />

            <Container>
                <section className={styles.container}>
                    <div className={styles.detalhes}>
                        <h2>{filme.titulo}</h2>

                        <p>{filme.enredo}</p>

                        <p>
                            <strong>IMDb:</strong> {filme.imdbRating}
                        </p>

                        <p>
                            <strong>Gênero:</strong>{" "}
                            {traduzirGenero(filme.genre)}
                        </p>

                        <p>
                            <strong>Duração:</strong> {filme.runtime}
                        </p>

                        <p>
                            <strong>Diretor:</strong> {filme.director}
                        </p>

                        <p>
                            <strong>Elenco:</strong> {filme.actors}
                        </p>

                        <p>
                            <strong>Ano:</strong> {filme.year}
                        </p>
                    </div>
                    <div className={styles.trailer}>
                        <iframe
                            key={filme.id}
                            src={filme.link}
                            title={filme.titulo}
                            width="100%"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        />
                    </div>
                </section>
            </Container>
        </>
    );
}

export default Trailer;
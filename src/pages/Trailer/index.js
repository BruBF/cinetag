import Banner from 'components/Banner';
import styles from './Trailer.module.css';
import Title from 'components/Title';
import { useFilmesContext } from 'contextos/Filmes';
import { useParams } from 'react-router-dom';
import { traduzirGenero } from '../../utils/traduzirGenero';

function Trailer() {
    const { filmes } = useFilmesContext();
    const parametros = useParams();

    const filme = filmes.find(
        (filme) => filme.id === Number(parametros.id)
    );

    if (!filme) {
        return <p>Carregando...</p>;
    }

    return (
        <>
            <Banner imagem="player" />

            <Title>
                <h1>{filme.titulo}</h1>
            </Title>

            <section className={styles.container}>
                <div className={styles.trailer}>
                    <iframe
                       src={filme.link}
                        title={filme.titulo}
                        width="100%"
                        height="500"
                        allowFullScreen
                    />
                </div>

                <div className={styles.detalhes}>
                    <h2>{filme.titulo}</h2>

                    <p>{filme.enredo}</p>

                    <p>
                        <strong>⭐ IMDb:</strong> {filme.imdbRating}
                    </p>

                    <p>
                        <strong>🎭 Gênero:</strong>{" "}
                        {traduzirGenero(filme.genre)}
                    </p>

                    <p>
                        <strong>⏱️ Duração:</strong> {filme.runtime}
                    </p>

                    <p>
                        <strong>🎬 Diretor:</strong> {filme.director}
                    </p>

                    <p>
                        <strong>👥 Elenco:</strong> {filme.actors}
                    </p>

                    <p>
                        <strong>📅 Ano:</strong> {filme.year}
                    </p>
                </div>
            </section>
        </>
    );
}

export default Trailer;
import styles from './Card.module.css';
import { useFavoritosContext } from 'contextos/Favoritos';
import { traduzirGenero } from '../../utils/traduzirGenero';
import { Link } from 'react-router-dom';


function Card({id, titulo, capa, imdbID, imdbRating, genre, runtime}) {

    const { favorito, adicionarFavorito } = useFavoritosContext();

    const estaFavoritado = favorito.includes(id);

    const classeCoracao = estaFavoritado
         ? styles.favoritado 
         : styles.default;


    return (
        <div className={styles.container}>

            <Link
                to={`/filme/${id}`}
                className={styles.linkCard}
            >
                <img
                    src={capa}
                    alt={titulo}
                    className={styles.capa}
                />

                <div className={styles.containerDados}>
                    <p className={styles.titulo}>
                        {titulo}
                    </p>

                    {imdbRating && (
                        <div className={styles.informacoes}>

                            <div className={styles.containerInformacoes}>
                                <span className={styles.label}>
                                    Nota IMDb:
                                </span>

                                <span>{imdbRating}</span>
                            </div>

                            <div
                                className={`${styles.containerInformacoes} ${styles.genero}`}
                            >
                                <span className={styles.label}>
                                    Gênero:
                                </span>

                                <span>
                                    {traduzirGenero(genre)}
                                </span>
                            </div>

                            <div className={styles.containerInformacoes}>
                                <span className={styles.label}>
                                    Duração:
                                </span>

                                <span>{runtime}</span>
                            </div>

                        </div>
                    )}

                </div>
            </Link>

            <button
                className={styles.botaoFavorito}
                onClick={() => adicionarFavorito(id)}
            >
                <svg
                    alt="Favoritar filme"
                    className={`${styles.favorite} ${classeCoracao}`}
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                >
                    <path d="M9.98438 18.3281L8.53125 17.0156C6.875 15.5156 5.67188 14.4062 4.92188 13.6875C4.17188 12.9688 3.32812 12.0781 2.39062 11.0156C1.48438 9.95312 0.859375 9 0.515625 8.15625C0.171875 7.28125 0 6.39062 0 5.48438C0 3.95312 0.515625 2.65625 1.54688 1.59375C2.60938 0.53125 3.92188 0 5.48438 0C7.29688 0 8.79688 0.703125 9.98438 2.10938C11.1719 0.703125 12.6719 0 14.4844 0C16.0469 0 17.3438 0.53125 18.375 1.59375C19.4375 2.65625 19.9688 3.95312 19.9688 5.48438C19.9688 6.70312 19.5625 7.96875 18.75 9.28125C17.9375 10.5938 17.0469 11.7344 16.0781 12.7031C15.1406 13.6719 13.5938 15.125 11.4375 17.0625L9.98438 18.3281Z" />
                </svg>
            </button>

        </div>
    );

}

export default Card;
import Banner from "../../components/Banner";
import Title from "components/Title";
import Container from "components/Container";
import Card from "components/Card";
import CardContainer from "components/CardContainer";
import { useFilmesContext } from "contextos/Filmes";
import styles from "./Home.module.css";

function Home() {
    const { filmes, carregando } = useFilmesContext();

    if (carregando) {
        return <p>Carregando filmes...</p>;
    }

    return (
        <>
            <Banner imagem="home" />
            <Container>
                <Title>
                    <h1>Conheça mais sobre os filmes de Alfred Hitchcock</h1>
                </Title>

                <section className={styles.container}>
                    <CardContainer>
                        {filmes.map((filme) => (
                            <Card
                                {...filme}
                                key={filme.id}
                            />
                        ))}
                    </CardContainer>
                </section>
            </Container>
        </>
    );
}

export default Home;
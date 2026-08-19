import Container from "components/Container";
import Header from "components/Header";
import FavoritosProvider from "contextos/Favoritos";
import { Outlet } from "react-router-dom";
import Footer from "components/Footer";
import FilmesProvider from "contextos/Filmes";

function PaginaBase() {
    return (
        <main className="pagina-base">
            <Header />
                <FilmesProvider>
                    <FavoritosProvider>
                        <Container >
                            <Outlet />
                        </Container>
                    </FavoritosProvider>
                </FilmesProvider>
            <Footer />
        </main>
    )
}

export default PaginaBase;
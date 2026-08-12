import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import Header from "components/Header";
import Container from "components/Container";
import Footer from "components/Footer";
import FilmesProvider from 'contextos/Filmes';
import FavoritosProvider from "contextos/Favoritos";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Header />
            <Container>
                <FilmesProvider>
                    <FavoritosProvider>
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/Favoritos" element={<Favoritos />}></Route>
                        </Routes>
                    </FavoritosProvider>
                </FilmesProvider>
            </Container>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes;
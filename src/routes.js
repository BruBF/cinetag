import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import Trailer from "./pages/Trailer";
import NaoEncontrada from "pages/NaoEncontrada";
import PaginaBase from "pages/PaginaBase";

function AppRoutes() {
    return(
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PaginaBase />}>
                        <Route index element={<Home />}></Route>
                        <Route path="favoritos" element={<Favoritos />}></Route>
                        <Route path="filme/:id" element={<Trailer />}></Route>
                        <Route path="*" element={<NaoEncontrada />}></Route>
                    </Route>
                </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
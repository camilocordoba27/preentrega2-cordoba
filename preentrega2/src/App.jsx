

import Footer from "./componentes/Footer";
import Carrousel from './componentes/Carrousel';
import Banner from "./componentes/Banner";
import NavBar from "./componentes/NavBar";
import ItemDetailContainer from "./componentes/ItemDetailCointainer";
import ItemListContainer from "./componentes/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>

            <NavBar />
            <Carrousel />
            <Routes>
                <Route path={"/"} element={<ItemListContainer />} />
                <Route path={"/category/:id"} element={<ItemListContainer />} />
                <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            </Routes>
            <Banner />
            <Footer />
        </BrowserRouter>

    )
}

export default App;
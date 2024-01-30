import Footer from "./componentes/Footer";
import Banner from "./componentes/Banner";
import NavBar from "./componentes/NavBar";
import ItemDetailContainer from "./componentes/ItemDetailCointainer";
import ItemListContainer from "./componentes/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./componentes/Erorr404";


const App = () => {
    return (
        <BrowserRouter>

            <NavBar />
            <Routes>
                <Route path={"/"} element={<ItemListContainer />} />
                <Route path={"/category/:id"} element={<ItemListContainer />} />
                <Route path={"/item/:id"} element={<ItemDetailContainer />} />
                <Route path={"*"} element={<Error404 />} />
            </Routes>
            <Banner />
            <Footer />
        </BrowserRouter>

    )
}

export default App;
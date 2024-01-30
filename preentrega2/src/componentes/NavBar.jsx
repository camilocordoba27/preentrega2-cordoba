import Logo from './Logo'
import CartWidget from './CartWidget'


const NavBar = () => {
    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-md-1">
                    <Logo tamano={120} />
                </div>
                <div className="col-md-10 d-flex align-items-center">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">Hamburguesas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">Papas Fritas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">Bebidas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">Postres</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-1 d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar;
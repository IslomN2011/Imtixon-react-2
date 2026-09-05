import { MdOutlineShoppingCart } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <header className="header">
        <div className="container">
            <a className="logo" href="/">san+one</a>

            <nav className="menu" aria-label="Asosiy navigatsiya">
                <ul>
                    <li>Katalog</li>
                    <li>Biz haqimizda</li>
                </ul>
            </nav>

            <label className="search">
                <span className="visually-hidden">Qidirish</span>
                <input type="search"  />
                <CiSearch  />
            </label>

            <div className="buttons">
                <button className="language">UZ</button>
                <Link className="icon cart" to="/savat" aria-label="Savat">
                    <MdOutlineShoppingCart />
                    <span className="count">5</span>
                </Link>
                <button className="icon user" >
                    <CiUser />
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header
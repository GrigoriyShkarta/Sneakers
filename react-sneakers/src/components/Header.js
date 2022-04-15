import {Link} from "react-router-dom";

import {useCart} from "../hooks/useCart";

import logo from "../img/logo.png";
import basket from "../img/basket.svg";
import profile from "../img/profile.svg";
import like from "../img/like.svg"


const Header = (props) => {
    const {totalPrice} = useCart()

    return (
        <header className="d-flex justify-between align-center p-40">
            <Link to="/">
                <div className="d-flex align-center">
                    <img width={40} height={40} src={logo} alt="logo"/>
                    <div>
                        <h3 className="text-uppercase">React Sneakers</h3>
                        <p className="opacity-5">Магазин лучших кросовок</p>
                    </div>
                </div>
            </Link>
            <ul className="d-flex">
                <li className="mr-30 cu-p" onClick={props.onClickCart}>
                    <img width={18} height={18} src={basket} alt="basket"/>
                    <span>{totalPrice} грн</span>
                </li>
                <li className="mr-20 cu-p">
                    <Link to="/favorites">
                        <img src={like} alt="like"/>
                    </Link>
                </li>
                <li>
                    <Link to="/orders">
                        <img className="cu-p" src={profile} alt="profile"/>
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
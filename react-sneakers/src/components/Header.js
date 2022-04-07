import logo from "../img/logo.png";
import basket from "../img/basket.png";
import profile from "../img/profile.svg";


const Header = () => {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img width={40} height={40} src={logo} alt="logo"/>
                <div>
                    <h3 className="text-uppercase">React Sneakers</h3>
                    <p className="opacity-5">Магазин лучших кросовок</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-30">
                    <img width={18} height={18} src={basket} alt="basket"/>
                    <span>1205 грн</span>
                </li>
                <li>
                    <img src={profile} alt="profile"/>
                </li>
            </ul>
        </header>
    );
};

export default Header;
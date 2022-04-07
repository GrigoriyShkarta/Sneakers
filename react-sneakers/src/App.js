import logo from "./img/logo.png";
import basket from "./img/basket.png";
import profile from "./img/profile.svg";
import plus from "./img/plus.png";
import one from "./img/sneakers/1.jpg";
import two from "./img/sneakers/2.jpg";
import three from "./img/sneakers/3.jpg";
import four from "./img/sneakers/4.jpg";
import search from "./img/search.png";
import heard_after from "./img/heart-after.svg";
import btn_rem from "./img/btn-rem.svg";
import arrow from "./img/arrow.svg"

function App() {
  return (
    <div className="wrapper clear">
        <div style={{display: 'none'}} className="overlay">
            <div className="d-flex flex-column drawer">
                <h2
                    className="d-flex justify-between mb-30">
                    Корзина
                    <img className="removeBtn cu-p" src={btn_rem} alt="remove"/>
                </h2>


                <div className="items">
                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{backgroundImage: {one}}} className="cartItemImg">
                            <img className="mr-20" width={70} height={70} src={one} alt="sneakers"/>
                        </div>
                        <div className="mr-20">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>5 999 грн</b>
                        </div>
                        <img className="removeBtn" src={btn_rem} alt="remove"/>
                    </div>
                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{backgroundImage: {one}}} className="cartItemImg">
                            <img className="mr-20" width={70} height={70} src={one} alt="sneakers"/>
                        </div>
                        <div className="mr-20">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>5 999 грн</b>
                        </div>
                        <img className="removeBtn" src={btn_rem} alt="remove"/>
                    </div>
                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{backgroundImage: {one}}} className="cartItemImg">
                            <img className="mr-20" width={70} height={70} src={one} alt="sneakers"/>
                        </div>
                        <div className="mr-20">
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>5 999 грн</b>
                        </div>
                        <img className="removeBtn" src={btn_rem} alt="remove"/>
                    </div>
                </div>

                <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>10 254 грн</b>
                        </li>
                        <li>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>300 грн</b>
                        </li>
                    </ul>
                    <button className="greenButton">Оформить заказ <img src={arrow} alt="arrow"/></button>
                </div>

            </div>
        </div>

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

        <div className="content p-40">
            <div className="favorite">
                <div className="d-flex align-center justify-between mb-40">
            </div>
                <h1 >Все кроссовки</h1>
                <div className="search-block d-flex">
                    <img className="mt-15" width={14} height={14} src={search} alt="search"/>
                    <input placeholder="Поиск..."/>
                </div>
            </div>

            <div className="d-flex">
                <div className="card">
                    <img src={heard_after} alt="unliked"/>
                    <img width={133} height={112} src={one} alt="sneakers"/>
                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <p>Цена:</p>
                            <b>5 999 грн</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src={plus} alt="plus"/>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src={two} alt="sneakers"/>
                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <p>Цена:</p>
                            <b>5 999 грн</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src={plus} alt="plus"/>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src={three} alt="sneakers"/>
                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <p>Цена:</p>
                            <b>5 999 грн</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src={plus} alt="plus"/>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src={four} alt="sneakers"/>
                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <p>Цена:</p>
                            <b>5 999 грн</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src={plus} alt="plus"/>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
}

export default App;

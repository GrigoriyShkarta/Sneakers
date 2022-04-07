import btn_rem from "../img/btn-rem.svg";
import one from "../img/sneakers/1.jpg";
import arrow from "../img/arrow.svg";

const Drawer = () => {
    return (
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
    );
};

export default Drawer;
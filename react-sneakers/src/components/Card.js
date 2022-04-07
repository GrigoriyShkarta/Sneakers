import heard_after from "../img/heart-after.svg";
import one from "../img/sneakers/1.jpg";
import plus from "../img/plus.png";

const Card = () => {
    return (
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
    );
};

export default Card;
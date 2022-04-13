import btn_rem from "../../img/btn_rem.svg";
import arrow from "../../img/arrow.svg";
import arrow_back from "../../img/arrow_back.svg"
import empty_cart from "../../img/empty_box.png"

import styles from "./Drawer.module.scss"

const Index = ({onClose, items = [], onRemove} ) => {
    return (
        <div className={styles.overlay}>
            <div className={`${styles.drawer} d-flex flex-column`}>
                <h2
                    className="d-flex justify-between mb-30">
                    Корзина
                    <img
                        className={`${styles.removeBtn} cu-p`}
                        src={btn_rem} alt="remove"
                        onClick={onClose}
                    />
                </h2>

                {
                   items.length > 0 ?
                       <div>
                           <div className={styles.items}>
                               {items.map((obj) => (
                                   <div key={obj.id} className={`${styles.cartItem} d-flex align-center mb-20`}>
                                       <div className={styles.cartItemImg}>
                                           <img className="mr-20" width={70} height={70} src={obj.img} alt="sneakers"/>
                                       </div>
                                       <div className="mr-20 flex">
                                           <p className="mb-5">{obj.name}</p>
                                           <b>{obj.price} грн</b>
                                       </div>
                                       <img onClick={() => onRemove(obj.id)} className="removeBtn cu-p" src={btn_rem} alt="remove"/>
                                   </div>
                               ))}
                           </div>
                           <div className={styles.cartTotalBlock}>
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
                       :
                       <div className={`${styles.cartEmpty} d-flex align-center justify-center flex flex-column`}>
                           <img className="mb-20" src={empty_cart} alt="empty box" width={120} height={120}/>
                           <h2>Корзина пустая</h2>
                           <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                           <button onClick={onClose} className="greenButton">
                               <img src={arrow_back} alt="back"/>Вернуться назад
                           </button>
                       </div>
                }


            </div>
        </div>
    );
};

export default Index;
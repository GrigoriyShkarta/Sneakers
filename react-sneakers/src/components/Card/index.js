import {useState} from "react";

import ContentLoader from "react-content-loader"

import heard_after from "../../img/heart_after.svg";
import plus from "../../img/plus.svg";
import btn_done from "../../img/btn_done.svg";
import favorite from "../../img/favorite.svg"

import styles from "./Card.module.scss"

const Card = (
    {
        id,
        img,
        name,
        price,
        onFavorite,
        onPlus,
        favorited = false,
        added = false,
        loading = false
    }) => {

    const [isAdded, setIsAdded] = useState(added);
    const [isFavorite, setIsFavorite] = useState(favorited);

    const onClickPlus = () => {
        onPlus({id, img, name, price});
        setIsAdded(!isAdded);
    }

    const onClickFavorite = () => {
        onFavorite({id, name, img, price})
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={styles.card}>

            {
                loading ?
                <ContentLoader
                    speed={2}
                    width={165}
                    height={250}
                    viewBox="0 0 155 265"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb">
                    <rect x="0" y="0" rx="10" ry="10" width="155" height="155" />
                    <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
                    <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
                    <rect x="0" y="234" rx="5" ry="5" width="80" height="25" />
                    <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
                </ContentLoader>
                    :
                <>
                    <div className={styles.favorite} onClick={onClickFavorite}>
                        <img src={isFavorite ? favorite : heard_after} alt="unliked"/>
                     </div>
                    <img width="100%" height={135} src={img} alt="sneakers"/>
                    <h5>{name}</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <p>Цена:</p>
                            <b>{price} грн</b>
                        </div>
                        <img
                            className={styles.plus}
                            src={isAdded ? btn_done : plus} alt="plus"
                            onClick={onClickPlus}/>
                    </div>
                </>
            }


        </div>
    );
};

export default Card;
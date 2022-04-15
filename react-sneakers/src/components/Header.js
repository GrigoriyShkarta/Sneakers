import React from 'react';
import { Link } from 'react-router-dom';

import { useCart } from '../hooks/useCart';

import logo from "../img/logo.png";
import basket from "../img/basket.svg";
import profile from "../img/profile.svg";
import like from "../img/like.svg"

function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src={logo} alt="Logotype" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src={basket} alt="Корзина" />
          <span>{totalPrice} грн</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img width={18} height={18} src={like} alt="Закладки" />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img width={18} height={18} src={profile} alt="Пользователь" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;

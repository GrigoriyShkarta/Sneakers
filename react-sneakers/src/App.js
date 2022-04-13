import {Route} from "react-router-dom";
import {useEffect, useState} from "react";

import axios from "axios";

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Favorites from "./pages/Favorites";

import Home from "./pages/Home";


function App() {

  const [items, setItems] = useState([]);
  const [searchValue, SetSearchValue] = useState('')
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

  const _BaseAPI = 'https://62503bf8e3e5d24b341e3818.mockapi.io'

  useEffect(() => {
      async function fetchData() {
          const cartResponse = await axios.get(`${_BaseAPI}/cart`);
          const favoritesResponse = await axios.get(`${_BaseAPI}/favorites`);
          const itemsResponse = await axios.get(`${_BaseAPI}/items`);

          setIsLoading(false)

          setCartItems(cartResponse.data);
          setFavorites(favoritesResponse.data);
          setItems(itemsResponse.data);
      }
      fetchData();
  }, []);
  
  const onAddToCart = (obj) => {
      console.log(obj)
      try {
          if(cartItems.find((item) => Number(item.id) === Number(obj.id))) {
              axios.delete(`${_BaseAPI}/cart/${obj.id}`);
              setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
          } else {
              axios.post(`${_BaseAPI}/cart`, obj);
              setCartItems( (prev) => [...prev, obj]);
          }

      } catch (error) {

      }
  };

    const onAddToFavorites = async (obj) => {
        try {
            if (favorites.find(favObj => favObj.id === obj.id)) {
                axios.delete(`${_BaseAPI}/favorites/${obj.id}`);
            } else {
                const {data} = await axios.post(`${_BaseAPI}/favorites`, obj);
                setFavorites( (prev) => [...prev, data]);
            }
        } catch (error) {
            alert ('Не удалось добавить в закладки')
        }

    };

  const onRemoveItem = (id) => {
      axios.delete(`${_BaseAPI}/cart/${id}`);
      setCartItems( (prev) => prev.filter(item => item.id !== id));
  }

  const onChangeSearchValue = (event) => {
      SetSearchValue(event.target.value)
  }

  return (
    <div className="wrapper clear">
        {cartOpened && <Drawer
            onClose={() => setCartOpened(false)}
            items={cartItems}
            onRemove={onRemoveItem}
        />}

        <Header onClickCart={() => setCartOpened(true)}/>

        <Route exact path="/">
            <Home
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                SetSearchValue={SetSearchValue}
                onChangeSearchValue={onChangeSearchValue}
                onAddToFavorites={onAddToFavorites}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
            />
        </Route>
        <Route exact path="/favorites">
            <Favorites items={favorites} onAddToFavorites={onAddToFavorites}/>
        </Route>
    </div>
  );
}

export default App;

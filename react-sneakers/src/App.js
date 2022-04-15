import {Route} from "react-router-dom";
import {useEffect, useState} from "react";

import axios from "axios";

import AppContext from "./context";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Orders from "./pages/Orders";

function App() {

  const [items, setItems] = useState([]);
  const [searchValue, SetSearchValue] = useState('')
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const _BaseAPI = 'https://62503bf8e3e5d24b341e3818.mockapi.io';

  useEffect(() => {
      async function fetchData() {
          try {
              const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
                      axios.get(`${_BaseAPI}/cart`),
                      axios.get(`${_BaseAPI}/favorites`),
                      axios.get(`${_BaseAPI}/items`),
                  ]);

              setIsLoading(false)

              setCartItems(cartResponse.data);
              setFavorites(favoritesResponse.data);
              setItems(itemsResponse.data);
          } catch (error) {
              alert('Ошибка при запросе данных ;(');
              console.error(error);
          }
      }
      fetchData();
  }, []);
  
  const onAddToCart = async (obj) => {
      try {
          const findItem = cartItems.find((item) => +(item.parentId) === +(obj.id));
          if(findItem) {
              setCartItems(prev => prev.filter(item => +(item.parentId) !== +(obj.id)));
              await axios.delete(`${_BaseAPI}/cart/${findItem.id}`);
          } else {
              setCartItems( (prev) => [...prev, obj]);
              const {data} = await axios.post(`${_BaseAPI}/cart`, obj);
              setCartItems( (prev) => [...prev.map(item => {
                  if (item.parentId === data.parentId) {
                      return {
                          ...item,
                          id: data.id
                      };
                  }
                  return item;
              })]);

          }
      } catch (error) {
        alert('Ошибка при добавлении в корзину');
        console.error(error);
      }
  };

  const onAddToFavorites = async (obj) => {
        try {
            if (favorites.find(favObj => +(favObj.parentId) === +(obj.id))) {
                axios.delete(`${_BaseAPI}/favorites/${obj.id}`);
                setFavorites((prev) => prev.filter((item) => +(item.id) !== +(obj.id)))
            } else {
                const {data} = await axios.post(`${_BaseAPI}/favorites`, obj);
                setFavorites( (prev) => [...prev, data]);
            }
        } catch (error) {
            alert ('Не удалось добавить в закладки');
            console.error(error);
        }

    };

  const onRemoveItem = (id) => {
      try {
          axios.delete(`${_BaseAPI}/cart/${id}`);
          setCartItems( (prev) => prev.filter(item => +(item.id) !== +(id)));
      } catch (error) {
          alert('Ошибка при удалении из корзины');
          console.error(error);
      }
  };

  const onChangeSearchValue = (event) => {
      SetSearchValue(event.target.value)
  };

  const isItemAdded = (id) => {
      return cartItems.some((obj) => +(obj.parentId) === +(id))
  }

  return (
    <AppContext.Provider
        value={{cartItems, favorites, items, isItemAdded, onAddToFavorites, setCartOpened, setCartItems, onAddToCart}}>
        <div className="wrapper clear">

            <Drawer
                onClose={() => setCartOpened(false)}
                items={cartItems}
                onRemove={onRemoveItem}
                opened={cartOpened}
            />

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
                <Favorites />
            </Route>

            <Route exact path="/orders">
                <Orders/>
            </Route>
        </div>
    </AppContext.Provider>
  );
}

export default App;

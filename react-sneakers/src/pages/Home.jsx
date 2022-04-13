import Card from "../components/Card";

import search from "../img/search.png";
import btn_rem from "../img/btn_rem.svg";


const Home = (
    {
        items,
        searchValue,
        SetSearchValue,
        onChangeSearchValue,
        onAddToFavorites,
        onAddToCart,
        cartItems,
        isLoading
    }) => {

    console.log(cartItems)
        const renderItems = () => {
            const filtredItems = items.filter((item) => item.name.toLowerCase().includes(searchValue))
            return (isLoading ?
                [...Array(8)] :
                    filtredItems.map((item, index) => (
                        <Card
                            key={index}
                            onFavorite={(obj) => onAddToFavorites(obj)}
                            onPlus={(obj) => onAddToCart(obj)}
                            added={cartItems.some(obj => Number(obj.id) === Number(item.id))}
                            loading={isLoading}
                            {...item}
                        />
                    ))
            )
        }

    return (
        <div className="content p-40">
            <div className="favorite">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : "Все кроссовки"}</h1>
                    <div className="search-block d-flex">
                        <img className="mt-15" width={14} height={14} src={search} alt="search"/>
                        {searchValue && <img onClick={() => SetSearchValue('')} className="clear cu-p" src={btn_rem} alt="remove"/>}
                        <input onChange={onChangeSearchValue} value={searchValue} placeholder="Поиск..."/>
                    </div>
                </div>

                <div className="d-flex flex-wrap">
                    {renderItems()}
                </div>
            </div>
        </div>
    )
}

export default Home
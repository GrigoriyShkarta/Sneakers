import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

import search from "./img/search.png";


function App() {
  return (
    <div className="wrapper clear">
        <Drawer/>
        <Header/>
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
                <Card/>
            </div>
        </div>
    </div>
  );
}

export default App;

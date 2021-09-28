import React, { useMemo, useCallback, useEffect, useState } from 'react';
import Recipe from './Component/recipe';
import { useLocation, useHistory } from 'react-router-dom';
import ShoppingList from './Component/shoppingList'
import { makeid } from './helper';


export type foodsType = {
    id: string;
    name: string;
    img: string;
    descreption: string;
    toppics?: Array<ShoppingType>;
}

type ShoppingType = {
    id: string,
    name: string,
    count: number,
}

function App() {
    let location = useLocation();
    let history = useHistory();
    const [shoppingCart, setShopingCart] = useState<any>([])
    const [food, setFood] = useState([
        {
            id: makeid(10),
            name: 'Humberger',
            img: 'https://tse3.mm.bing.net/th?id=OIP.ChisTCccgjOKbVBSjpCxPAHaFW&pid=Api&P=0&w=211&h=153',
            descreption: 'kha ngon',
            toppics: [
                {
                    id: makeid(10),
                    name: 'thit',
                    count: 2
                }
            ]
        },
    ]);
    

    const endpoint = useMemo(() => location.pathname || "", [location]);

    const contentTab = useMemo(() => {
        switch (endpoint) {
            case "/recipe":
                return <Recipe
                    setShopingCart={setShopingCart}
                    food = {food}
                    setFood = {setFood}
                ></Recipe>;
            case '/shopping-list':
                return <ShoppingList
                    shoppingCart={shoppingCart}
                ></ShoppingList>
        }
    }, [endpoint, shoppingCart,food]);

    useEffect(() => {
        if (endpoint === '/') {
            history.push('/recipe')
        }
    }, [endpoint, history, food])

    const handleChangtab = useCallback(
        (endpoint) => {
            history.push(`/${endpoint}`);
        }, [history]
    )

    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li
                            onClick={() => handleChangtab('recipe-book')}
                            className="nav-link">recipe book
                        </li>

                        <li
                            onClick={() => handleChangtab('recipe')}
                            className="nav-link">recipe
                        </li>

                        <li
                            onClick={() => handleChangtab('shopping-list')}
                            className="nav-link">shopping list
                        </li>
                    </ul>
                </div>
            </nav>
            {contentTab}
        </div>
    );
}

export default App;

import React, { useEffect, useState } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Skeleton from '../components/PizzaBlock/Skeleton';
import PizzaBlock from '../components/PizzaBlock';

const Home = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://66ff70bd2b9aac9c997f4634.mockapi.io/items')
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr)
                setIsLoading(false)
            })
    }, [])

    return (
        <>
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading
                        ? [... new Array(6)].map((_, i) => <Skeleton key={i} />)
                        : items.map((el) => <PizzaBlock key={el.id} {...el} />)
                }
            </div>
        </>
    );
};

export default Home;
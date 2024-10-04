import React, { useState } from 'react';

function Categories() {
    const [activeIndex, setActiveIndex] = useState(0)

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',]

    const onClickCategory = (index) => {
        setActiveIndex(index)
    }
    return (
        <div className="categories">
            <ul>
                {
                    categories.length > 0 ?
                        categories.map((el, index) => (
                            <li key={index}
                                onClick={() => { onClickCategory(index) }}
                                className={activeIndex === index ? 'active' : ''}
                            >{el}</li>
                        ))
                        :
                        <h2>Category not found</h2>
                }
            </ul>
        </div>
    )
}

export default Categories;
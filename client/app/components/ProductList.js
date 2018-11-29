import React from 'react'
import ProductListItem from "./ProductListItem"

const ProductList = ({ items, goToDetail }) => {
    if (items && items.length)
        return <div className={'productList'}>{items.map((i, key) => <ProductListItem itemData={i} goToDetail={goToDetail} key={key}/>)}</div>
    return null
}

export default ProductList
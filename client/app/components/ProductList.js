import React from 'react'
import ProductListItem from "./ProductListItem"

import LoadingBar from './LoadingBar'

export const ListItemActuator = ({ action, message, isPerforming, children }) => {
    if(!action) return children

    return (<div className={'listItemWrapper'} onClick={() => {action()}}>
        {children}
        <LoadingBar isLoading={isPerforming} />
        {message}
    </div>)
}

const ProductList = ({ items, goToDetail, wrapperOptions, style='productList' }) => {
    if (items && items.length)
        return <div className={ style }>
                {items.map((i, key) => {
                    return (<ListItemActuator {...wrapperOptions} key={key}>
                        <ProductListItem itemData={i} goToDetail={goToDetail} key={key}/>
                    </ListItemActuator>)
                })}
            </div>
    return null
}

export default ProductList
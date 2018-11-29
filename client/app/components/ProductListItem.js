import React from 'react'
import Picture from './Picture'
import Price from './Price'

const ProductListItem = ({ itemData, goToDetail, style='productListItem' }) => {
    const { price, list_price: listPrice, discount } = itemData

    //Render botón para ir al detalle o en otro componente wrappeador?
    //considerar que puede ser reemplazado por el de Blacklistear/desBlacklistear
    return (
        <div className={style}>
            <Picture src={itemData.image_url} alt={itemData.description} />
            <h2>{itemData.description}</h2>
            <Price price={price} listPrice={listPrice} discount={discount} />
            <button type="button" onClick={() => {goToDetail(itemData.id)}}>Quiero ver más!</button>
        </div>
    )
}

export default ProductListItem
import React from 'react'
import Picture from './Picture'
import PriceItem from './PriceItem'

const ProductListItem = ({ itemData, goToDetail=()=>{}, style='productListItem' }) => {
    const { price, list_price: listPrice, discount } = itemData

    //Render botón para ir al detalle o en otro componente wrappeador?
    //considerar que puede ser reemplazado por el de Blacklistear/desBlacklistear
    return (
        <div className={style} onClick={() => {goToDetail(itemData.id)}}>
            <Picture src={itemData.image_url} alt={itemData.description} />
            <h2>{itemData.description}</h2>
            {/*<button type="button" onClick={() => {goToDetail(itemData.id)}}>Quiero ver más!</button>*/}
            <PriceItem price={price} listPrice={listPrice} discount={discount} />
        </div>
    )
}

export default ProductListItem
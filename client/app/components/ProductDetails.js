import React from 'react'

import Picture from './../components/Picture'

const ProductDetails = ({ details: { description, main_image, xid, summary }, backToList, style='productDetails' }) => {
    if (!xid) return null

    return (<div className={ style }>
        <h1>{ description }</h1>
        <Picture alt={ description } src={ main_image.url } style={ 'detailPicture' } />
        <hr/>
        <div>{ summary }</div>
        <button type="button" onClick={ backToList }>Volver al listado</button>
    </div>)
}

export default ProductDetails
import React from 'react'

const Discount = ({ value }) => {
    const discount = !!discount ? <h3>{discount}%</h3> : null
    return discount
}

const Price = ({ price, listPrice, discount, currencySign="$" }) => {
    const listPriceStyle = !!discount ? 'price-striked' : 'price'

    return (<>
        <h3 className={listPriceStyle}>{currencySign}{listPrice}</h3>
        <h4>{'precio de lista'}</h4>
        <h3>{currencySign}{price}</h3>
        <h4>{'precio'}</h4>
        <Discount value={discount}/>
    </>)
}

export default Price
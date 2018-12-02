import React from 'react'

const Discount = ({ value, style='itemDiscount' }) => {
    return !!value ? <h3 className={style}>{value}%{' OFF!'}</h3> : null
}

const PriceAtom = ({ value, description, currencySign="$", isStriked=false, style='priceAtom' }) => {
    return (<div className={style}>
        <h3 className={isStriked ? 'price-striked' : 'price-normal'}>{currencySign}{value}</h3>
        <h4>{description}</h4>
    </div>)
}

const PriceItem = ({ price, listPrice, discount, currencySign, style='priceItem' }) => {
    return (<>
        <div className={style}>
            <PriceAtom  value={listPrice}
                        description={'precio de lista'}
                        isStriked={!!discount} />
            <PriceAtom  value={price}
                        description={'precio de venta'} />
        </div>
        <Discount value={discount}/>
    </>)
}

export default PriceItem
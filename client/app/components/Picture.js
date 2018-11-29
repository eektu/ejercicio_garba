import React from 'react'

const Picture = ({ src, alt, style }) => {
    return <img src={src} alt={alt} className={style || 'productPicture'} />
}

export default Picture
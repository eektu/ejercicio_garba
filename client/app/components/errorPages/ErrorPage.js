import React from 'react'
import { Link } from 'react-router-dom'

import Picture from './../Picture'

export const applyDefaults = (Component, defaultValues) => props => (<Component {...props} {...defaultValues} />)

const ErrorPage = ({ message: { main, desc, action, img }, navAction, style='errorPage notFound' }) => {
    const pic = img ? <Picture src={img} alt={main} style={style} /> : null 
    return (<div className={style}>
        <h1>{main}</h1>
        {pic}
        <p>{desc}</p>
        <Link to={navAction}>{action}</Link>
    </div>)
}

export default ErrorPage
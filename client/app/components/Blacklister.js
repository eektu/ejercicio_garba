import React from 'react'

const Blacklister = ({ blackListIt, children: child, style='blacklister' }) => {
    return <div className={style}>{child}</div>
}

export default Blacklister
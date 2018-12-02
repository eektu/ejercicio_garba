import React from 'react'

const LoadingBar = ({ isLoading, message, style='loadingBar' }) => {
    return isLoading ? <div className={style}>{message}</div> : null
}

export default LoadingBar
import React from 'react'

//export default LoadingBar = ({ isLoading, message, style='loadingBar' }) => isLoading ? <div className={style}>{message}</div> : null
const LoadingBar = ({ isLoading, message, style='loadingBar' }) => {
    const content = isLoading ? <div className={style}>{message}</div> : null
    return content
}

export default LoadingBar
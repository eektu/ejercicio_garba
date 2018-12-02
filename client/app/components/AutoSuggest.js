import React from 'react'

import LoadingBar from './LoadingBar'


class UncontrolledAutoSuggest extends React.Component {
    constructor(props) {
        super(props)
        this.input = React.createRef()
    }

    render () {
        const { query, onQueryUpdated, queryResults, onSelect, isSearching, style='autoSuggest' } = this.props
        return (<div className={ style }>
            <UncontrolledSearchBox reference={ this.input } onQueryUpdated={ onQueryUpdated } />
            <LoadingBar isLoading={ isSearching } />
            <AutoSuggestResult onSelect={ onSelect } query={ query } queryResults={ queryResults } />
        </div>)
    }
}

const UncontrolledSearchBox = ({ reference, onQueryUpdated, style='searchBox' }) => {
    return (<div className={ style }>
        <input  type="text"
                ref={ reference }
                onChange={(ev) => { onQueryUpdated(ev.target.value) }}
                placeholder="Buscar producto.." />
        {/*<div onClick={ () => {
            console.log("hizo click en la cruz")
            onQueryUpdated('')
        }  }>X</div>*/}
    </div>)
}


const AutoSuggest = ({ query, onQueryUpdated, queryResults, onSelect, isSearching, style='autoSuggest' }) => {
    return (<div className={ style }>
        <SearchBox query={ query } onQueryUpdated={ onQueryUpdated } />
        <LoadingBar isLoading={ isSearching } />
        <AutoSuggestResult onSelect={ onSelect } query={ query } queryResults={ queryResults } />
    </div>)
}

const SearchBox = ({ query, onQueryUpdated, style='searchBox' }) => {
    return (<div className={ style }>
        <input  type="text"
                value={ query }
                onChange={(ev) => { onQueryUpdated(ev.target.value) }}
                placeholder="Buscar producto.." />
        <div onClick={ () => {
            console.log("hizo click en la cruz")
            onQueryUpdated('')
        }  }>X</div>
    </div>)
}

//pasarle onSelect => (id) => `/products/${id}`
const AutoSuggestResult = ({ query, onSelect, queryResults, style='autoSuggestResult' }) => {
    if(!queryResults) return null

    return (<div className={ style }>
        {queryResults.map((i, idx) => <ResultItem onSelect={ i => { onSelect(i.id) } }
                                                value={ i.description }
                                                query={ query } 
                                                key={ idx } />)}
    </div>)
}

const ResultItem = ({ query, value, onSelect, style='resultItem' }) => {
    //return (<Link className={ style } to={navAction}>{action}</Link>)
    const item = query ? value.split(query).join(<span>{query}</span>) : value
    return (<div className={ style } onClick={ () => { onSelect() }}>
        {item}
    </div>)
}

export default UncontrolledAutoSuggest
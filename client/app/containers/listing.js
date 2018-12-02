import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchProducts, FETCH_PRODUCTS_IN_PROGRESS } from '../redux/actions/listing'

import LoadingBar from '../components/LoadingBar'
import ProductList from '../components/ProductList'
import UncontrolledAutoSuggest from '../components/AutoSuggest';
import { fetchList, FETCH_LIST_IN_PROGRESS } from '../redux/actions/autosuggest';

class Listing extends React.Component {
  componentDidMount(){
    this.props.fetchProducts()
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { listing: { items, action }, goToDetails, autosuggest: { query, items: searchItems, action: searchAction }, fetchList } = this.props
    const isLoading = action === FETCH_PRODUCTS_IN_PROGRESS
    const isSearching = searchAction === FETCH_LIST_IN_PROGRESS

    return (
      <div className={'listingContainer'}>
        <LoadingBar isLoading={ isLoading }/>
        <ProductList items={ items } goToDetail={ goToDetails } />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  listing: state.listing,
  autosuggest: state.autosuggest,
  history
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchProducts,
      fetchList,
      goToDetails: (id) => push(`/products/${id}`)
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listing)
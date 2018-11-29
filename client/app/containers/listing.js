import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchProducts, FETCH_PRODUCTS_IN_PROGRESS } from '../redux/actions/listing'

import LoadingBar from '../components/LoadingBar'
import ProductList from '../components/ProductList'

class Listing extends React.Component {
  componentDidMount(){
    this.props.fetchProducts()
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { listing: { items, action }, goToDetails } = this.props
    const isLoading = action === FETCH_PRODUCTS_IN_PROGRESS
    const loadingMessage = 'Cargando productos...'

    return (
      <div className={'listingContainer'}>
        <LoadingBar isLoading={ isLoading } message={ loadingMessage } />
        <ProductList items={ items } goToDetail={goToDetails} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  listing: state.listing,
  history
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchProducts,
      goToDetails: (id) => push(`/products/${id}`)
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Listing)
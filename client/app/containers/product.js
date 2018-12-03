import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { fetchProductDetails, FETCH_DETAILS_IN_PROGRESS } from '../redux/actions/product'

import ProductDetails from '../components/ProductDetails'
import LoadingBar from '../components/LoadingBar'
import NotFound from '../components/errorPages/NotFound'


class Product extends React.Component {
  componentDidMount() {
    const { match: { params } } = this.props
    this.props.fetchProductDetails(params.id)
  }

  constructor(props) {
    super(props)
  }

  // ({ message: { main, desc, action, img }, navAction, style='errorPage notFound' }) 
  render() {
    const { product: { details, action, status }, backToList, match: { params }, style='productContainer' } = this.props
    const isLoading = (action === FETCH_DETAILS_IN_PROGRESS && details && details.id !== params.id)
    if (status === 404) return <NotFound />

    return (
      <div className={ style }>
        <LoadingBar isLoading={ isLoading }/>
        <ProductDetails details={ details } backToList={ backToList } />
      </div>
    )
  }
}

const mapStateToProps = ({ history, product }) => ({
  history, product
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchProductDetails,
      backToList: () => push('/products')
    },
    dispatch
  )

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Product))
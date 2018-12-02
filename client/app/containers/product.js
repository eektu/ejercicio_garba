import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { fetchProductDetails, FETCH_DETAILS_IN_PROGRESS } from '../redux/actions/product'

import ProductDetails from '../components/ProductDetails'
import LoadingBar from '../components/LoadingBar'


class Product extends React.Component {
  componentDidMount() {
    const { match: { params } } = this.props
    this.props.fetchProductDetails(params.id)
  }

  componentDidCatch(error, info) {
    console.log("atrapamos un error")
    console.log(error)
    console.log(info)
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { product, product: { details, action }, backToList, match: { params }, style='productContainer' } = this.props
    const isLoading = (action === FETCH_DETAILS_IN_PROGRESS && details && details.id !== params.id)

    console.log( product )
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
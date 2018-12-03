import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchProducts, toBlacklist, FETCH_PRODUCT_LIST_IN_PROGRESS } from '../redux/actions/admin'

import ProductList from '../components/ProductList'


class Admin extends React.Component {
  componentDidMount(){
    this.props.fetchProducts()
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { admin: { enabledList, disabledList }, toBlacklist } = this.props
    //const isLoading = action === FETCH_PRODUCT_LIST_IN_PROGRESS
    const wrapperOptions = {action: toBlacklist, message: 'A Blacklist!', isPerforming: false}

    return (<>
      <h1>Admin Panel</h1>
      <div>
        <div className={'productList'}>
          <ProductList items={ enabledList } wrapperOptions={ wrapperOptions } />
        </div>
        <div className={'blackListed'}>
          <ProductList items={ disabledList } />
        </div>
      </div>
    </>)
  }
}

const mapStateToProps = state => ({
  admin: state.admin,
  history
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchProducts,
      toBlacklist
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin)
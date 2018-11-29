import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

//import { fetchProductDetails } from '../redux/actions/product'

class Product extends React.Component {
  componentDidMount() {
    //fetchProductDetails()
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { match: { params } } = this.props;
    
    return (<>
      {`visualizando: ${params.id}`}
    </>)
  }
}

const mapStateToProps = (state) => ({
  history: state.history
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      //fetchProductDetails,
      changePage: () => push('/products')
    },
    dispatch
  )

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Product))
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Home = (props) => (
  <div>Hola!</div>
)

const mapStateToProps = ({  }) => ({
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
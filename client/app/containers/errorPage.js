import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const ErrorPage = (props) => (
  <div>Hola vieja, hubo un error</div>
)

const mapStateToProps = state => ({
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
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import AutoSuggest from './../components/AutoSuggest'

const Admin = (props) => (<>
  <div>Admin Panel</div>
  <AutoSuggest />
</>)



const mapStateToProps = ({ counter }) => ({
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin)
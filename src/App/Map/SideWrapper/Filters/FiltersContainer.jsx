import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as actions from "../../../../Redux/actions"
import Filters from "./Filters"

const mapStateToProps = state => ({
  pinFilters: state.map.pinFilters
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Filters)

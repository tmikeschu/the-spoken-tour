import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as actions from "../../../../Redux/actions"
import Legend from "./Legend"

const mapStateToProps = state => ({
  date: state.map.currentLocation.date
})

const mapDispatchToProps = dispatch => ({
  toggleFlags: bindActionCreators(actions, dispatch).toggleFlags
})

export default connect(mapStateToProps, mapDispatchToProps)(Legend)


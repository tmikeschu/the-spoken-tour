import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as actions from "../../Redux/actions"
import Instagram from "./Instagram"

const mapStateToProps = ({ photos }) => ({ photos })

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Instagram)


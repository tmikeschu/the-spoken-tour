import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as actions from "../../Redux/actions"
import Map from "./Map"

const mapStateToProps = ({ map }) => map

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Map)

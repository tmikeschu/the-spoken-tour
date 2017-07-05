import { connect } from "react-redux"
import Legend from "./Legend"

const mapStateToProps = state => ({
  date: state.map.currentLocation.date
})

export default connect(mapStateToProps, null)(Legend)


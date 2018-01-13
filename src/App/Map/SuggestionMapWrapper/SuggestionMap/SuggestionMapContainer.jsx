import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as actions from "../../../../Redux/actions"
import SuggestionMap from "./SuggestionMap"

const mapStateToProps = ({ map }) => {
  return Object.keys(map)
    .filter(k => k !== "suggestions")
    .reduce((acc, el) => {
      acc[el] = map[el]
      return acc
    }, {})
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionMap)

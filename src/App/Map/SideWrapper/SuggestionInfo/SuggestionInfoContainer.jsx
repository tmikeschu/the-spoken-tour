import { connect } from "react-redux"
import SuggestionInfo from "./SuggestionInfo"

const mapStateToProps = ({ map }) => ({
  currentSuggestion: map.currentSuggestion
})

export default connect(mapStateToProps)(SuggestionInfo)


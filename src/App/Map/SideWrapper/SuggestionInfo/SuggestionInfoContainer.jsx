import { connect } from "react-redux"
import SuggestionInfo from "./SuggestionInfo"

const mapStateToProps = ({ map }) => ({
  currentSuggestion: map.currentSuggestion,
  suggestionInfoIsActive: map.suggestionInfoIsActive
})

export default connect(mapStateToProps)(SuggestionInfo)


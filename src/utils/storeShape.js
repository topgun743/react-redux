//import { PropTypes } from 'react'
var PropTypes = React.PropTypes;

export default PropTypes.shape({
  subscribe: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  getState: PropTypes.func.isRequired
})

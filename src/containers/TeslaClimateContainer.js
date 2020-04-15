import { changeClimate } from "../actions/index"
import TeslaClimate from '../components/TeslaClimate/TeslaClimate';
import { connect } from 'react-redux';

const mapStateToProps =(state) => {
  return {
    value: state.config.climate,
    limit: state.config.temperature > 10
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeClimate: () => {
      dispatch(changeClimate())
    }
  }
}

const TeslaClimateContainer = connect(mapStateToProps, mapDispatchToProps)(TeslaClimate)

export default TeslaClimateContainer;

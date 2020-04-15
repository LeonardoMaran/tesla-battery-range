import { temperatureUp, temperatureDown } from "../actions"

const mapStateToProps =(state) => {
  return {
    currentValue: state.config.temperature,
    initValue: counterDefaultVal.temperature
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => {
      dispatch(temperatureUp(value))
    },
    decrement: (value) => {
      dispatch(temperatureDown(value))
    }
  }
}

const TeslaTempCounterContainer = connect(mapStateToProps, mapDispatchToProps)(TeslaCounter)
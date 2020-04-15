import { speedUp, speedDown } from "../actions"

const mapStateToProps =(state) => {
  return {
    currentValue: state.config.speed,
    initValue: counterDefaultVal.speed
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => {
      dispatch(speedUp(value))
    },
    decrement: (value) => {
      dispatch(speedDown(value))
    }
  }
}

const TeslaSpeedCounterContainer = connect(mapStateToProps, mapDispatchToProps)(TeslaCounter)
const mapStateToProps = (state) => {
  return {
    wheelsize: state.config.wheels
  }
}

const TeslaCarContainer = connect(mapStateToProps, null)(TeslaCar)